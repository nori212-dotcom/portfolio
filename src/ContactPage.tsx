import { Fragment, useState } from "react";
import heroImg from "@/imports/PixoraPortfolio-1/b72de90d96d7c72b63a72133dc5e5a745f887b21.png";
import { BottomBlurVeil, ContactSection, FooterBar, GITHUB_URL, PROJECTS, RESUME_URL } from "@/PortfolioPage";
import { sendContactMessage } from "@/lib/contact";

const INTERESTS = ["브랜딩", "디자인 콘셉트", "앱 디자인", "안드로이드 개발", "iOS 개발", "로고", "웹 디자인"];

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactHeader() {
  const onContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";
  return (
    <header className="flex items-center justify-between border-b border-black/10 bg-white px-8 py-6 md:px-12" style={{ animation: "fade-in 0.7s ease both" }}>
      <a href="/" className="text-[28px] font-bold tracking-[-1.5px] text-[#ff4e11]" style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700 }}>
        Seung Woon
      </a>
      <nav className="flex items-center gap-7 text-[15px] font-bold md:gap-10" style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}>
        <a href="/" className="transition-colors hover:text-[#ff4e11]">HOME</a>
        <div className="group relative">
          <button className="flex items-center gap-1 transition-colors hover:text-[#ff4e11]">PAGES <ArrowIcon /></button>
          <div className="invisible absolute right-0 top-full z-20 mt-3 w-32 translate-y-1 rounded-lg border border-black/10 bg-white p-2 text-sm font-medium opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="block rounded px-3 py-2 hover:bg-black/5">GitHub</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="block rounded px-3 py-2 hover:bg-black/5">Resume</a>
          </div>
        </div>
        <div className="group relative">
          <button className="flex items-center gap-1 transition-colors hover:text-[#ff4e11]">PROJECT <ArrowIcon /></button>
          <div className="invisible absolute right-0 top-full z-20 mt-3 w-44 translate-y-1 rounded-lg border border-black/10 bg-white p-2 text-sm font-medium opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {PROJECTS.map((p, idx) => (
              <a
                key={p.title}
                href={p.href ?? `/#project-${idx}`}
                className="block whitespace-nowrap rounded px-3 py-2 hover:bg-black/5"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
        <a href="/contact" className={onContactPage ? "text-[#ff4e11]" : "hover:text-[#ff4e11]"}>CONTACT</a>
      </nav>
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
          <h1 className="max-w-[1040px] text-[clamp(52px,8.5vw,132px)] leading-[1.05] tracking-[-0.035em]" style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}>
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
          <p className="mt-7 max-w-[620px] whitespace-nowrap text-[20px] leading-[1.55] tracking-[-0.03em] text-black/85 md:ml-[46%] md:mt-7">
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
