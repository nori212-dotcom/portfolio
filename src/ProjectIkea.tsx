import { useEffect, useState } from "react";
import { BottomBlurVeil, ContactSection, FooterBar } from "@/PortfolioPage";
import { ContactHeader } from "@/ContactPage";
import interior from "@/imports/ikea/interior.jpg";
import wireToHifi from "@/imports/ikea/wire-to-hifi.jpg";
import publishedHome from "@/imports/ikea/published-home.jpg";
import personaLee from "@/imports/ikea/persona-lee.jpg";
import personaKim from "@/imports/ikea/persona-kim.jpg";
import personaPark from "@/imports/ikea/persona-park.jpg";

const BLUE = "#0058A3";
const YELLOW = "#FBD914";

const LIVE_URL = "https://heebon00.github.io/Team_Synergos_esg/";
const REPO_URL = "https://github.com/heebon00/Team_Synergos_esg";

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

/* ─── The brief ─────────────────────────────────────────────────────────────── */
const SERVICE_TAGS = ["Information Architecture", "Design System", "Responsive Web", "Vibe Coding"];

const DIAGNOSIS = [
  {
    no: "01",
    title: "목적형 쇼핑을 방해",
    body: "대형 감성 배너와 이벤트 문구가 첫 화면을 차지해, 상품명·가격·치수를 바로 확인하려는 사용자의 동선이 끊겼습니다.",
  },
  {
    no: "02",
    title: "카테고리 진입이 느림",
    body: "상단 분류가 스크롤 뒤에 숨어 있어, 원하는 공간·품목으로 곧장 들어가기 어려웠습니다.",
  },
  {
    no: "03",
    title: "강점은 그대로 유지",
    body: "비주얼·톤앤매너(Theme)는 벤치마크 대비 우위. 재설계 범위를 UI·Contents로 좁히고 브랜드 자산은 보존했습니다.",
  },
];

/* ─── Benchmarking ─────────────────────────────────────────────────────────── */
const BENCHMARKS = [
  {
    name: "한샘몰",
    take: "제품 카드 안에서 가격·옵션·배송을 한 번에 읽히게 한 정보 밀도.",
  },
  {
    name: "오늘의집",
    take: "콘텐츠와 커머스를 잇는 탐색 흐름, 공간별 스타일 매칭 구조.",
  },
  {
    name: "MUJI",
    take: "절제된 컬러 팔레트로 제품에 시선을 모으는 미니멀 UI.",
  },
];

/* ─── Personas ─────────────────────────────────────────────────────────────── */
const PERSONAS = [
  {
    img: personaLee,
    name: "이민준",
    tag: "34 · IT 스타트업 개발자",
    body: "효율·속도를 중시하는 디지털 네이티브. 감성 배너 대신 상품명·가격·스펙이 첫 화면에 바로 보이길 원한다.",
  },
  {
    img: personaKim,
    name: "김소진",
    tag: "31 · 브랜드 마케터",
    body: "신혼집 가구를 세트로 구상하는 탐색형 소비자. 상단 카테고리의 직관성과 공간별 스타일 매칭을 요구했다.",
  },
  {
    img: personaPark,
    name: "박명숙",
    tag: "55 · 가정주부",
    body: "오프라인 중심의 전통적 쇼핑 성향. 큰 이미지 배너보다 제품 정보 텍스트의 가독성을 최우선으로 본다.",
  },
];

/* ─── Design system ────────────────────────────────────────────────────────── */
const PALETTE = [
  { name: "Primary", hex: "#0058A3", body: "브랜드 기준색. 핵심 액션과 링크에만 제한적으로 사용." },
  { name: "Deep", hex: "#003E7E", body: "헤더·강조 면. Primary와 명도 대비로 정보 위계를 만든다." },
  { name: "Yellow", hex: "#FBD914", body: "강조용 면(Background) 전용. 텍스트는 올리지 않는다." },
];

const SYSTEM_RULES = [
  { k: "Grid", v: "12 / 8 / 4 컬럼 — xl 1280 · lg 1024 · sm 640" },
  { k: "Spacing", v: "4pt 베이스 · 섹션 64 · 블록 32 · 카드 16" },
  { k: "Type", v: "국문 Pretendard · 영문·숫자 Inter" },
  { k: "A11y", v: "WCAG 2.1 AA — 본문 대비 4.5:1 이상 검증" },
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
export default function ProjectIkea() {
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
            IKEA Korea Redesign
          </span>
          <h1
            className="mt-7 text-[clamp(44px,7vw,104px)] leading-[1.04] tracking-[-0.035em]"
            style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}
          >
            공간이 아니라,
            <br />
            <span style={{ color: BLUE }}>구조</span>가 말을 걸도록
          </h1>
          <p
            className="mt-7 max-w-[640px] text-[19px] leading-[1.6] text-black/70"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            목적형 쇼핑을 방해하던 IKEA Korea 온라인몰을, 사용자 여정 분석부터
            25종 페이지 퍼블리싱까지 다시 설계한 ESG 웹사이트 리뉴얼 제안입니다.
          </p>
        </section>

        {/* ── Cover image ──────────────────────────────────────── */}
        <section
          className="mx-auto max-w-[1400px] px-4 md:px-8"
          style={mounted ? { animation: "fade-up 0.9s 0.1s ease both" } : { opacity: 0 }}
        >
          <div className="aspect-[1376/768] overflow-hidden rounded-[20px] bg-[#f5f5f5]">
            <img
              src={interior}
              alt="IKEA 리디자인 무드 — 블루 톤의 밝은 거실"
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

        {/* ── About project ───────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>About Project</SectionLabel>
              <DisplayHeading>The Brief</DisplayHeading>
            </div>
            <div>
              <p
                className="text-[22px] leading-[1.65] text-[#0a0a0a]"
                style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
              >
                IKEA Korea 온라인몰을 벤치마크와 나란히 놓고 평가한 결과는{" "}
                <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>종합 3.5 / 5.0</strong>.
                비주얼과 톤앤매너는 강점이었지만{" "}
                <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>UI·Contents</strong>가
                발목을 잡았습니다. 재설계 범위를 그 두 축으로 좁히고, 브랜드 자산은
                그대로 둔 채 구조만 다시 세우는 것을 목표로 삼았습니다.
              </p>
              <div className="mt-9 flex flex-wrap gap-2">
                {SERVICE_TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/12 px-4 py-2 text-[14px] text-[#575454]"
                    style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Diagnosis cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {DIAGNOSIS.map((p) => (
              <div key={p.no} className="rounded-2xl border border-black/10 p-7">
                <span
                  className="text-[15px]"
                  style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, color: BLUE }}
                >
                  {p.no}
                </span>
                <h3 className="mt-3 text-[20px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-[15px] leading-[1.6] text-black/60"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benchmarking ────────────────────────────────────── */}
        <section className="bg-[#f9f9f9]">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <SectionLabel>01 · Benchmarking</SectionLabel>
            <DisplayHeading>What We Borrowed</DisplayHeading>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {BENCHMARKS.map((b) => (
                <div key={b.name} className="rounded-2xl bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                  <p
                    className="text-[13px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: BLUE }}
                  >
                    Reference
                  </p>
                  <h3 className="mt-2 text-[24px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {b.name}
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-[1.65] text-black/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {b.take}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Personas ────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <SectionLabel>02 · Core Persona</SectionLabel>
          <DisplayHeading>Who We Designed For</DisplayHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PERSONAS.map((p) => (
              <figure key={p.name} className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-[#f5f5f5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="text-[19px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {p.name}
                    <span
                      className="ml-2 text-[14px] text-black/45"
                      style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                    >
                      {p.tag}
                    </span>
                  </h3>
                  <p
                    className="mt-1.5 text-[15px] leading-[1.6] text-black/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {p.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Design system ───────────────────────────────────── */}
        <section className="bg-[#f9f9f9]">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <SectionLabel>03 · Design System</SectionLabel>
            <DisplayHeading>One Token Set, 25 Screens</DisplayHeading>
            <p
              className="mt-6 max-w-[620px] text-[17px] leading-[1.6] text-black/60"
              style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
            >
              페이지마다 손보는 대신 헤더·토큰 기준 하나를 확정해 25개 페이지에 한 번에
              적용했습니다. 색상과 여백은 하드코딩 없이 토큰 명칭으로만 호출합니다.
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              {/* palette */}
              <div className="grid gap-4 sm:grid-cols-3">
                {PALETTE.map((c) => (
                  <div key={c.hex} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <div className="h-28" style={{ background: c.hex }} />
                    <div className="p-5">
                      <h3 className="text-[16px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                        {c.name}
                      </h3>
                      <p
                        className="text-[13px]"
                        style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: BLUE }}
                      >
                        {c.hex}
                      </p>
                      <p
                        className="mt-2 text-[13px] leading-[1.55] text-black/55"
                        style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                      >
                        {c.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* rules */}
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                {SYSTEM_RULES.map((r) => (
                  <div key={r.k} className="border-b border-black/10 py-3 last:border-0">
                    <p
                      className="text-[12px] uppercase tracking-[0.1em] text-black/40"
                      style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                    >
                      {r.k}
                    </p>
                    <p
                      className="mt-1 text-[15px] leading-snug"
                      style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                    >
                      {r.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Wireframe → Hi-Fi → Prototype ───────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <SectionLabel>04 · Design Process</SectionLabel>
          <DisplayHeading>Wireframe → Hi-Fi → Prototype</DisplayHeading>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <FramedShot src={wireToHifi} alt="와이어프레임에서 시안으로 넘어가는 비교" />
            <div className="flex flex-col gap-8">
              {[
                {
                  step: "STEP 01",
                  title: "와이어프레임",
                  body: "시각 요소를 배제하고 콘텐츠 우선순위와 화면 구조만 검증. 반응형 3종 — 1280 / 1024 / 640.",
                },
                {
                  step: "STEP 02",
                  title: "시안 (Hi-Fi)",
                  body: "디자인 토큰을 얹어 최종 화면 품질과 톤을 확정. 데스크톱 화면 19종.",
                },
                {
                  step: "STEP 03",
                  title: "프로토타입",
                  body: "실제 브라우저에서 인터랙션과 반응형 동작을 확인. 퍼블리싱 페이지 25종, GitHub Pages 배포.",
                },
              ].map((s) => (
                <div key={s.step} className="border-l-2 pl-5" style={{ borderColor: YELLOW }}>
                  <p
                    className="text-[12px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: BLUE }}
                  >
                    {s.step}
                  </p>
                  <h3 className="mt-1 text-[22px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 max-w-[420px] text-[15px] leading-[1.65] text-black/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Screen design & my implementation ──────────────── */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <p
              className="mb-4 text-[15px] text-white/50"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              05 · My Implementation
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
                    className="mt-2 text-[15px] leading-[1.6] text-white/60"
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
          <SectionLabel>06 · Development Method</SectionLabel>
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
                  className="mt-2 text-[15px] leading-[1.6] text-black/60"
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

        {/* ── The published result ───────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-4 pb-4 md:px-8">
          <div className="mx-auto max-w-[1180px] px-4">
            <SectionLabel>07 · Live Result</SectionLabel>
            <DisplayHeading>Shipped</DisplayHeading>
          </div>
          <div className="mt-10 overflow-hidden rounded-[20px] border border-black/10 bg-white">
            <img src={publishedHome} alt="퍼블리싱된 IKEA 리디자인 메인 페이지" className="w-full object-cover" />
          </div>
          <div className="mx-auto mt-8 flex max-w-[1180px] flex-wrap gap-3 px-4">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 text-[15px] text-white transition-colors hover:opacity-90"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif", background: BLUE }}
            >
              라이브 사이트 열기 ↗
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-[15px] transition-colors hover:border-black"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              GitHub 저장소 ↗
            </a>
          </div>
        </section>

        {/* ── Results ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 pt-24 pb-8 md:px-12">
          <SectionLabel>08 · Results</SectionLabel>
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
                  className="mt-2 text-[15px] text-black/55"
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
            <SectionLabel>09 · What I Learned</SectionLabel>
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
          <a
            href="/#projects"
            className="group mt-10 inline-flex items-center gap-2 text-[15px] text-black/60 transition-colors hover:text-[#ff4e11]"
            style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
          >
            Back to all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>
      </main>

      <ContactSection />
      <FooterBar />
    </div>
  );
}

/* ─── Framed image (full image, blurred backdrop fills the letterbox) ────────── */
function FramedShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0a0a0a]">
      <div className="relative aspect-[4/3] w-full">
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
          style={{ opacity: 0.5 }}
        />
        <img src={src} alt={alt} className="relative h-full w-full object-contain" />
      </div>
    </div>
  );
}
