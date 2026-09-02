import { useEffect, useState } from "react";
import PortfolioPage from "@/PortfolioPage";
import ContactPage from "@/ContactPage";
import ProjectCoupangEats from "@/ProjectCoupangEats";
import ProjectIkea from "@/ProjectIkea";

function WheelScrollSmoother() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
      // No custom smoother here — still honor the shared scroll requests.
      const onScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
      const onScrollTo = (event: Event) => {
        const top = (event as CustomEvent<{ top: number }>).detail?.top ?? 0;
        window.scrollTo({ top, behavior: "smooth" });
      };
      window.addEventListener("app:scroll-to-top", onScrollToTop);
      window.addEventListener("app:scroll-to", onScrollTo);
      return () => {
        window.removeEventListener("app:scroll-to-top", onScrollToTop);
        window.removeEventListener("app:scroll-to", onScrollTo);
      };
    }

    let targetY = window.scrollY;
    let frameId = 0;
    let isSmoothing = false;

    const syncTarget = () => {
      if (!isSmoothing) targetY = window.scrollY;
    };

    const animate = () => {
      const currentY = window.scrollY;
      const nextY = currentY + (targetY - currentY) * 0.18;

      if (Math.abs(targetY - currentY) < 0.5) {
        window.scrollTo(0, targetY);
        isSmoothing = false;
        frameId = 0;
        return;
      }

      window.scrollTo(0, nextY);
      frameId = requestAnimationFrame(animate);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;

      event.preventDefault();
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY = Math.min(maxY, Math.max(0, targetY + event.deltaY));
      isSmoothing = true;

      if (!frameId) frameId = requestAnimationFrame(animate);
    };

    // Hand off to the browser's native smooth scroll for a given target — it
    // reaches the destination reliably instead of the wheel smoother's slow
    // asymptotic glide. Cancels any in-flight wheel-driven animation first so
    // it can't keep firing afterward and drag the page back to its old target.
    const scrollToY = (top: number) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
      isSmoothing = false;
      targetY = top;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const scrollToTop = () => scrollToY(0);
    const onScrollTo = (event: Event) => {
      const top = (event as CustomEvent<{ top: number }>).detail?.top ?? 0;
      scrollToY(top);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", syncTarget, { passive: true });
    window.addEventListener("app:scroll-to-top", scrollToTop);
    window.addEventListener("app:scroll-to", onScrollTo);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", syncTarget);
      window.removeEventListener("app:scroll-to-top", scrollToTop);
      window.removeEventListener("app:scroll-to", onScrollTo);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrolledEnough = window.scrollY > 280;
      // Hide once the footer (which has its own "back to top") is in view.
      const nearFooter =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 160;
      setVisible(scrolledEnough && !nearFooter);
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("app:scroll-to-top"))}
      aria-label="Back to top"
      className={
        "fixed bottom-7 right-7 z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#777] shadow-[0_8px_22px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:text-black " +
        (visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0")
      }
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 8L7 4L11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const isContactPage = path === "/contact";
  const isCoupangProject = path === "/projects/coupang-eats";
  const isIkeaProject = path === "/projects/ikea";

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const hash = window.location.hash.slice(1);
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The destination page mounts after navigation, so resolve the hash once
    // the section nodes have been painted.
    const scrollToHash = () => {
      const target = document.getElementById(hash);
      if (!target) return false;
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      return true;
    };

    const frame = window.requestAnimationFrame(() => {
      if (!scrollToHash()) window.setTimeout(scrollToHash, 120);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <WheelScrollSmoother />
      <BackToTopButton />
      {isContactPage ? (
        <ContactPage />
      ) : isCoupangProject ? (
        <ProjectCoupangEats />
      ) : isIkeaProject ? (
        <ProjectIkea />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
}
