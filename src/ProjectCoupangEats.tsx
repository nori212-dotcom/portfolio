import { useEffect, useState } from "react";
import { BottomBlurVeil, ContactSection, FooterBar } from "@/PortfolioPage";
import { ContactHeader } from "@/ContactPage";
import coverImg from "@/imports/coupang/cover.jpg";
import wideHanriver from "@/imports/coupang/wide-hanriver.jpg";
import trackingRider from "@/imports/coupang/tracking-rider.jpg";
import mediumPicnic from "@/imports/coupang/medium-picnic.jpg";
import closeupFood from "@/imports/coupang/closeup-food.jpg";
import moodGuitar from "@/imports/coupang/mood-guitar.jpg";
import moodBlossom from "@/imports/coupang/mood-blossom.jpg";

const SKY = "#00AEEF";
const PINK = "#F6B6C8";

const STORYBOARD_URL =
  "https://www.figma.com/design/uB9PPkz7txhMscNimLpIYj/%EC%98%81%EC%83%81%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C-%EC%BF%A0%ED%8C%A1%EC%9D%B4%EC%B8%A0-%EC%98%81%EC%83%81%EC%83%9D%EC%84%B1?node-id=2533-274";
const VIDEO_DRIVE_URL =
  "https://drive.google.com/file/d/1l_HVGNuzMfBw7SBQg4EAjq7_M5a7WNM_/view";
const WISEAPP_URL = "https://www.wiseapp.co.kr/insight/detail/869";

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
  { k: "Client", v: "COUPANG EATS" },
  { k: "Expertise", v: "기획 · 비주얼 디자인 · AI 모션 · 편집" },
  { k: "Duration", v: "10일 · 2025.06.18 – 07.01" },
  { k: "Designer", v: "이승운" },
];

/* ─── Purpose cards ─────────────────────────────────────────────────────────── */
const PURPOSE = [
  {
    no: "01",
    title: "브랜드 경험 전달",
    body: "단순 배달 기능 소개에서 벗어나, 일상 속 음식을 통한 즐거움을 소구합니다.",
  },
  {
    no: "02",
    title: "청춘의 연결감",
    body: "친구와 함께하는 설렘의 순간에 브랜드가 자연스럽게 동화됩니다.",
  },
  {
    no: "03",
    title: "감성 지향 메시지",
    body: "한강 피크닉 라이프스타일에 ‘맛있는 선택’이라는 가치를 매칭합니다.",
  },
];

const SERVICE_TAGS = ["Brand Experience", "Fresh Lifestyle", "Youthful Moment", "Emotional Connection"];

/* ─── Target audience stats ────────────────────────────────────────────────── */
const AGE_STATS = [
  { label: "30대", value: 34.7, primary: true },
  { label: "40대", value: 27.2, primary: false },
  { label: "20대", value: 20.6, primary: false },
  { label: "50대", value: 13.3, primary: false },
];

const TARGET_POINTS = [
  { title: "배달비 민감도", body: "1인 가구 특성상 배달비 부담에 가장 취약한 세대." },
  { title: "한집 배달 선호", body: "빠르고 정확한 배달 서비스에 높은 매력을 느낌." },
  { title: "일상의 위로", body: "퇴근 후 맛있는 음식으로 하루의 피로를 해소하고 위안을 얻음." },
];

/* ─── Visual mood ──────────────────────────────────────────────────────────── */
const MOOD = [
  {
    img: moodGuitar,
    title: "밝은 봄날의 한강",
    body: "자연광 중심의 톤앤매너로 한강 야외의 활기를 생생히 연출.",
  },
  {
    img: moodBlossom,
    title: "벚꽃과 따뜻한 햇살",
    body: "하늘을 올려다보는 시원한 느낌, 벚꽃 아래 시작되는 즐거운 순간.",
  },
  {
    img: wideHanriver,
    title: "미식 중심의 트렌디 연출",
    body: "음식이 도착한 즉시 느껴지는 오감 자극, 스피디한 컷 분할.",
  },
];

/* ─── Shooting style ──────────────────────────────────────────────────────── */
const SHOTS = [
  {
    tag: "Wide Shot",
    kr: "와이드 샷",
    img: wideHanriver,
    body: "한강 공원 전경으로 서울 풍경과 만개한 벚꽃 뷰를 확보하고, 경계 없이 연결되는 브랜드 세계관을 구축합니다.",
  },
  {
    tag: "Tracking Shot",
    kr: "트래킹 샷",
    img: trackingRider,
    body: "벚꽃 잎 날리는 한강 도로를 달리는 라이더. 배달의 신속성과 라이프스타일의 활기찬 에너지를 전달합니다.",
  },
  {
    tag: "Medium Shot",
    kr: "미디엄 샷",
    img: mediumPicnic,
    body: "돗자리에 모여 환하게 웃는 친구들의 감정에 집중. 음식을 함께 나눌 때 완성되는 유대감을 표현합니다.",
  },
  {
    tag: "Close-up Shot",
    kr: "클로즈업 샷",
    img: closeupFood,
    body: "모락모락 김이 오르는 음식 비주얼을 강조하고, 쿠팡에서 쿠팡이츠로 넘어가는 주문 모션을 확실하게 노출합니다.",
  },
  {
    tag: "Crane Up / Aerial",
    kr: "감성 엔딩",
    img: coverImg,
    body: "저녁노을 물드는 서정적인 강변 전체 뷰. Sunset Orange 광원으로 깊은 여운을 남기고 슬로건 타이틀이 페이드인됩니다.",
  },
];

/* ─── Production timeline ──────────────────────────────────────────────────── */
const TIMELINE = [
  { task: "프로젝트 착수", day: "6/18", week: 1 },
  { task: "기획", day: "6/18 – 6/19", week: 1 },
  { task: "스토리보드 작성", day: "6/22", week: 1, milestone: "1차 마일스톤" },
  { task: "프롬프트 설계", day: "6/23", week: 1 },
  { task: "AI 이미지 생성", day: "6/24", week: 1 },
  { task: "AI 영상 생성", day: "6/25", week: 1 },
  { task: "음성 · BGM 생성", day: "6/26", week: 1 },
  { task: "영상 편집", day: "6/29", week: 2 },
  { task: "검수 및 수정", day: "6/30", week: 2, milestone: "2차 마일스톤" },
  { task: "최종 렌더링 및 완료", day: "7/1", week: 2 },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ProjectCoupangEats() {
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
            className="inline-block rounded-full px-4 py-1.5 text-[13px] uppercase tracking-[0.14em] text-white"
            style={{
              fontFamily: "'Space Grotesk:Medium', sans-serif",
              background: `linear-gradient(90deg, ${SKY}, ${PINK})`,
            }}
          >
            Coupang Eats Campaign
          </span>
          <h1
            className="mt-7 text-[clamp(44px,7vw,104px)] leading-[1.04] tracking-[-0.035em]"
            style={{ fontFamily: "'Wanted Sans:Bold', sans-serif", fontWeight: 700 }}
          >
            좋은 순간엔,
            <br />
            <span style={{ color: SKY }}>맛있는</span> 선택
          </h1>
          <p
            className="mt-7 max-w-[640px] text-[19px] leading-[1.6] text-black/70"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            브랜드 인지도 강화와 시장 점유율 확대를 위한 쿠팡이츠 광고 영상 비주얼
            디자인 기획안. 한강의 봄을 배경으로 청춘의 연결감을 담은 감성 캠페인입니다.
          </p>
        </section>

        {/* ── Cover image ──────────────────────────────────────── */}
        <section
          className="mx-auto max-w-[1400px] px-4 md:px-8"
          style={mounted ? { animation: "fade-up 0.9s 0.1s ease both" } : { opacity: 0 }}
        >
          <div className="overflow-hidden rounded-[20px] bg-[#f5f5f5]">
            <img src={coverImg} alt="쿠팡이츠 캠페인 키 비주얼 — 노을 지는 한강" className="w-full object-cover" />
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
                배달 서비스가 <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>브랜드 경험 중심</strong>으로
                변화하면서, 기능 중심 광고보다 감성적 경험 전달의 중요성이 커졌습니다. 이
                프로젝트는 음식이 주는 즐거움과 사람 간의 연결에 집중해, 쿠팡이츠를{" "}
                <strong style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>행복한 순간을 함께하는 브랜드</strong>로
                표현하는 것을 목표로 합니다.
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

          {/* Purpose cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {PURPOSE.map((p) => (
              <div key={p.no} className="rounded-2xl border border-black/10 p-7">
                <span
                  className="text-[15px]"
                  style={{ fontFamily: "'Space Grotesk:Bold', sans-serif", fontWeight: 700, color: SKY }}
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

        {/* ── Target & results ────────────────────────────────── */}
        <section className="bg-[#f9f9f9]">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <SectionLabel>Core Target</SectionLabel>
            <DisplayHeading className="max-w-[900px]">20 – 30 MZ 세대</DisplayHeading>

            <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
              {/* points */}
              <div className="flex flex-col gap-6">
                {TARGET_POINTS.map((p) => (
                  <div key={p.title} className="border-b border-black/10 pb-5">
                    <h3 className="text-[18px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                      {p.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[15px] leading-[1.6] text-black/60"
                      style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* age bars */}
              <div>
                <p
                  className="mb-6 text-[14px] text-black/50"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                >
                  주요 배달 브랜드 순 결제추정금액 합 · 연령대별 비율
                </p>
                <div className="flex flex-col gap-4">
                  {AGE_STATS.map((s) => (
                    <div key={s.label} className="flex items-center gap-4">
                      <span
                        className="w-10 shrink-0 text-[14px] text-black/50"
                        style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                      >
                        {s.label}
                      </span>
                      <div className="h-8 flex-1 overflow-hidden rounded-md bg-black/5">
                        <div
                          className="flex h-full items-center justify-end pr-3 text-[13px] text-white"
                          style={{
                            width: mounted ? `${(s.value / 40) * 100}%` : "0%",
                            background: s.primary ? SKY : "#c9d1d6",
                            transition: "width 1s cubic-bezier(0.22,1,0.36,1)",
                            fontFamily: "'Space Grotesk:Medium', sans-serif",
                          }}
                        >
                          {s.value}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={WISEAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-[13px] text-black/45 underline-offset-4 hover:text-black hover:underline"
                  style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                >
                  출처 · 와이즈앱 리테일 (2025.01 – 10) ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visual mood & design guide ──────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <SectionLabel>03 · Visual Mood &amp; Design Guide</SectionLabel>
          <DisplayHeading>Look &amp; Feel</DisplayHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {MOOD.map((m) => (
              <figure key={m.title} className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-[#f5f5f5]">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="text-[19px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {m.title}
                  </h3>
                  <p
                    className="mt-1.5 text-[15px] leading-[1.6] text-black/60"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {m.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Color palette */}
          <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr_0.8fr]">
            {[
              { name: "Sky Blue", hex: "#00AEEF", body: "쿠팡이츠의 핵심 — 신선하고 빠르며 기분 좋은 배달 가치." },
              { name: "Spring Pink", hex: "#F6B6C8", body: "흐드러지는 한강 벚꽃, 설레는 청춘 일상의 봄 감성." },
            ].map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-2xl border border-black/10">
                <div className="h-32" style={{ background: c.hex }} />
                <div className="p-5">
                  <h3 className="text-[17px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                    {c.name}
                  </h3>
                  <p className="text-[13px]" style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: SKY }}>
                    {c.hex}
                  </p>
                  <p
                    className="mt-2 text-[14px] leading-[1.55] text-black/55"
                    style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                  >
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-black/10 p-5">
              <p
                className="text-[13px] uppercase tracking-[0.1em] text-black/40"
                style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
              >
                Typography
              </p>
              <p className="mt-3 text-[28px]" style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}>
                Pretendard
              </p>
              <p
                className="mt-1 text-[14px] text-black/55"
                style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
              >
                한글 · 영문 공통 — coupang eats
              </p>
            </div>
          </div>
        </section>

        {/* ── Shooting style ──────────────────────────────────── */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
            <p
              className="mb-4 text-[15px] text-white/50"
              style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
            >
              05 · Shooting Style Guide
            </p>
            <h2
              className="uppercase leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,84px)" }}
            >
              Five Cuts, One Story
            </h2>

            <div className="mt-16 flex flex-col gap-16">
              {SHOTS.map((s, i) => (
                <div
                  key={s.tag}
                  className={
                    "grid items-center gap-8 md:grid-cols-2 " + (i % 2 === 1 ? "md:[&>figure]:order-2" : "")
                  }
                >
                  <figure className="overflow-hidden rounded-2xl bg-white/5">
                    <img src={s.img} alt={s.tag} className="aspect-video w-full object-cover" />
                  </figure>
                  <div>
                    <p
                      className="text-[13px] uppercase tracking-[0.14em]"
                      style={{ fontFamily: "'Space Grotesk:Medium', sans-serif", color: PINK }}
                    >
                      {s.tag}
                    </p>
                    <h3
                      className="mt-2 text-[28px]"
                      style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
                    >
                      {s.kr}
                    </h3>
                    <p
                      className="mt-3 max-w-[440px] text-[16px] leading-[1.65] text-white/65"
                      style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Production process ──────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-8 py-24 md:px-12">
          <SectionLabel>06 · Production Process</SectionLabel>
          <DisplayHeading>10 Days, Start to Render</DisplayHeading>
          <p
            className="mt-6 max-w-[620px] text-[17px] leading-[1.6] text-black/60"
            style={{ fontFamily: "'Wanted Sans:Regular', sans-serif" }}
          >
            브랜드 BX 아이덴티티 수립부터 AI 기반 UX/UI 모션 콘텐츠 제작까지, 주말을 제외한
            평일 기준 총 10일. 두 번의 마일스톤으로 기획과 영상 품질을 점검했습니다.
          </p>

          <div className="mt-12 flex flex-col">
            {TIMELINE.map((t) => (
              <div
                key={t.task}
                className="flex items-center gap-4 border-b border-black/10 py-4"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: t.week === 1 ? SKY : PINK }}
                />
                <span
                  className="flex-1 text-[16px]"
                  style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
                >
                  {t.task}
                  {t.milestone && (
                    <span
                      className="ml-3 rounded-full px-2.5 py-0.5 text-[12px] align-middle"
                      style={{ background: "#0a0a0a", color: "#fff", fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                    >
                      {t.milestone}
                    </span>
                  )}
                </span>
                <span
                  className="shrink-0 text-[14px] text-black/45"
                  style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
                >
                  {t.day}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-5 flex gap-5 text-[13px] text-black/50"
            style={{ fontFamily: "'Space Grotesk:Medium', sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: SKY }} /> 1주차
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: PINK }} /> 2주차
            </span>
          </div>
        </section>

        {/* ── Final video ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-4 pb-10 md:px-8">
          <div className="mx-auto max-w-[1180px] px-4 md:px-4">
            <SectionLabel>08 · Final Result</SectionLabel>
            <DisplayHeading>The Film</DisplayHeading>
          </div>
          <div className="mt-10 overflow-hidden rounded-[20px] bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/projects/coupang-eats-poster.jpg"
              className="aspect-video w-full"
            >
              <source src="/projects/coupang-eats.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mx-auto mt-8 flex max-w-[1180px] flex-wrap gap-3 px-4 md:px-4">
            <a
              href={VIDEO_DRIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0a0a0a] px-6 py-3 text-[15px] text-white transition-colors hover:bg-black/80"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              원본 영상 보기 ↗
            </a>
            <a
              href={STORYBOARD_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-[15px] transition-colors hover:border-black"
              style={{ fontFamily: "'Wanted Sans:Medium', sans-serif" }}
            >
              스토리보드 (Figma) ↗
            </a>
          </div>
        </section>

        {/* ── Closing ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] border-t border-black/10 px-8 py-28 text-center md:px-12">
          <p
            className="text-[clamp(24px,3.4vw,44px)] leading-[1.4]"
            style={{ fontFamily: "'Wanted Sans:SemiBold', sans-serif" }}
          >
            따뜻한 순간을 담아,
            <br />
            일상의 모든 즐거움을 <span style={{ color: SKY }}>쿠팡이츠</span>가 함께합니다.
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
