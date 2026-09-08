import { useEffect, useState } from "react";
import { BottomBlurVeil, ContactSection, FooterBar, ProjectCTAButton, ProjectCTAGroup } from "@/PortfolioPage";
import { ContactHeader } from "@/ContactPage";
import publishedHome from "@/imports/ikea/published-home.jpg";

const BLUE = "#0058A3";
const YELLOW = "#FBD914";

const LIVE_URL = "https://heebon00.github.io/Team_Synergos_esg/";
const REPO_URL = "https://github.com/heebon00/Team_Synergos_esg";
const DESIGN_PAGE_URL = "/projects/ikea";

/* ─── shared eyebrow label ──────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 text-[15px] text-[#0a0a0a]"
      style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", fontWeight: 500 }}
    >
      {children}
    </p>
  );
}

function DisplayHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={"text-[#0a0a0a] uppercase leading-[1.05] tracking-[-0.02em] " + className}
      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,84px)" }}
    >
      {children}
    </h2>
  );
}

/* ─── Meta overview row ─────────────────────────────────────────────────────── */
const META = [
  { k: "Client", v: "IKEA Korea (컨셉 리디자인)" },
  { k: "Team", v: "Team_Synergos · 5인" },
  { k: "Duration", v: "18일 · 2026.07.21 – 08.13" },
  { k: "My Role", v: "메인·카테고리 구현·헤더 통일·디자인 토큰" },
];

/* ─── Screen design → my implementation ────────────────────────────────────── */
const MAIN_BLOCKS = [
  { tag: "nav · 139px", title: "글로벌 내비게이션", body: "사이트맵 1depth 6개를 스크롤 없이 그대로 노출." },
  { tag: "2행 · 각 131px", title: "카테고리 퀵 진입", body: "26개 분류를 원형 캐러셀 2행으로 압축, 첫 화면에서 전체를 훑게." },
  { tag: "ad-banner · 144px", title: "광고 배너 축소", body: "대형 이미지 배너를 부담으로 지목한 진단을 반영해 높이를 줄임." },
  { tag: "각 472px · 3행", title: "제품 그리드 3행", body: "추천·신제품을 분리 노출. 가격·치수를 카드 안 고정 텍스트 영역에." },
];

/* ─── Development method ───────────────────────────────────────────────────── */
const HARNESS = [
  {
    no: "01",
    title: "규칙을 문서로 고정",
    body: "CLAUDE.md · AGENTS.md · design-system-harness.md 에 작업 규칙과 토큰 기준을 먼저 못 박았다.",
  },
  {
    no: "02",
    title: "AI가 규칙 안에서 작성",
    body: "에이전트는 한 번에 한 페이지씩 생성. 메인 외 모든 페이지는 common/ 폴더 규칙을 따른다.",
  },
  {
    no: "03",
    title: "검수하고 기록",
    body: "품질 검사 결과를 AUDIT_REPORT.md 로 남기고, 프롬프트는 GitHub Issues 로 이력 관리.",
  },
];

const STACK = ["Tailwind CSS v4", "GSAP 3.15", "Swiper 12", "Vanilla JS"];

/* ─── Results ──────────────────────────────────────────────────────────────── */
const RESULTS = [
  { v: "25종", k: "구현·배포 페이지" },
  { v: "214건", k: "팀 커밋 (내 65건)" },
  { v: "98점", k: "PageSpeed 성능" },
  { v: "96점", k: "접근성 (Accessibility)" },
  { v: "A · 98", k: "코드 품질 종합" },
  { v: "0건", k: "하드코딩 토큰 위반" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ProjectIkeaDev() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <BottomBlurVeil />
      <ContactHeader />

      <main className="overflow-hidden">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="mx-auto max-w-[1180px] px-8 pt-16 pb-10 md:px-12 md:pt-20"
          style={mounted ? { animation: "fade-up 0.8s ease both" } : { opacity: 0 }}
        >
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[13px] uppercase tracking-[0.14em]"
            style={{
              fontFamily: "'Space Grotesk:Medium', sans-serif",
              background: YELLOW,
              color: BLUE,
            }}
          >
            IKEA Korea Redesign — Development
          </span>
          <h1
            className="mt-7 text-[clamp(32px,4.6vw,64px)] leading-[1.15] tracking-[-0.03em]"
            style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}
          >
            기획이 아니라, <span style={{ color: BLUE }}>코드</span>가 증명하도록
          </h1>
          <p
            className="mt-7 max-w-[640px] text-[19px] leading-[1.6] text-black/70"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            리서치·디자인 시스템으로 확정된 화면을, 실제 브라우저에서 열리는
            25종 페이지로 퍼블리싱한 개발 파트입니다. 기획·디자인 과정은{" "}
            <a href={DESIGN_PAGE_URL} className="underline underline-offset-2 hover:text-[#ff4e11]">
              디자인 파트
            </a>
            에서 확인하실 수 있습니다.
          </p>
          <ProjectCTAGroup>
            <ProjectCTAButton href={LIVE_URL} variant="orange">
              라이브 사이트 열기
            </ProjectCTAButton>
            <ProjectCTAButton href={REPO_URL} variant="white">
              GitHub 저장소
            </ProjectCTAButton>
            <ProjectCTAButton href={DESIGN_PAGE_URL} variant="white" external={false}>
              디자인 파트 보기
            </ProjectCTAButton>
          </ProjectCTAGroup>
        </section>

        {/* ── Cover image ──────────────────────────────────────── */}
        <section
          className="mx-auto max-w-[1400px] px-4 md:px-8"
          style={mounted ? { animation: "fade-up 0.9s 0.1s ease both" } : { opacity: 0 }}
        >
          <div className="aspect-[1376/768] overflow-hidden rounded-[20px] border border-black/10 bg-[#f5f5f5]">
            <img
              src={publishedHome}
              alt="퍼블리싱되어 실제로 배포된 IKEA 리디자인 메인 페이지"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* ── Meta row ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 pt-14 md:px-12">
          <div className="grid gap-y-8 border-y border-black/10 py-9 sm:grid-cols-2 lg:grid-cols-4">
            {META.map((m) => (
              <div key={m.k}>
                <p
                  className="mb-2 text-[13px] uppercase tracking-[0.1em] text-black/40"
                  style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                >
                  {m.k}
                </p>
                <p className="text-[16px] leading-snug" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                  {m.v}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Screen design & my implementation ──────────────── */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <p
              className="mb-4 text-[15px] text-white/50"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              01 · My Implementation
            </p>
            <h2
              className="uppercase leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,84px)" }}
            >
              Building The Main Page
            </h2>
            <p
              className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-white/65"
              style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
            >
              메인·카테고리 화면을 맡아 구현하고, 전 페이지의 헤더·메가메뉴와 모바일
              640px 정렬을 하나로 통일했습니다. 각 블록은 페르소나·정보구조 분석에서
              그대로 도출됩니다.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {MAIN_BLOCKS.map((b) => (
                <div key={b.title} className="rounded-2xl border border-white/12 p-7">
                  <p
                    className="text-[12px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: YELLOW }}
                  >
                    {b.tag}
                  </p>
                  <h3 className="mt-2 text-[20px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {b.title}
                  </h3>
                  <p
                    className="mt-2 text-[16px] leading-[1.6] text-white/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Development method ──────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <SectionLabel>02 · Development Method</SectionLabel>
          <DisplayHeading>Rules As Code</DisplayHeading>
          <p
            className="mt-6 max-w-[620px] text-[17px] leading-[1.6] text-black/60"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            규약을 먼저 문서로 고정하고, AI 에이전트가 그 안에서 코드를 작성하는
            &ldquo;하네스 엔지니어링&rdquo; 방식. 사람이 정한 것은 규칙, AI가 만든 것은 코드입니다.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {HARNESS.map((h) => (
              <div key={h.no} className="rounded-2xl border border-black/10 p-7">
                <span
                  className="text-[15px]"
                  style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, color: BLUE }}
                >
                  {h.no}
                </span>
                <h3 className="mt-3 text-[20px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                  {h.title}
                </h3>
                <p
                  className="mt-2 text-[16px] leading-[1.6] text-black/60"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                >
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span
              className="mr-2 text-[13px] uppercase tracking-[0.1em] text-black/40"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              Stack
            </span>
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-black/12 px-4 py-2 text-[14px] text-[#575454]"
                style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── Results ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 pt-24 pb-8 md:px-12">
          <SectionLabel>03 · Results</SectionLabel>
          <DisplayHeading>By The Numbers</DisplayHeading>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {RESULTS.map((r) => (
              <div key={r.k} className="border-t-2 pt-4" style={{ borderColor: YELLOW }}>
                <p
                  className="text-[clamp(32px,4vw,52px)] leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: BLUE }}
                >
                  {r.v}
                </p>
                <p
                  className="mt-2 text-[16px] text-black/55"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                >
                  {r.k}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What I learned ─────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <div className="rounded-[20px] p-10 md:p-14" style={{ background: "#f9f9f9" }}>
            <SectionLabel>04 · What I Learned</SectionLabel>
            <p
              className="max-w-[760px] text-[clamp(20px,2.6vw,32px)] leading-[1.5]"
              style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
            >
              배포 직후 전 페이지가 백지로 떴습니다. 원인은 복구되지 않은{" "}
              <span style={{ color: BLUE }}>opacity:0</span> 한 줄. &ldquo;연출보다 가시성&rdquo;으로
              판단해 원인 스타일을 먼저 걷어냈고 &mdash; 스타일이 깨지면 코드보다 실행
              환경을 먼저 의심하고, 흩어진 문제는 기준 하나를 세워 일괄 적용한다는 걸
              배웠습니다.
            </p>
          </div>
        </section>

        {/* ── Closing ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] border-t border-black/10 px-8 py-28 text-center md:px-12">
          <p
            className="text-[clamp(24px,3.4vw,44px)] leading-[1.4]"
            style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
          >
            첫 팀 프로젝트였고,
            <br />
            25종의 페이지가 실제로 열리는 <span style={{ color: BLUE }}>사이트</span>가 됐습니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href={DESIGN_PAGE_URL}
              className="group inline-flex items-center gap-2 text-[15px] text-black/60 transition-colors hover:text-[#ff4e11]"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              기획·디자인 파트 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 text-[15px] text-black/60 transition-colors hover:text-[#ff4e11]"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              Back to all projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <ContactSection />
      <FooterBar />
    </div>
  );
}
