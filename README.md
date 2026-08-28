# Seung Woon — Portfolio

React + Vite + Tailwind CSS v4로 만든 개인 포트폴리오 사이트입니다. (Figma Make에서 export)

## 스택

- **React 19** + **React DOM 19**
- **Vite 8** (`@vitejs/plugin-react`)
- **Tailwind CSS v4** (`@tailwindcss/vite` 플러그인, config 파일 없음)
- **TypeScript 5.7**
- 포매터: **oxfmt**

## 개발

```bash
pnpm install
pnpm dev        # 개발 서버 (Vite, --host 0.0.0.0)
pnpm build      # 프로덕션 빌드 → dist/
pnpm preview    # 빌드 결과 미리보기
pnpm format     # oxfmt 포매팅
```

Node.js / pnpm 버전은 `.mise.toml`에 고정되어 있습니다.

## 구조

| 경로 | 설명 |
| --- | --- |
| `src/main.tsx` | React 엔트리포인트. `src/index.css`를 불러오고 `#root`에 `App` 마운트 |
| `src/App.tsx` | 라우팅 담당. 경로가 `/contact`면 `ContactPage`, 그 외에는 `PortfolioPage` |
| `src/PortfolioPage.tsx` | 메인 포트폴리오 페이지 (`ContactSection`, `FooterBar`, `BottomBlurVeil` 등 공용 컴포넌트 export) |
| `src/ContactPage.tsx` | 문의 페이지 (관심 분야 선택 + 문의 폼) |
| `src/index.css` | 전역 CSS. Tailwind import, `@font-face`(Wanted Sans), 애니메이션 키프레임 |
| `src/imports/` | Figma Make에서 생성된 에셋 및 원본 컴포넌트 |
| `public/fonts/` | Wanted Sans woff2 폰트 |
| `vite.config.ts` | Vite 설정 (React, Tailwind v4, Figma Make 플러그인, `@` → `src` alias) |

## 라우팅

클라이언트 사이드 라우터 없이 `window.location.pathname`으로 분기합니다.

- `/` — 포트폴리오
- `/contact` — 문의 페이지

## 에셋

이미지(`*.png`)는 Git LFS로 관리됩니다 (`.gitattributes` 참고).
