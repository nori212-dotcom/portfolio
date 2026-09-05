import { Fragment, useEffect, useState } from "react";
import heroImg from "@/imports/PixoraPortfolio-1/b72de90d96d7c72b63a72133dc5e5a745f887b21.png";
import { BottomBlurVeil, ContactSection, FooterBar, GITHUB_URL, PROJECTS, RESUME_URL } from "@/PortfolioPage";
import { sendContactMessage } from "@/lib/contact";

const INTERESTS = ["브랜딩", "디자인 콘셉트", "앱 디자인", "안드로이드 개발", "iOS 개발", "로고", "웹 디자인"];

export function ContactHeader() {
  const onContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const pill = (active: boolean) =>
    `rounded-full px-4 py-1 text-sm transition-colors duration-200 ${active ? "bg-[#0a0a0a] text-white" : "bg-[#f5f5f5] hover:bg-[#0a0a0a] hover:text-white"}`;
  const navFont = { fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 } as const;

  return (
    <header className="relative z-40 border-b border-black/10 bg-white">
      <div className="relative flex items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5">
        {/* nav-left */}
        <nav className="hidden lg:flex gap-2 items-center shrink-0">
          <a href="/" className={pill(false)} style={navFont}>HOME</a>
          <div className="relative group py-2">
            <button className={pill(false)} style={navFont}>PAGES</button>
            <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
              <div className="bg-white border border-[#eaeaea] rounded-xl shadow-lg p-2 min-w-[120px] flex flex-col gap-1">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap" style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}>GitHub</a>
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap" style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}>Resume</a>
              </div>
            </div>
          </div>
          <div className="relative group py-2">
            <button className={pill(false)} style={navFont}>PROJECT</button>
            <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
              <div className="bg-white border border-[#eaeaea] rounded-xl shadow-lg p-2 min-w-[160px] flex flex-col gap-1">
                {PROJECTS.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.href ?? `/#project-${idx}`}
                    className="block whitespace-nowrap rounded-lg px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors"
                    style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="/contact" className={pill(onContactPage)} style={navFont}>CONTACT</a>
        </nav>

        {/* logo — absolutely centered */}
        <a
          href="/"
          className="text-[22px] md:text-[28px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[#ff4e11] whitespace-nowrap flex"
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
        </a>

        {/* nav-right */}
        <div className="hidden lg:flex items-center gap-6 justify-end shrink-0">
          <span className="text-[#262626] text-[16px]" style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}>
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

      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <a href="/" className="rounded-lg px-3 py-3 text-left text-[15px] text-[#0a0a0a] hover:bg-[#f5f5f5]" style={navFont}>HOME</a>
            {PROJECTS.map((p, idx) => (
              <a
                key={idx}
                href={p.href ?? `/#project-${idx}`}
                className="rounded-lg px-3 py-3 text-[15px] text-[#0a0a0a] hover:bg-[#f5f5f5]"
                style={navFont}
              >
                {p.title}
              </a>
            ))}
            <a
              href="/contact"
              className={"rounded-lg px-3 py-3 text-[15px] hover:bg-[#f5f5f5] " + (onContactPage ? "text-[#ff4e11]" : "text-[#0a0a0a]")}
              style={navFont}
            >
              CONTACT
            </a>
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

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelected((items) => items.includes(interest) ? items.filter((item) => item !== interest) : [...items, interest]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError(false);
    const ok = await sendContactMessage({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      type: selected.join(", "),
    });
    setSending(false);
    if (ok) {
      setSent(true);
      form.reset();
      setSelected([]);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <BottomBlurVeil />
      <ContactHeader />

      <main className="overflow-hidden">
        <section className="relative mx-auto max-w-[1120px] px-8 pb-28 pt-8 md:px-12 md:pt-10" style={{ animation: "fade-up 0.8s 0.1s ease both" }}>
          <p className="mb-3 text-[16px] font-medium tracking-[-0.03em]" style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}>Contact</p>
          <h1 className="max-w-[1040px] text-[clamp(36px,8.5vw,132px)] leading-[1.05] tracking-[-0.035em]" style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}>
            프로젝트를<span className="text-[#ff4e11]"> 함께</span>
            <br />
            <span className="inline-flex items-baseline whitespace-nowrap">
              <span
                className="mr-[0.14em] inline-block h-[1.05em] w-[1.05em] translate-y-[0.14em] overflow-hidden rounded-full bg-[#f7ede5] align-baseline"
                style={{ animation: "scale-in 0.8s 0.45s cubic-bezier(.2,.8,.2,1) both" }}
              >
                <img src={heroImg} alt="" className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-110" />
              </span>
              시작해볼까요?
            </span>
          </h1>
          <p className="mt-7 max-w-[620px] whitespace-normal md:whitespace-nowrap text-[15px] md:text-[20px] leading-[1.55] tracking-[-0.03em] text-black/85 md:ml-[46%] md:mt-7">
            문의 양식을 작성해 주시면 최대한 빠르게 답변드리겠습니다.
          </p>
        </section>

        <section className="mx-auto max-w-[960px] px-8 pb-28 md:px-12" style={{ animation: "fade-up 0.8s 0.25s ease both" }}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="mb-6 text-[clamp(34px,4vw,52px)] leading-none tracking-[-0.05em]" style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}>
                관심 분야를 선택해 주세요
              </legend>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, index) => {
                  const active = selected.includes(interest);
                  return (
                    <Fragment key={interest}>
                      {index === 5 && <span className="basis-full h-0" aria-hidden="true" />}
                      <button type="button" onClick={() => toggleInterest(interest)} className={"rounded-xl border px-7 py-3 text-[15px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)] " + (active ? "border-black bg-black text-white" : "border-black/12 bg-white hover:border-black")}>
                        {interest}
                      </button>
                    </Fragment>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-28 border-t border-black pt-8">
              <h2 className="mb-10 text-[clamp(42px,5vw,68px)] leading-none tracking-[-0.05em]" style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}>
                프로젝트 문의하기
              </h2>
              <div className="grid border-b border-black/15 md:grid-cols-2">
                <label className="border-b border-black/15 py-7 md:border-b-0 md:border-r md:pr-8">
                  <span className="mb-3 block text-sm tracking-[0.08em] text-black/50" style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}>이름</span>
                  <input required name="name" placeholder="이름을 입력해 주세요" className="w-full bg-transparent text-xl outline-none placeholder:text-black/30" />
                </label>
                <label className="py-7 md:pl-8">
                  <span className="mb-3 block text-sm tracking-[0.08em] text-black/50" style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}>이메일 주소</span>
                  <input required type="email" name="email" placeholder="이메일 주소를 입력해 주세요" className="w-full bg-transparent text-xl outline-none placeholder:text-black/30" />
                </label>
              </div>
              <label className="block border-b border-black/15 py-7">
                <span className="mb-3 block text-sm tracking-[0.08em] text-black/50" style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}>어떤 도움이 필요하신가요?</span>
                <textarea required rows={3} name="message" placeholder="프로젝트에 대해 알려 주세요" className="w-full resize-none bg-transparent text-xl outline-none placeholder:text-black/30" />
              </label>
              <div className="flex items-center justify-end gap-4 pt-8">
                {error && (
                  <p className="text-sm text-red-500" style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}>
                    전송에 실패했어요. 잠시 후 다시 시도해주세요.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:scale-[1.03] disabled:opacity-50"
                  style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
                >
                  {sending ? "전송 중" : sent ? "전송 완료" : "메시지 보내기"} ↗
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <ContactSection />
      <FooterBar />
    </div>
  );
}
