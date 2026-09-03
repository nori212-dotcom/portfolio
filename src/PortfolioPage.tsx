import { useState, useEffect, useRef } from "react";
import signatureImg from "@/imports/PixoraPortfolio-1/1f54c6870da8a50abff60449876f8108d669f125.png";
import heroImg from "@/imports/PixoraPortfolio-1/b72de90d96d7c72b63a72133dc5e5a745f887b21.png";
import gallery3 from "@/imports/PixoraPortfolio-1/19b825796c8b29c56a27f3fbc5148b1e9e4a7bf4.png";
import gallery4 from "@/imports/PixoraPortfolio-1/2681fdb0d6c2a73fc995a57a883e729a84f9af42.png";
import coupangCover from "@/imports/coupang/cover.jpg";
import ikeaCover from "@/imports/ikea/interior.jpg";
import svgPaths from "@/imports/PixoraPortfolio-1/svg-keyty4nbmm";
import { sendContactMessage } from "@/lib/contact";

export const GITHUB_URL = "https://github.com/nori212-dotcom/portfolio";
export const RESUME_URL = "/resume.pdf";

export const PROJECTS = [
  { title: "COUPANG EATS", cat: "광고 영상, 포트폴리오", img: coupangCover, href: "/projects/coupang-eats" },
  // galleryFit only affects the bottom marquee box (480x360); the hover preview (320x210) always contains.
  { title: "IKEA", cat: "홈페이지 리디자인, 웹 개발", img: ikeaCover, href: "/projects/ikea", galleryFit: "cover" },
  { title: "SPACE NEEDLE", cat: "UX/UI, 개발", img: gallery3 },
  { title: "FABRIC", cat: "모션 디자인, 디자인 디렉션", img: gallery4 },
] as { title: string; cat: string; img: string; href?: string; galleryFit?: "cover" | "contain" }[];

/* ─── Scroll reveal ──────────────────────────────────────────────────────────── */
// Fires once when the element first enters the viewport, then disconnects —
// sections stay visible on scroll-up instead of re-animating every pass.
function useRevealed<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

const revealStyle = (visible: boolean, delay = 0): React.CSSProperties =>
  visible
    ? {
        animationName: "fade-up",
        animationDuration: "0.7s",
        animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        animationFillMode: "both",
        animationDelay: `${delay}ms`,
      }
    : { opacity: 0 };

/* ─── Preloader ─────────────────────────────────────────────────────────────── */
function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let v = 0;
    const tick = () => {
      v += Math.random() * 18 + 4;
      if (v >= 100) {
        v = 100;
        setPct(100);
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 600);
        }, 300);
        return;
      }
      setPct(Math.floor(v));
      setTimeout(tick, 60 + Math.random() * 60);
    };
    const id = setTimeout(tick, 80);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500"
      style={{ opacity: leaving ? 0 : 1, pointerEvents: leaving ? "none" : "all" }}
    >
      <div
        className="text-white select-none"
        style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, fontSize: "clamp(80px,10vw,160px)", lineHeight: 1 }}
      >
        {String(pct).padStart(2, "0")}
        <span style={{ color: "#ff4e11" }}>%</span>
      </div>
      <div className="mt-8 h-px w-48 bg-white/20 overflow-hidden">
        <div
          className="h-full bg-[#ff4e11] transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p
        className="mt-6 text-white/40 text-sm uppercase tracking-widest"
        style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
      >
        Loading
      </p>
    </div>
  );
}

/* ─── Seamless Marquee ──────────────────────────────────────────────────────── */
function Marquee({
  items,
  speed = 60,
  dark = false,
}: {
  items: string[];
  speed?: number;
  dark?: boolean;
}) {
  const text = items.join("   ");
  const color = dark ? "text-white" : "text-[#0a0a0a]";

  return (
    <div className="overflow-hidden w-full" aria-hidden>
      <div
        className="flex whitespace-nowrap w-max will-change-transform"
        style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`${color} shrink-0 pr-16`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(64px,14vw,200px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Let's Talk blob ───────────────────────────────────────────────────────── */
function LetsTalkBlob({ loaded }: { loaded: boolean }) {
  return (
    <a
      href="/contact"
      className="group relative block shrink-0"
      style={{
        width: 160, height: 160,
        ...(loaded ? {
          animationName: "scale-in",
          animationDuration: "0.6s",
          animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          animationFillMode: "both",
          animationDelay: "1200ms",
        } : { opacity: 0 }),
      }}
      aria-label="Let's Talk"
    >
      <svg
        className="absolute inset-0 size-full"
        style={{ animation: "spin-slow 12s linear infinite" }}
        viewBox="0 0 190 190"
        fill="none"
      >
        <path d={svgPaths.pfec6e00} fill="#FF4E11" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[5px]">
        <span
          className="text-white text-center leading-tight"
          style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, fontSize: 16.6 }}
        >
          Let&apos;s Talk
        </span>
        <svg width="13" height="13" viewBox="0 0 9.5 9.5" fill="none">
          <path d={svgPaths.p3e082680} stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </a>
  );
}

/* ─── Header ────────────────────────────────────────────────────────────────── */
const NAV = ["HOME", "PAGES", "PROJECT", "CONTACT"];

const scrollToElementWithOffset = (id: string, offset = 100) => {
  const el = document.getElementById(id);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    // Routed through the shared "app:scroll-to" event (handled in App.tsx) so
    // it cancels any in-flight wheel-driven scroll first — calling
    // window.scrollTo directly here would let that stale animation keep
    // running and drag the page back, making a repeat click look like a no-op.
    window.dispatchEvent(
      new CustomEvent("app:scroll-to", { detail: { top: Math.max(0, offsetPosition) } })
    );
  }
};

const goToMain = () => {
  if (window.location.pathname === "/") {
    // On the main page: clear any #hash and smoothly glide to the top.
    if (window.location.hash) history.replaceState(null, "", "/");
    window.dispatchEvent(new Event("app:scroll-to-top"));
  } else {
    // From another page: load the clean main page from the top.
    window.location.assign("/");
  }
};

const NAV_ACTIONS: Record<string, () => void> = {
  HOME: goToMain,
  PROJECT: () => scrollToElementWithOffset("projects", 100),
  CONTACT: () => scrollToElementWithOffset("contact", 100),
};

function Header({ onContactClick, loaded }: { onContactClick: () => void; loaded: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const runNavAction = (label: string) => {
    (label === "CONTACT" ? onContactClick : NAV_ACTIONS[label])();
    setMenuOpen(false);
  };

  return (
    <header className="relative z-40 border-b border-black/10 bg-white">
    <div className="relative flex items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5">
      {/* nav-left */}
      <nav className="hidden lg:flex gap-2 items-center shrink-0">
        {NAV.map((label) => (
          <div key={label} className="relative group py-2">
            <button
              onClick={() => runNavAction(label)}
              className="bg-[#f5f5f5] hover:bg-[#0a0a0a] hover:text-white rounded-full px-4 py-1 text-sm transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}
            >
              {label}
            </button>
            {label === "PAGES" && (
              <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-white border border-[#eaeaea] rounded-xl shadow-lg p-2 min-w-[120px] flex flex-col gap-1">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                  >
                    GitHub
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            )}
            {label === "PROJECT" && (
              <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-white border border-[#eaeaea] rounded-xl shadow-lg p-2 min-w-[160px] flex flex-col gap-1">
                  {PROJECTS.map((p, idx) => (
                    <button
                      key={p.title}
                      onClick={() => scrollToElementWithOffset(`project-${idx}`, 100)}
                      className="w-full text-left block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* logo — absolutely centered */}
      <button
        onClick={goToMain}
        className="text-[22px] md:text-[28px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[#ff4e11] whitespace-nowrap flex cursor-pointer bg-transparent border-none outline-none pb-1.5"
        style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
      >
        {"Seung Woon".split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              ...(loaded ? {
                animationName: "letter-rise",
                animationDuration: "0.5s",
                animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                animationFillMode: "both",
                animationDelay: `${i * 60}ms`,
              } : { opacity: 0 }),
            }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </button>

      {/* nav-right */}
      <div className="hidden lg:flex items-center gap-6 justify-end shrink-0">
        <span
          className="text-[#262626] text-[16px]"
          style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
        >
          Soyul8363@GMAIL.COM
        </span>
      </div>

      {/* mobile menu toggle */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuOpen}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[#0a0a0a] lg:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          {menuOpen ? (
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          ) : (
            <path d="M1 4H15M1 8H15M1 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          )}
        </svg>
      </button>
    </div>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((label) => (
              <button
                key={label}
                onClick={() => runNavAction(label)}
                className="rounded-lg px-3 py-3 text-left text-[15px] text-[#0a0a0a] hover:bg-[#f5f5f5]"
                style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}
              >
                {label}
              </button>
            ))}
            <div className="my-2 border-t border-black/10" />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-[15px] text-[#0a0a0a] hover:bg-[#f5f5f5]"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              GitHub
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-[15px] text-[#0a0a0a] hover:bg-[#f5f5f5]"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
const SKILL_TAGS = ["Art Direction", "Web Design", "Branding", "Motion Design", "HTML"];

function Hero({ loaded }: { loaded: boolean }) {
  const introLines = ["안녕하세요.", "아이디어를 코드로 구현하는", "개발자 이승운입니다."];

  return (
    <section id="top" className="relative bg-white h-auto lg:h-[660px]">
      {/* Portrait — image clipped to 700 px, gradient extends to section bottom */}
      <div
        className="relative mx-auto w-[240px] h-[207px] mt-6 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[50px] lg:w-[708px] lg:h-[610px] pointer-events-none"
        style={{
          ...(loaded ? {
            animationName: "fade-in",
            animationDuration: "1s",
            animationTimingFunction: "ease",
            animationFillMode: "both",
            animationDelay: "100ms",
          } : { opacity: 0 }),
        }}
      >
        {/* Image clipped so it never bleeds below the frame */}
        <div className="absolute inset-x-0 top-0 h-[190px] lg:h-[560px] overflow-hidden">
          <img
            src={heroImg}
            alt="이승운 포트레이트"
            className="absolute w-full h-full object-cover object-top"
          />
        </div>
        {/* Gradient covers full frame height — white at bottom, no hard line */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 48%, rgba(255,255,255,0.45) 66%, rgba(255,255,255,0.88) 82%, #fff 100%)",
          }}
        />
      </div>

      {/* Content row */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-6 lg:gap-0 px-6 md:px-12 lg:px-20 pt-4 lg:pt-10 pb-8 lg:pb-3 h-auto lg:h-full">
        {/* Left: intro + signature at eye level, socials at bottom */}
        <div className="relative flex flex-col w-full lg:w-[540px] shrink-0 lg:self-stretch">
          {/* Eye-level content */}
          <div
            className="relative lg:absolute lg:top-[35%]"
            style={loaded ? {
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              animationFillMode: "both",
              animationDelay: "400ms",
            } : { opacity: 0 }}
          >
            <p
              className="hidden"
              style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
            >
              안녕하세요.
              <br />
              아이디어를 코드로 구현하고, 새로운 것을 만들어가는
              <br />
              개발자 이승운입니다.
            </p>
            <p
              className="text-[#0a0a0a] text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25]"
              style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
            >
              {introLines.map((line, lineIndex) => (
                <span key={line} className="block overflow-hidden">
                  {line.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block"
                      style={loaded ? {
                        animationName: "letter-rise",
                        animationDuration: "0.45s",
                        animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                        animationFillMode: "both",
                        animationDelay: `${500 + lineIndex * 520 + charIndex * 45}ms`,
                      } : { opacity: 0 }}
                    >
                      {char === " " ? "\u00a0" : char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
            <img src={signatureImg} alt="Seung Lee 서명" className="w-[150px] lg:w-[200px] object-contain object-left -ml-2 -mt-5" />
          </div>
          {/* Socials pinned to bottom */}
          <div
            className="flex gap-6 mt-auto"
            style={loaded ? {
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              animationFillMode: "both",
              animationDelay: "600ms",
            } : { opacity: 0 }}
          >
            {[
              { label: "GitHub", href: GITHUB_URL },
              { label: "Resume", href: RESUME_URL },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group text-[#1a1a1a] text-[16px] hover:text-[#ff4e11] transition-colors">
                <span style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}>{label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M2 10L10 2M10 9V2H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right: skill tags — 2 rows, aligned to bottom */}
        <div
          className="flex flex-col items-start lg:items-end gap-2 shrink-0 justify-start lg:justify-end pb-0"
          style={loaded ? {
            animationName: "fade-up",
            animationDuration: "0.7s",
            animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            animationFillMode: "both",
            animationDelay: "700ms",
          } : { opacity: 0 }}
        >
          {[["Art Direction", "Web Design"], ["Branding", "Motion Design", "HTML"]].map((row, ri) => (
            <div key={ri} className="flex gap-2">
              {row.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f8f8f8] hover:bg-[#0a0a0a] hover:text-white rounded-[20px] px-3 py-2 text-[#575454] text-[14px] uppercase transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills cycling (About section inner) ─────────────────────────────────── */
const CY_LABELS = ["Development", "Branding", "Design"];
const CY_N = CY_LABELS.length;
const CY_ITEM_H = 104;
// 6 copies — room to scroll forward; silently jump back 1 copy when near end
const CY_ALL = Array.from({ length: CY_N * 6 }, (_, i) => CY_LABELS[i % CY_N]);
const CY_START = CY_N; // start in 2nd copy so we can show item above

function SkillsCycler() {
  const [rawIdx, setRawIdx] = useState(CY_START);
  const [animated, setAnimated] = useState(true);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startRaw = useRef(CY_START);

  // Auto-cycle every 2.2s
  useEffect(() => {
    const id = setInterval(() => {
      if (!dragging.current) {
        setRawIdx((i) => {
          const next = i + 1;
          // When reaching 4th copy start, silently jump back 1 copy (same label)
          if (next >= CY_N * 5) {
            setAnimated(false);
            requestAnimationFrame(() => {
              setRawIdx(next - CY_N);
              requestAnimationFrame(() => setAnimated(true));
            });
            return i; // hold briefly
          }
          return next;
        });
      }
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startY.current = e.clientY;
    startRaw.current = rawIdx;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dy = startY.current - e.clientY;
    const steps = Math.round(dy / (CY_ITEM_H * 0.5));
    setRawIdx(Math.max(1, Math.min(CY_ALL.length - 2, startRaw.current + steps)));
  };

  const onPointerUp = () => { dragging.current = false; };

  // Active item sits at y = CY_ITEM_H inside the container (middle of 3 visible)
  // translateY positions rawIdx item at y = CY_ITEM_H
  const trackY = CY_ITEM_H - rawIdx * CY_ITEM_H;
  const containerH = CY_ITEM_H * 3;

  return (
    <div
      className="relative overflow-hidden select-none"
      style={{ height: containerH, cursor: "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: CY_ITEM_H * 0.85, background: "linear-gradient(to bottom, #f9f9f9 15%, transparent 100%)" }} />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: CY_ITEM_H * 0.85, background: "linear-gradient(to top, #f9f9f9 15%, transparent 100%)" }} />

      <div
        style={{
          transform: `translateY(${trackY}px)`,
          transition: animated ? "transform 0.7s cubic-bezier(0.22,1,0.36,1)" : "none",
        }}
      >
        {CY_ALL.map((label, i) => {
          const dist = Math.abs(i - rawIdx);
          return (
            <div key={i} style={{ height: CY_ITEM_H, display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(56px,6.5vw,96px)",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  color: "#141414",
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.15 : 0,
                  transition: "opacity 0.6s ease",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── About / Skills section ────────────────────────────────────────────────── */
function SkillsSection() {
  const [introRef, introVisible] = useRevealed<HTMLDivElement>();
  const [cyclerRef, cyclerVisible] = useRevealed<HTMLDivElement>();
  const [cardRef, cardVisible] = useRevealed<HTMLDivElement>();
  const [bioRef, bioVisible] = useRevealed<HTMLDivElement>();

  return (
    <section id="about" className="bg-[#f9f9f9] w-full scroll-mt-[100px] px-6 md:px-[clamp(40px,11vw,220px)] py-16 lg:py-[110px]">
      {/* Grid: left col = flex-1, right col = 496px — both rows share same columns */}
      <div className="grid gap-x-8 gap-y-10 lg:gap-y-[120px] grid-cols-1 lg:grid-cols-[1fr_496px]">
        {/* [Row 1, Col 1] Intro */}
        <div ref={introRef} className="flex flex-col min-w-0" style={{ gap: "10px 32px", ...revealStyle(introVisible) }}>
          <p
            className="text-[#0a0a0a] text-[16px]"
            style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}
          >
            About me
          </p>
          <h2
            className="text-[#0a0a0a] uppercase tracking-[-1.3px] leading-[1.36]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(56px,6.5vw,96px)" }}
          >
            What I Do
          </h2>
        </div>

        {/* [Row 1, Col 2] Skills cycler — marginTop aligns active word with h2 (desktop only) */}
        <div ref={cyclerRef} className="relative overflow-hidden lg:-mt-[70px]" style={revealStyle(cyclerVisible, 120)}>
          <SkillsCycler />
        </div>

        {/* [Row 2, Col 1] Orange card */}
        <div
          ref={cardRef}
          className="relative w-full max-w-[438px] aspect-[438/259] rounded-[16px] overflow-hidden flex items-start self-start"
          style={{ background: "linear-gradient(to bottom, #f57838, #e5541a)", ...revealStyle(cardVisible, 80) }}
        >
          <div
            className="absolute text-[#0a0a0a] text-[22px] sm:text-[28px] md:text-[36px] leading-tight left-[10.7%] top-[23.6%]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: "uppercase" }}
          >
            <p>EAT _</p>
            <p>DREAM</p>
            <p>DESIGN</p>
          </div>
          <div className="absolute overflow-hidden left-[40.4%] top-[20.8%] w-[56.6%] h-[97.3%]">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[rgba(243,116,53,0.11)]" />
          </div>
        </div>

        {/* [Row 2, Col 2] Bio text */}
        <div ref={bioRef} className="self-start" style={revealStyle(bioVisible, 160)}>
          <p
            className="text-[#0a0a0a] text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] mb-10"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            저는 영상 편집을 통해 쌓아온 시각적 감각을 바탕으로
            웹 개발까지 영역을 넓혀가고 있는 크리에이터입니다.{" "}
            <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>디자인, 모션</strong>과{" "}
            <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>웹 개발</strong>이 교차하는 지점에서,
            다양한 역량으로 새로운 경험을 만들어갑니다.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[#2e2d2d] text-[16px] relative"
            style={{ fontFamily: "'Space Grotesk:Regular', 'Wanted Sans:Regular', sans-serif" }}
          >
            <span className="relative pb-px after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#2e2d2d] after:origin-left after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300">
              More about me
            </span>
            <svg width="10" height="10" viewBox="0 0 9.5 9.5" fill="none">
              <path d={svgPaths.p3e082680} stroke="#2E2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Framed image (contain by default, blurred backdrop fills the letterbox; pass fit="cover" to crop instead) ── */
function FramedImage({
  src,
  alt = "",
  className = "",
  style,
  fit = "contain",
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={"overflow-hidden bg-[#0a0a0a] " + className} style={style}>
      <div className="relative h-full w-full">
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
          style={{ opacity: 0.55 }}
        />
        <img
          src={src}
          alt={alt}
          className={"relative h-full w-full " + (fit === "cover" ? "object-cover" : "object-contain")}
        />
      </div>
    </div>
  );
}

/* ─── Projects ───────────────────────────────────────────────────────────────── */
function ProjectRow({
  p,
  index,
  onMouseEnter,
  onMouseLeave,
}: {
  p: (typeof PROJECTS)[number];
  index: number;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}) {
  const [ref, visible] = useRevealed<HTMLDivElement>();

  const Row = (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 py-6 lg:py-10">
      <h3
        className="text-[#0a0a0a] transition-colors duration-200 group-hover:text-[#ff4e11]"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(36px,4.5vw,72px)",
          lineHeight: "clamp(44px,7vw,92px)",
          textTransform: "uppercase",
        }}
      >
        {p.title}
      </h3>
      <p
        className="text-[#666] text-[16px] text-left lg:text-right whitespace-nowrap lg:ml-8"
        style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif", fontStyle: "italic" }}
      >
        {p.cat}
      </p>
    </div>
  );

  return (
    <div
      ref={ref}
      id={`project-${index}`}
      className="relative border-b border-[#eaeaea] group cursor-pointer scroll-mt-[100px]"
      style={revealStyle(visible, index * 90)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {p.href ? <a href={p.href} className="block">{Row}</a> : Row}
    </div>
  );
}

function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);

  const updateMousePos = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-white w-full px-6 md:px-12 lg:px-20 py-0 relative overflow-x-clip scroll-mt-[100px]"
      onMouseMove={updateMousePos}
    >
      {PROJECTS.map((p, i) => (
        <ProjectRow
          key={p.title}
          p={p}
          index={i}
          onMouseEnter={(e) => {
            updateMousePos(e);
            setHovered(i);
          }}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Floating preview — uniform box, blurred backdrop fills the letterbox */}
      {hovered !== null && (
        <FramedImage
          src={PROJECTS[hovered].img}
          alt={PROJECTS[hovered].title}
          className="pointer-events-none absolute z-20 rounded-2xl shadow-2xl"
          style={{
            width: 320,
            height: 210,
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────────────────────── */
// One representative image per project.
const GALLERY_IMAGES = PROJECTS.map((p) => ({ img: p.img, fit: p.galleryFit }));

function GalleryRow({ reverse = false }: { reverse?: boolean }) {
  const imgs = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `gallery-scroll${reverse ? "-rev" : ""} 40s linear infinite`,
        }}
      >
        {imgs.map((item, i) => (
          <FramedImage
            key={i}
            src={item.img}
            fit={item.fit}
            className="shrink-0 rounded-2xl"
            style={{ width: 480, height: 360 }}
          />
        ))}
      </div>
    </div>
  );
}

function GallerySection() {
  const [ref, visible] = useRevealed<HTMLElement>(0.05);
  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden flex flex-col gap-10" style={revealStyle(visible)}>
      <GalleryRow />
      <GalleryRow reverse />
    </section>
  );
}

/* ─── Skills & Tools ─────────────────────────────────────────────────────────── */
const TOOLS = [
  { skill: "프론트엔드 개발", tools: "HTML / CSS / JavaScript" },
  { skill: "영상 편집 & 모션", tools: "Premiere Pro / After Effects" },
  { skill: "디자인 & 프로토타이핑", tools: "Figma / Photoshop / Illustrator" },
  { skill: "기타 도구", tools: "Git / VS Code / Notion" },
];

function ToolRow({ t, index }: { t: (typeof TOOLS)[number]; index: number }) {
  const [ref, visible] = useRevealed<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="border-b border-[#eaeaea] flex flex-col lg:flex-row lg:items-center justify-between gap-1 py-6"
      style={revealStyle(visible, index * 90)}
    >
      <p
        className="text-[#1a1a1a] text-[16px]"
        style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
      >
        {t.skill}
      </p>
      <p
        className="text-[#666] text-[16px]"
        style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
      >
        {t.tools}
      </p>
    </div>
  );
}

function ToolsSection() {
  const [headingRef, headingVisible] = useRevealed<HTMLParagraphElement>();
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-8 lg:gap-20 px-6 md:px-12 lg:px-20 pt-16 lg:pt-[120px] pb-16 lg:pb-[180px]">
      <div className="shrink-0 w-full lg:w-[450px]">
        <p
          ref={headingRef}
          className="text-[#0a0a0a] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: "uppercase", ...revealStyle(headingVisible) }}
        >
          SKILLS &amp;<br />TOOLS
        </p>
      </div>
      <div className="flex-1 min-w-0">
        {TOOLS.map((t, i) => (
          <ToolRow key={t.skill} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── Contact / Footer ───────────────────────────────────────────────────────── */
export function ContactSection() {
  const [form, setForm] = useState({ type: "", name: "", email: "", msg: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [bodyRef, bodyVisible] = useRevealed<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const ok = await sendContactMessage({
      name: form.name,
      email: form.email,
      message: form.msg,
      type: form.type,
    });
    setSending(false);
    if (ok) {
      setSent(true);
      setForm({ type: "", name: "", email: "", msg: "" });
      setTimeout(() => setSent(false), 3000);
    } else {
      setError(true);
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] scroll-mt-[100px] pt-2 pb-12">
      {/* Contact marquee */}
      <div className="overflow-hidden pt-7 pb-10">
        <div
          className="flex w-max whitespace-nowrap"
          style={{ animation: "marquee-scroll 12s linear infinite" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-white pr-16"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(64px,14vw,200px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              GET IN TOUCH _&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div ref={bodyRef} className="ml-auto lg:mr-[12vw] flex w-full max-w-[880px] flex-col gap-7 px-6 pt-10" style={revealStyle(bodyVisible)}>
        {/* Contact info */}
        <div className="flex w-full flex-col gap-2">
          <p
            className="text-white text-[20px]"
            style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700 }}
          >
            010-5030-8363
          </p>
          <p
            className="text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, fontSize: "clamp(28px,3.5vw,48px)" }}
          >
            Soyul8363@gmail.com
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:gap-5">
            {[
              { key: "type", label: "프로젝트 유형", placeholder: "개인 포트폴리오" },
              { key: "name", label: "이름", placeholder: "이름을 입력하세요" },
              { key: "email", label: "이메일 주소", placeholder: "이메일 주소를 입력하세요" },
            ].map(({ key, label, placeholder }) => (
              <div key={key} className="flex-1 flex flex-col gap-2">
                <label
                  className="hidden"
                  style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                >
                  {label}
                </label>
                <input
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full border border-white/15 rounded-full px-5 py-3.5 bg-transparent text-white text-[16px] placeholder:text-white/60 outline-none focus:border-white transition-colors"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="hidden"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              메시지
            </label>
            <input
              value={form.msg}
              onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
              placeholder="무엇을 도와드릴까요?"
              className="w-full border border-white/15 rounded-full px-5 py-3.5 bg-transparent text-white text-[16px] placeholder:text-white/60 outline-none focus:border-white transition-colors"
              style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
            />
          </div>
          <div className="z-10 -mt-[48px] mb-0 flex h-9 items-center justify-end gap-3 pr-2">
            {error && (
              <p className="text-[13px] text-red-400" style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}>
                전송에 실패했어요. 잠시 후 다시 시도해주세요.
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              aria-label="Send message"
              className="after:content-['↗'] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[0px] text-black after:text-[18px] hover:bg-white/80 transition-colors duration-200 disabled:opacity-50"
              style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
            >
              {sending ? "전송 중" : sent ? "전송 완료 ✓" : "메시지 보내기"}
            </button>
          </div>
          <div className="flex gap-5 pt-0">
            {[
              { label: "GitHub", href: GITHUB_URL },
              { label: "Resume", href: RESUME_URL },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/[0.04] px-7 py-3 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                style={{ fontFamily: "'Space Grotesk:Regular', sans-serif" }}
              >
                {label}<span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─── Footer bar ─────────────────────────────────────────────────────────────── */
export function FooterBar() {
  const scrollToTop = () => window.dispatchEvent(new Event("app:scroll-to-top"));
  const path = window.location.pathname.replace(/\/+$/, "");
  const isHome = path === "";
  const isContactPage = path === "/contact";
  const links = [
    { label: "Home", target: "top", href: "/" },
    { label: "About", target: "about", href: isHome ? "#about" : "/#about" },
    { label: "Projects", target: "projects", href: isHome ? "#projects" : "/#projects" },
    { label: "Contact", target: "contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8 bg-[#0a0a0a] border-t border-white/10 px-6 md:px-10 lg:px-16 py-6 text-center lg:text-left">
      <p
        className="text-white/60 text-[13px] md:text-[16px] uppercase tracking-tight order-3 lg:order-none"
        style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}
      >
        <span className="text-white/60">© 2026 </span>
        <span className="text-white">Seung Woon</span>
        <span className="text-white/60">. All Right Reserved</span>
      </p>

      <nav className="flex flex-wrap items-center justify-center lg:justify-self-center gap-4 lg:gap-10">
        {links.map(({ label, target, href }) => (
          <a
            key={target}
            href={href}
            onClick={(e) => {
              if (target === "top" && isHome) {
                e.preventDefault();
                scrollToTop();
              } else if ((target === "about" || target === "projects") && isHome) {
                e.preventDefault();
                // Keep section navigation on the current page and animate it.
                window.requestAnimationFrame(() => scrollToElementWithOffset(target, 100));
              } else if (target === "contact" && isContactPage) {
                e.preventDefault();
                scrollToTop();
              }
            }}
            className="text-white uppercase text-[16px] hover:text-[#ff4e11] transition-colors"
            style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500, letterSpacing: "-0.15px" }}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 lg:justify-self-end text-white uppercase text-[16px] hover:text-[#ff4e11] transition-colors"
        style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500, letterSpacing: "-0.15px" }}
      >
        back to top
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 13V1M1 1H13M1 1L13 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

/* ─── Fixed Bottom Blur Veil ──────────────────────────────────────────────────── */
export function BottomBlurVeil() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
      aria-hidden
      style={{ height: 220 }}
    >
      {/* Progressive backdrop blur — mask fades from transparent at top to opaque at bottom */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(8px) saturate(120%)",
          WebkitBackdropFilter: "blur(8px) saturate(120%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 55%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 55%, black 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.10) 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 65%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 65%)",
        }}
      />
    </div>
  );
}

/* ─── Root ───────────────────────────────────────────────────────────────────── */
function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frameId = 0;

    const moveCursor = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          "translate3d(" + currentX + "px, " + currentY + "px, 0) translate(-50%, -50%)";
      }
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-3.5 w-3.5 rounded-full bg-black opacity-0 transition-opacity duration-200"
      aria-hidden="true"
    />
  );
}

export default function PortfolioPage() {
  const [loaded, setLoaded] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    window.location.assign("/contact");
  };

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <BottomBlurVeil />
      <CursorFollower />
      <div
        className="flex flex-col w-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
      >
        <Header onContactClick={scrollToContact} loaded={loaded} />
        <div>
          {/* Hero + marquee share a wrapper so the blob can straddle the boundary */}
          <div className="relative">
            <Hero loaded={loaded} />
            <section
              className="bg-white overflow-hidden"
              style={{ paddingBottom: 0 }}
            >
              <Marquee items={["Development_", "Design_", "Branding_"]} />
            </section>
            {/*
              Blob: top ~810 px from wrapper top
                hero = 840 px → blob starts 30 px before hero ends
                blob is 190 px tall → bottom extends 160 px into the marquee strip
            */}
            <div
              className="absolute z-20 hidden lg:block pointer-events-none"
              style={{ top: 610, right: "clamp(200px, 28vw, 440px)" }}
            >
              <div className="pointer-events-auto">
                <LetsTalkBlob loaded={loaded} />
              </div>
            </div>
          </div>
          <SkillsSection />
          <ProjectsSection />
          <GallerySection />
          <ToolsSection />
          <ContactSection />
          <FooterBar />
        </div>
      </div>
    </>
  );
}
