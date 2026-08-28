import svgPaths from "./svg-keyty4nbmm";
import imgSignatureSeungLee from "./1f54c6870da8a50abff60449876f8108d669f125.png";
import imgHero1Png from "./b72de90d96d7c72b63a72133dc5e5a745f887b21.png";
import imgGallerySlide from "./9e0c00d1ecde8485050d2737152b3d00059263e4.png";
import imgGallerySlide1 from "./8285befa8eab95ccd6d92d5a33be928de550bb87.png";
import imgGallerySlide2 from "./19b825796c8b29c56a27f3fbc5148b1e9e4a7bf4.png";
import imgGallerySlide3 from "./2681fdb0d6c2a73fc995a57a883e729a84f9af42.png";
type ComponentProps = {
  className?: string;
  variant?: "4" | "5" | "6" | "7" | "12";
};

function Component({ className, variant = "4" }: ComponentProps) {
  const is12 = variant === "12";
  const is5Or12 = ["5", "12"].includes(variant);
  const is6Or7 = ["6", "7"].includes(variant);
  const is6Or7Or12 = ["6", "7", "12"].includes(variant);
  return (
    <div className={className || `overflow-clip relative ${is6Or7 ? "size-[10px]" : is5Or12 ? "size-[14px]" : "size-[190px]"}`}>
      {["5", "6", "7", "12"].includes(variant) && (
        <div className={`absolute ${is12 ? "bottom-[7.14%] left-1/2 right-1/2 top-[7.14%]" : is6Or7 ? "inset-[10%]" : "inset-[7.14%]"}`} data-name="Vector">
          <div className={`absolute ${is12 ? "inset-[-8.33%_-1px]" : is6Or7 ? "inset-[-9.38%]" : "inset-[-5.89%]"}`}>
            <svg className="block size-full" fill="none" height={is12 ? "14" : is6Or7 ? "9.5" : "13.4142"} preserveAspectRatio="none" viewBox={is12 ? "0 0 2 14" : is6Or7 ? "0 0 9.5 9.5" : "0 0 13.4142 13.4142"} width={is12 ? "2" : is6Or7 ? "9.5" : "13.4142"}>
              <path d={is12 ? "M1 13V1" : is6Or7 ? svgPaths.p3e082680 : svgPaths.p3bd67dc0} id="Vector" stroke={is6Or7 ? "#2E2D2D" : "white"} strokeLinecap={is6Or7Or12 ? "round" : undefined} strokeLinejoin={is6Or7Or12 ? "round" : undefined} strokeWidth={is6Or7 ? "1.5" : "2"} />
            </svg>
          </div>
        </div>
      )}
      {is5Or12 && (
        <div className={`absolute ${is12 ? "bottom-1/2 left-[7.14%] right-[7.14%] top-[7.14%]" : "inset-[7.14%]"}`} data-name="Vector">
          <div className={`absolute ${is12 ? "inset-[-16.67%_-8.33%]" : "inset-[-8.33%]"}`}>
            <svg className="block size-full" fill="none" height={is12 ? "8" : "14"} preserveAspectRatio="none" viewBox={is12 ? "0 0 14 8" : "0 0 14 14"} width="14">
              <path d={is12 ? "M1 7L7 1L13 7" : "M1 1H13V13"} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      )}
      {variant === "4" && (
        <svg className="absolute block inset-0 size-full" fill="none" height="190" preserveAspectRatio="none" viewBox="0 0 190 190" width="190">
          <path d={svgPaths.pfec6e00} fill="#FF471D" id="Vector" />
        </svg>
      )}
    </div>
  );
}
type MarqueeItemProps = {
  className?: string;
  label?: string;
};

function MarqueeItem({ className, label = "Label_" }: MarqueeItemProps) {
  return (
    <div className={className || "relative"} data-name="Marquee Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[#0a0a0a] text-[149px] whitespace-nowrap">{label}</p>
        </div>
      </div>
    </div>
  );
}

function GallerySlide({ className }: { className?: string }) {
  return <div className={className || "bg-[#f5f5f5] h-[400px] overflow-clip relative rounded-[16px] w-[540px]"} data-name="Gallery Slide" />;
}
type SkillLabelProps = {
  className?: string;
  label?: string;
};

function SkillLabel({ className, label = "Skill" }: SkillLabelProps) {
  return (
    <div className={className || "relative"} data-name="Skill Label">
      <div className="content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[70px] not-italic relative shrink-0 text-[#141414] text-[70px] whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}

function NavLeft() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="nav-left">
      <div className="bg-[#ededed] h-[24px] relative rounded-[100px] shrink-0 w-[77px]" data-name="Nav Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-black whitespace-nowrap">HOME</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] h-[24px] relative rounded-[100px] shrink-0 w-[80px]" data-name="Nav Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-black whitespace-nowrap">PAGES</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] h-[24px] relative rounded-[100px] shrink-0 w-[101px]" data-name="Nav Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-black whitespace-nowrap">PROJECT</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] h-[24px] relative rounded-[100px] shrink-0 w-[73px]" data-name="Nav Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-black whitespace-nowrap">BLOG</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] h-[24px] relative rounded-[100px] shrink-0 w-[104px]" data-name="Nav Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-black whitespace-nowrap">CONTACT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end overflow-clip relative shrink-0 w-[507px]" data-name="nav-right">
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap">Soyul8363@GMAIL.COM</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="content-stretch flex items-start px-[24px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Wanted_Sans:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">연락하기</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex gap-[363px] items-center px-[40px] py-[24px] relative shrink-0 w-full" data-name="header">
      <NavLeft />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff4e11] text-[28px] whitespace-nowrap">Seung Woon</p>
      <NavRight />
    </div>
  );
}

function SignatureSeungLee() {
  return (
    <div className="h-[59px] relative shrink-0 w-[154px]" data-name="signature-seung-lee">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[218.46%] left-[-18.88%] max-w-none top-[-58.09%] w-[137.36%]" src={imgSignatureSeungLee} />
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="arrow-up-right">
          <path d="M2 10L10 2M10 9V2H3" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="arrow-up-right">
          <path d="M2 10L10 2M10 9V2H3" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[24px] h-[188px] items-end justify-center pt-[106px] relative shrink-0" data-name="socials">
      <div className="relative shrink-0" data-name="Hero Social Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">Instagram</p>
            <ArrowUpRight />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Hero Social Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">Twitter</p>
            <ArrowUpRight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-end relative shrink-0 w-[500px]" data-name="intro-column">
      <div className="[word-break:break-word] font-['Wanted_Sans:SemiBold',sans-serif] h-[136px] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[32px] w-[494px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`안녕하세요. `}</p>
        <p className="leading-[normal]">아이디어를 코드로 구현하고, 기술과 창의적인 시각을 바탕으로 새로운 것을 만들어가는 개발자 이승운입니다.</p>
      </div>
      <SignatureSeungLee />
      <Socials />
    </div>
  );
}

function SpanElementorButtonText() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span.elementor-button-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575454] text-[16px] text-center uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[14px]">Art Direction</p>
      </div>
    </div>
  );
}

function SpanElementorButtonContentWrapper() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span.elementor-button-content-wrapper">
      <SpanElementorButtonText />
    </div>
  );
}

function SpanElementorButtonText1() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span.elementor-button-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575454] text-[16px] text-center uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[14px]">Web Design</p>
      </div>
    </div>
  );
}

function SpanElementorButtonContentWrapper1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span.elementor-button-content-wrapper">
      <SpanElementorButtonText1 />
    </div>
  );
}

function SpanElementorButtonText2() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span.elementor-button-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575454] text-[16px] text-center uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[14px]">Branding</p>
      </div>
    </div>
  );
}

function SpanElementorButtonContentWrapper2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span.elementor-button-content-wrapper">
      <SpanElementorButtonText2 />
    </div>
  );
}

function SpanElementorButtonText3() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span.elementor-button-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575454] text-[16px] text-center uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[14px]">Motion Design</p>
      </div>
    </div>
  );
}

function SpanElementorButtonContentWrapper3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span.elementor-button-content-wrapper">
      <SpanElementorButtonText3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-center relative shrink-0">
      <a className="bg-[#f8f8f8] relative rounded-[20px] shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 8">
        <div className="content-stretch flex items-start px-[12px] py-[9px] relative size-full">
          <SpanElementorButtonContentWrapper1 />
        </div>
      </a>
      <a className="bg-[#f8f8f8] relative rounded-[20px] shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 11">
        <div className="content-stretch flex items-start px-[12px] py-[9px] relative size-full">
          <SpanElementorButtonContentWrapper2 />
        </div>
      </a>
      <a className="bg-[#f8f8f8] relative rounded-[20px] shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 7">
        <div className="content-stretch flex items-start px-[12px] py-[9px] relative size-full">
          <SpanElementorButtonContentWrapper3 />
        </div>
      </a>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start left-[181px] p-[10px] top-[561px]">
      <Frame1 />
    </div>
  );
}

function PortraitColumn() {
  return (
    <div className="h-[600px] relative shrink-0 w-[558px]" data-name="portrait-column">
      <a className="absolute bg-[#f8f8f8] cursor-pointer left-[321px] rounded-[20px] top-[525px]" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 9">
        <div className="content-stretch flex items-start px-[18px] py-[9px] relative size-full">
          <SpanElementorButtonContentWrapper />
        </div>
      </a>
      <Frame />
    </div>
  );
}

function SpanElementorButtonText4() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span.elementor-button-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575454] text-[16px] text-center uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[14px]">HTML</p>
      </div>
    </div>
  );
}

function SpanElementorButtonContentWrapper4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span.elementor-button-content-wrapper">
      <SpanElementorButtonText4 />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px pb-[60px] pt-[40px] px-[80px] relative w-full" data-name="hero-content">
      <IntroColumn />
      <PortraitColumn />
      <a className="absolute bg-[#f8f8f8] cursor-pointer left-[1753px] rounded-[20px] top-[705px]" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 10">
        <div className="content-stretch flex items-start px-[18px] py-[9px] relative size-full">
          <SpanElementorButtonContentWrapper4 />
        </div>
      </a>
    </div>
  );
}

function Hero1Png() {
  return (
    <div className="-translate-x-1/2 absolute h-[700px] left-1/2 top-[70px] w-[708px]" data-name="hero-1.png">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[114.63%] left-[0.05%] max-w-none top-[8.5%] w-full" src={imgHero1Png} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0.6) 78%, rgba(255, 255, 255, 0.9) 92%, rgb(255, 255, 255) 100%)" }} />
      </div>
    </div>
  );
}

function HeroViewport() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[840px] items-start relative shrink-0 w-full" data-name="hero-viewport">
      <HeroContent />
      <Hero1Png />
    </div>
  );
}

function DivSwiperWrapper24541B9825628C2A() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1036.82px]" data-name="div#swiper-wrapper-24541b9825628c2a">
      <div className="relative shrink-0 w-[1116.99px]" data-name="Marquee Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[#0a0a0a] text-[149px] whitespace-nowrap">Development_</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[621px]" data-name="Marquee Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[#0a0a0a] text-[149px] whitespace-nowrap">Design_</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[837px]" data-name="Marquee Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[#0a0a0a] text-[149px] whitespace-nowrap">Branding_</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutMarqueeInner() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="about-marquee-inner">
      <DivSwiperWrapper24541B9825628C2A />
    </div>
  );
}

function AboutMarqueeWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[30px] relative shrink-0 w-full" data-name="about-marquee-wrapper">
      <AboutMarqueeInner />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[120px] px-[80px] relative shrink-0 w-full" data-name="about-section">
      <AboutMarqueeWrapper />
    </div>
  );
}

function LetsTalkBg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="lets-talk-bg">
      <div className="overflow-clip relative shrink-0 size-[190px]" data-name="Component 5">
        <svg className="absolute block inset-0 size-full" fill="none" height="190" preserveAspectRatio="none" viewBox="0 0 190 190" width="190">
          <path d={svgPaths.pfec6e00} fill="#FF4E11" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IBtnIcon() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7.55px] pt-[6.34px] px-[38.14px] relative shrink-0 w-full" data-name="i.btn-icon">
      <Component className="overflow-clip relative shrink-0 size-[14px]" variant="5" />
    </div>
  );
}

function LetsTalkText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[34.01%_26.24%] items-start" data-name="lets-talk-text">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16.6px] text-center text-white whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[normal]">{`Let's Talk`}</p>
      </div>
      <IBtnIcon />
    </div>
  );
}

function LetsTalkButton() {
  return (
    <a className="absolute content-stretch cursor-pointer flex items-start justify-center left-0 top-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/contact-me/" target="_blank" data-name="lets-talk-button">
      <LetsTalkBg />
      <LetsTalkText />
    </a>
  );
}

function SkillsIntroLabel() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[725px] relative shrink-0 w-full" data-name="skills-intro-label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] w-full">
        <p className="leading-[16px]">About me</p>
      </div>
    </div>
  );
}

function H4PxSectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.px-section-title">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[70.8px] tracking-[-1.3px] uppercase w-full">
        <p className="leading-[96.2px]">What i do</p>
      </div>
    </div>
  );
}

function DivElementorWidgetContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full" data-name="div.elementor-widget-container">
      <H4PxSectionTitle />
    </div>
  );
}

function DivElementorElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[10px] relative shrink-0 w-full" data-name="div.elementor-element">
      <DivElementorWidgetContainer />
    </div>
  );
}

function SkillsIntro() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start justify-center min-w-px pb-[90.41px] pt-[100.39px] relative self-stretch" data-name="skills-intro">
      <SkillsIntroLabel />
      <DivElementorElement />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="1 / 5">
      <SkillLabel className="h-[111px] relative shrink-0 w-[496.1px]" label="Design" />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="2 / 5">
      <SkillLabel className="h-[111px] relative shrink-0 w-[496.1px]" label="Development" />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="3 / 5">
      <SkillLabel className="h-[111px] relative shrink-0 w-[496.1px]" label="Branding" />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="4 / 5">
      <SkillLabel className="h-[111px] relative shrink-0 w-[496.1px]" label="Design" />
    </div>
  );
}

function Component5() {
  return <div className="h-[110px] relative shrink-0 w-full" data-name="5 / 5" />;
}

function DivSwiperContainer() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_-235px_0] items-start pt-[15px]" data-name="div.swiper-container">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function DivPxService6SlideWrap() {
  return (
    <div className="h-[330px] overflow-clip relative shrink-0 w-[496.1px]" data-name="div.px-service-6-slide-wrap">
      <DivSwiperContainer />
      <div className="absolute inset-[0_0.01px_0_0]" style={{ backgroundImage: "linear-gradient(180deg, rgb(249, 249, 249) 10%, rgba(249, 249, 249, 0) 40%, rgba(249, 249, 249, 0) 60%, rgb(249, 249, 249) 90%)" }} data-name="::after" />
    </div>
  );
}

function SkillsDetail() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-[15px] relative self-stretch shrink-0 w-[725px]" data-name="skills-detail">
      <DivPxService6SlideWrap />
    </div>
  );
}

function SkillsTopRow() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center pb-[120px] relative shrink-0 w-full" data-name="skills-top-row">
      <SkillsIntro />
      <SkillsDetail />
    </div>
  );
}

function About61Jpg() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f57838] h-[259px] left-0 overflow-clip rounded-[16px] to-[#e5541a] top-[0.2px] w-[438px]" data-name="about-6-1.jpg">
      <div className="[word-break:break-word] absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[0] left-[47px] text-[#0a0a0a] text-[36px] top-[61px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">EAT _</p>
        <p className="leading-[normal] mb-0">DREAM</p>
        <p className="leading-[normal]">DESIGN</p>
      </div>
      <div className="absolute h-[252px] left-[177px] top-[54px] w-[248px]" data-name="person-cutout">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero1Png} />
          <div className="absolute bg-[rgba(243,116,53,0.11)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function SkillsExperience() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[604.13px]" data-name="skills-experience">
      <About61Jpg />
    </div>
  );
}

function DivElementorElementAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[45.615px] pr-[12.1px] relative shrink-0 w-full" data-name="div.elementor-element:align-flex-start">
      <div className="[word-break:break-word] flex flex-col font-['Wanted_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[32px] w-full">
        <p className="leading-[normal]">저는 영상 편집을 통해 쌓아온 시각적 감각을 바탕으로 웹 개발까지 영역을 넓혀가고 있는 크리에이터입니다. 영상과 개발이라는 서로 다른 경험을 연결해 아이디어를 표현하고, 직접 구현하며 새로운 경험을 만들어갑니다.</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="span">
      <div className="absolute bg-[#2e2d2d] bottom-[2.8px] h-px left-0 right-0" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e2d2d] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[26px]">더 알아보기</p>
      </div>
    </div>
  );
}

function I() {
  return (
    <div className="content-stretch flex items-end overflow-clip pb-px pl-px pr-[3px] pt-[3px] relative shrink-0 size-[14px]" data-name="i">
      <Component className="overflow-clip relative shrink-0 size-[10px]" variant="7" />
    </div>
  );
}

function IMargin() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pl-[7px] relative shrink-0 w-[21px]" data-name="i:margin">
      <I />
    </div>
  );
}

function DivElementorElement2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element">
      <a className="cursor-pointer relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/about-me/" target="_blank" data-name="Component 8">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Span />
            <IMargin />
          </div>
        </div>
      </a>
    </div>
  );
}

function DivElementorElement1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[125px] right-0 top-[-0.6px]" data-name="div.elementor-element">
      <DivElementorElementAlignFlexStart />
      <DivElementorElement2 />
    </div>
  );
}

function SkillsImage() {
  return (
    <div className="relative self-stretch shrink-0 w-[845.88px]" data-name="skills-image">
      <DivElementorElement1 />
    </div>
  );
}

function SkillsBottomRow() {
  return (
    <div className="content-stretch flex gap-[30px] items-start min-h-[287.0199890136719px] relative shrink-0 w-full" data-name="skills-bottom-row">
      <SkillsExperience />
      <SkillsImage />
    </div>
  );
}

function SkillsSectionInner() {
  return (
    <div className="content-stretch flex flex-col items-start py-[110px] relative shrink-0 w-full" data-name="skills-section-inner">
      <SkillsTopRow />
      <SkillsBottomRow />
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start justify-center px-[220px] relative shrink-0 w-[1920px]" data-name="skills-section">
      <SkillsSectionInner />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="projects-section">
      <div className="h-[172px] relative shrink-0 w-full" data-name="Project Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between py-[40px] relative size-full">
            <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[92px] min-w-px relative text-[#0a0a0a] text-[72px]">COUPANG EATS</p>
            <p className="font-['Wanted_Sans:Medium',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] text-right whitespace-nowrap">광고 영상, 포트폴리오</p>
          </div>
        </div>
      </div>
      <div className="h-[172px] relative shrink-0 w-full" data-name="Project Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between py-[40px] relative size-full">
            <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[92px] min-w-px relative text-[#0a0a0a] text-[72px]">IKEA</p>
            <p className="font-['Wanted_Sans:Medium',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] text-right whitespace-nowrap">홈페이지 리디자인, 웹 개발</p>
          </div>
        </div>
      </div>
      <div className="h-[172px] relative shrink-0 w-full" data-name="Project Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between py-[40px] relative size-full">
            <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[92px] min-w-px relative text-[#0a0a0a] text-[72px]">SPACE NEEDLE</p>
            <p className="font-['Wanted_Sans:Medium',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] text-right whitespace-nowrap">UX/UI, 개발</p>
          </div>
        </div>
      </div>
      <div className="h-[172px] relative shrink-0 w-full" data-name="Project Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between py-[40px] relative size-full">
            <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[92px] min-w-px relative text-[#0a0a0a] text-[72px]">FABRIC</p>
            <p className="font-['Wanted_Sans:Medium',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] text-right whitespace-nowrap">모션 디자인, 디자인 디렉션</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryRow1Track() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[4320px]" data-name="gallery-row-1-track">
      <GallerySlide className="bg-[#f5f5f5] h-[400px] relative rounded-[16px] shrink-0 w-[540px]" />
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide1} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide2} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide1} />
        </div>
      </div>
      <GallerySlide className="bg-[#f5f5f5] h-[400px] relative rounded-[16px] shrink-0 w-[540px]" />
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide3} />
        </div>
      </div>
    </div>
  );
}

function GalleryRow1Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="gallery-row-1-wrapper">
      <GalleryRow1Track />
    </div>
  );
}

function GalleryRow2Track() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-[4860px]" data-name="gallery-row-2-track">
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[9]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide} />
        </div>
      </div>
      <GallerySlide className="bg-[#f5f5f5] h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[8]" />
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[7]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide3} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[6]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[5]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide2} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[4]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide1} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[3]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[2]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide2} />
        </div>
      </div>
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[540px] z-[1]" data-name="Gallery Slide">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGallerySlide1} />
        </div>
      </div>
    </div>
  );
}

function GalleryRow2Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="gallery-row-2-wrapper">
      <GalleryRow2Track />
    </div>
  );
}

function GallerySection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] h-[1030px] items-start overflow-clip p-[80px] relative shrink-0 w-full" data-name="gallery-section">
      <GalleryRow1Wrapper />
      <GalleryRow2Wrapper />
    </div>
  );
}

function AwardsList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="awards-list">
      <div className="h-[80px] relative shrink-0 w-full" data-name="Award Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic py-[24px] relative size-full text-[16px] whitespace-nowrap">
            <p className="font-['Wanted_Sans:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#1a1a1a]">프론트엔드 개발</p>
            <p className="font-['Wanted_Sans:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#666]">HTML / CSS / JavaScript</p>
          </div>
        </div>
      </div>
      <div className="h-[80px] relative shrink-0 w-full" data-name="Award Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic py-[24px] relative size-full text-[16px] whitespace-nowrap">
            <p className="font-['Wanted_Sans:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#1a1a1a]">{`영상 편집 & 모션`}</p>
            <p className="font-['Wanted_Sans:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#666]">Premiere Pro / After Effects</p>
          </div>
        </div>
      </div>
      <div className="h-[80px] relative shrink-0 w-full" data-name="Award Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic py-[24px] relative size-full text-[16px] whitespace-nowrap">
            <p className="font-['Wanted_Sans:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#1a1a1a]">{`디자인 & 프로토타이핑`}</p>
            <p className="font-['Wanted_Sans:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#666]">Figma / Photoshop / Illustrator</p>
          </div>
        </div>
      </div>
      <div className="h-[80px] relative shrink-0 w-full" data-name="Award Row">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic py-[24px] relative size-full text-[16px] whitespace-nowrap">
            <p className="font-['Wanted_Sans:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#1a1a1a]">기타 도구</p>
            <p className="font-['Wanted_Sans:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#666]">Git / VS Code / Notion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AwardsSection() {
  return (
    <div className="bg-white content-stretch flex gap-[80px] items-start px-[80px] py-[120px] relative shrink-0 w-full" data-name="awards-section">
      <div className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#0a0a0a] text-[48px] w-[450px]">
        <p className="leading-[normal] mb-0">{`SKILLS &`}</p>
        <p className="leading-[normal]">TOOLS</p>
      </div>
      <AwardsList />
    </div>
  );
}

function DivSwiperWrapper24541B9825628C2A1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1036.82px]" data-name="div#swiper-wrapper-24541b9825628c2a">
      <div className="relative shrink-0 w-[1116.99px]" data-name="Marquee Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[149px] text-white whitespace-nowrap">Development_</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[621px]" data-name="Marquee Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[220px] relative shrink-0 text-[149px] text-white whitespace-nowrap">Design_</p>
          </div>
        </div>
      </div>
      <MarqueeItem className="relative shrink-0 w-[837px]" label="Branding_" />
    </div>
  );
}

function ContactMarqueeInner() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="contact-marquee-inner">
      <DivSwiperWrapper24541B9825628C2A1 />
    </div>
  );
}

function ContactMarqueeWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[30px] pt-[55px] relative shrink-0 w-full" data-name="contact-marquee-wrapper">
      <ContactMarqueeInner />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_109)" id="arrow-up-right">
          <path d="M1 9L9 1M9 8V1H2" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_0_109">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_109)" id="arrow-up-right">
          <path d="M1 9L9 1M9 8V1H2" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_0_109">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_109)" id="arrow-up-right">
          <path d="M1 9L9 1M9 8V1H2" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_0_109">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[20px] relative shrink-0" data-name="footer-socials">
      <div className="relative shrink-0" data-name="Social Link">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Linkedin</p>
            <ArrowUpRight2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Social Link">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Twitter</p>
            <ArrowUpRight3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Social Link">
        <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Facebook</p>
            <ArrowUpRight4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[450px]" data-name="contact-info">
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap">010-50308363</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[54px] text-white w-[635px]">Soyul8363@gmail.com</p>
      <FooterSocials />
    </div>
  );
}

function InputBox() {
  return (
    <div className="border border-[#eaeaea] border-solid content-stretch flex items-start overflow-clip px-[20px] py-[14px] relative rounded-[100px] shrink-0 w-full" data-name="input-box">
      <p className="[word-break:break-word] font-['Wanted_Sans:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">개인 포트폴리오</p>
    </div>
  );
}

function InputBox1() {
  return (
    <div className="border border-[#eaeaea] border-solid content-stretch flex items-start overflow-clip px-[20px] py-[14px] relative rounded-[100px] shrink-0 w-full" data-name="input-box">
      <p className="[word-break:break-word] font-['Wanted_Sans:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">이름을 입력하세요</p>
    </div>
  );
}

function InputBox2() {
  return (
    <div className="border border-[#eaeaea] border-solid content-stretch flex items-start overflow-clip px-[20px] py-[14px] relative rounded-[100px] shrink-0 w-full" data-name="input-box">
      <p className="[word-break:break-word] font-['Wanted_Sans:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">이메일 주소를 입력하세요</p>
    </div>
  );
}

function InputRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="input-row">
      <div className="flex-[1_0_0] h-[67px] min-w-px relative" data-name="Input Field">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Wanted_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">프로젝트 유형</p>
          <InputBox />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[67px] min-w-px relative" data-name="Input Field">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Wanted_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">이름</p>
          <InputBox1 />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[67px] min-w-px relative" data-name="Input Field">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Wanted_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">이메일 주소</p>
          <InputBox2 />
        </div>
      </div>
    </div>
  );
}

function InputBox3() {
  return (
    <div className="border border-[#eaeaea] border-solid content-stretch flex items-start overflow-clip px-[20px] py-[14px] relative rounded-[100px] shrink-0 w-full" data-name="input-box">
      <p className="[word-break:break-word] font-['Wanted_Sans:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">무엇을 도와드릴까요?</p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[680px]" data-name="contact-form">
      <InputRow />
      <div className="h-[67px] relative shrink-0 w-full" data-name="Input Field">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Wanted_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">메시지</p>
          <InputBox3 />
        </div>
      </div>
    </div>
  );
}

function ContactBody() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="contact-body">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

function ContactFooterSection() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[80px] items-start pb-[40px] pt-[2px] px-[80px] relative shrink-0 w-full" data-name="contact-footer-section">
      <ContactMarqueeWrapper />
      <ContactBody />
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1510px] relative shrink-0" data-name="footer-copyright">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] tracking-[-0.15px] uppercase whitespace-nowrap">
        <p className="text-[16px]">
          <span className="leading-[15px] text-[rgba(255,255,255,0.6)]">{`© 2026 `}</span>
          <span className="leading-[15px] text-white">Themepure</span>
          <span className="leading-[15px] text-[rgba(255,255,255,0.6)]">. All Right Reserved</span>
        </p>
      </div>
    </div>
  );
}

function FooterCopyrightWrapper() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="footer-copyright-wrapper">
      <FooterCopyright />
    </div>
  );
}

function FooterNavWrapper() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[39.9px] items-start pb-[6px] pr-[35.99px] pt-[5px] relative shrink-0" data-name="footer-nav-wrapper">
      <a className="relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 12">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
            <p className="cursor-pointer leading-[15px]">Home</p>
          </div>
        </div>
      </a>
      <a className="relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 12">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
            <p className="cursor-pointer leading-[15px]">About</p>
          </div>
        </div>
      </a>
      <a className="relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 12">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
            <p className="cursor-pointer leading-[15px]">projects</p>
          </div>
        </div>
      </a>
      <a className="relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 12">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
            <p className="cursor-pointer leading-[15px]">blog</p>
          </div>
        </div>
      </a>
      <a className="relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="Component 12">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
            <p className="cursor-pointer leading-[15px]">contact</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex items-start pb-[3.09px] pt-[1.91px] relative shrink-0" data-name="span">
      <Component className="overflow-clip relative shrink-0 size-[14px]" variant="12" />
    </div>
  );
}

function A() {
  return (
    <a className="content-stretch cursor-pointer flex items-center justify-end relative shrink-0" href="https://wp.aqlova.com/pixora/creative-agency-classic/personal-portfolio/" target="_blank" data-name="a">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white tracking-[-0.15px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[15px]">{`back to top `}</p>
      </div>
      <Span1 />
    </a>
  );
}

function FooterBackToTopWrapper() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[4px] pt-[3px] relative shrink-0" data-name="footer-back-to-top-wrapper">
      <A />
    </div>
  );
}

function FooterBarInner() {
  return (
    <div className="content-stretch flex gap-[296.9px] items-start pb-[23px] pt-[30px] relative shrink-0 w-full" data-name="footer-bar-inner">
      <FooterCopyrightWrapper />
      <FooterNavWrapper />
      <FooterBackToTopWrapper />
    </div>
  );
}

function FooterBar() {
  return (
    <div className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] border-solid border-t content-stretch flex flex-col h-[80px] items-start justify-center px-[205px] relative shrink-0 w-[1920px]" data-name="footer-bar">
      <FooterBarInner />
    </div>
  );
}

export default function PixoraPortfolio() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="pixora-portfolio">
      <Header />
      <HeroViewport />
      <AboutSection />
      <div className="absolute left-[1283px] size-[190px] top-[879px]" data-name="CTA Blob">
        <LetsTalkButton />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <AwardsSection />
      <ContactFooterSection />
      <FooterBar />
    </div>
  );
}