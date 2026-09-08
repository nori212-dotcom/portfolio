import { useEffect, useState } from "react";
import { BottomBlurVeil, ContactSection, FooterBar, ProjectCTAButton, ProjectCTAGroup } from "@/PortfolioPage";
import { ContactHeader } from "@/ContactPage";
import coverPhoto from "@/imports/ikea/cover.jpg";
import wireToHifi from "@/imports/ikea/wire-to-hifi.jpg";
import personaLee from "@/imports/ikea/persona-lee.jpg";
import personaKim from "@/imports/ikea/persona-kim.jpg";
import personaPark from "@/imports/ikea/persona-park.jpg";

const BLUE = "#0058A3";
const YELLOW = "#FBD914";

const PLAN_PDF_URL = "https://dxwiob5ehvselfuq.public.blob.vercel-storage.com/ikea-project-plan.pdf";
const DEV_PAGE_URL = "/projects/ikea-dev";

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
  { k: "My Role", v: "UX 리서치·페르소나 분석·디자인 시스템" },
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
            className="mt-7 text-[clamp(32px,4.6vw,64px)] leading-[1.15] tracking-[-0.03em]"
            style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}
          >
            공간이 아니라, <span style={{ color: BLUE }}>구조</span>가 말을 걸도록
          </h1>
          <p
            className="mt-7 max-w-[760px] text-[19px] leading-[1.6] text-black/70"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            목적형 쇼핑을 방해하던 IKEA Korea 온라인몰을, 벤치마킹·페르소나
            분석부터 디자인 시스템 확정까지 다시 설계한 리서치·디자인 파트입니다.
            실제 구현 과정은{" "}
            <a href={DEV_PAGE_URL} className="underline underline-offset-2 hover:text-[#ff4e11]">
              개발 파트
            </a>
            에서 이어집니다.
          </p>
          <ProjectCTAGroup>
            <ProjectCTAButton
              href={PLAN_PDF_URL}
              variant="accent"
              accentColor={BLUE}
              accentHoverColor="#004B8B"
              accentShadowColor="rgba(0,88,163,0.28)"
            >
              기획서 보기
            </ProjectCTAButton>
            <ProjectCTAButton href={DEV_PAGE_URL} variant="white" external={false}>
              개발 파트 보기
            </ProjectCTAButton>
          </ProjectCTAGroup>
        </section>

        {/* ── Cover image ──────────────────────────────────────── */}
        <section
          className="mx-auto max-w-[1400px] px-4 md:px-8"
          style={mounted ? { animation: "fade-up 0.9s 0.1s ease both" } : { opacity: 0 }}
        >
          <div className="aspect-[1376/768] overflow-hidden rounded-[20px] bg-[#f5f5f5]">
            <img
              src={coverPhoto}
              alt="리디자인한 IKEA Korea 사이트에 실제로 쓰인 밝은 스칸디나비안 거실 히어로 이미지"
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
                  className="mt-2 text-[16px] leading-[1.6] text-black/60"
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
                    className="mt-3 text-[16px] leading-[1.65] text-black/60"
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
                    className="mt-1.5 text-[16px] leading-[1.6] text-black/60"
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
                      className="mt-1 text-[16px] leading-snug"
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
                    className="mt-2 max-w-[420px] text-[16px] leading-[1.65] text-black/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] border-t border-black/10 px-8 py-28 text-center md:px-12">
          <p
            className="text-[clamp(24px,3.4vw,44px)] leading-[1.4]"
            style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
          >
            리서치 하나가, 25종 페이지의
            <br />
            <span style={{ color: BLUE }}>디자인 시스템</span>으로 이어졌습니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href={DEV_PAGE_URL}
              className="group inline-flex items-center gap-2 text-[15px] text-black/60 transition-colors hover:text-[#ff4e11]"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              개발 파트 보기
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
