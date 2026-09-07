import { useEffect, useRef } from "react";

export const RECAPTCHA_SITE_KEY = "6Le5t60tAAAAAPOS5GgZh6RPGmVy6Nub3ePLWF1D";

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, params: Record<string, unknown>) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (window.grecaptcha) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    window.onRecaptchaLoad = resolve;
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
  return scriptPromise;
}

type RecaptchaProps = {
  onChange: (token: string | null) => void;
  theme?: "light" | "dark";
};

export function Recaptcha({ onChange, theme = "light" }: RecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadRecaptchaScript().then(() => {
      if (cancelled || !containerRef.current || widgetId.current !== null || !window.grecaptcha) return;
      widgetId.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        theme,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
        "error-callback": () => onChange(null),
      });
    });
    return () => {
      cancelled = true;
    };
  }, [onChange, theme]);

  return <div ref={containerRef} />;
}
