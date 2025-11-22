# Design to Markup 프로젝트

### 구현 의도

1. **재사용 가능한 컴포넌트 설계**: UI 컴포넌트를 독립적으로 설계하여 여러 곳에서 재사용할 수 있도록 구성
2. **개발자 협업 문서화**: Storybook을 활용하여 컴포넌트 사용법과 예시를 시각적으로 문서화
3. **유지보수성 향상**: 타입 안정성과 모듈화된 스타일링으로 코드의 가독성과 유지보수성 확보
4. **접근성 고려**: 스크린 리더 사용자를 위한 시맨틱 마크업과 ARIA 속성 적용
5. **SEO 최적화**: 메타 태그와 시맨틱 HTML 구조를 통한 검색 엔진 최적화

## 🛠 주요 기술 선택 사항 및 이유

### 1. Sass + CSS Modules
**선택 이유:**
- **CSS Modules**: 클래스명 충돌 방지, 컴포넌트별 스타일 격리
- **Sass**: 변수, 믹스인, 중첩 등으로 스타일 코드 재사용성 향상
- **글로벌 스타일**: `global.scss`와 모듈 스타일을 분리하여 관리

### 2. Zustand (상태 관리)
**선택 이유:**
- **경량 라이브러리**: Redux 대비 번들 크기 작음
- **TypeScript 지원**: 타입 추론이 잘 됨

### 3. Swiper
**선택 이유:**
- **카드 슬라이더 구현**: 모바일에서 카드 리스트를 슬라이더로 표시
- **터치 제스처 지원**: 모바일 사용자 경험 향상
- **커스터마이징 용이**: SCSS로 스타일 오버라이드 가능

---

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Button/         # 버튼 컴포넌트
│   ├── Card/           # 카드 컴포넌트
│   ├── CardSlider/     # 카드 슬라이더 컴포넌트
│   ├── Header/         # 헤더 컴포넌트
│   ├── Img/            # 이미지 컴포넌트
│   ├── Logo/           # 로고 컴포넌트
│   ├── sections/       # 섹션 컴포넌트들
│   ├── Tab/            # 탭 컴포넌트
│   └── Text/           # 텍스트 컴포넌트
├── store/              # 상태 관리 (Zustand)
│   └── useDeviceStore.ts  # 디바이스 크기 감지 스토어
├── styles/             # 전역 스타일
│   ├── abstract/       # SCSS 변수, 믹스인 등
│   └── global.scss     # 전역 스타일
└── types/              # TypeScript 타입 정의
```

---

## 🎨 주요 컴포넌트 설계 의도

### 1. Text 컴포넌트
**설계 의도:**
- 텍스트 스타일을 일관되게 관리하기 위한 컴포넌트
- `variant` prop으로 heading1, heading2, paragraph 등 다양한 텍스트 스타일 적용
- `as` prop으로 시맨틱 HTML 태그 선택 가능 (예: `as="h1"`, `as="p"`)

**사용 예시:**
```tsx
<Text as="h1" variant="heading1">제목</Text>
<Text as="p" variant="paragraph">본문</Text>
```

### 2. Button 컴포넌트
**설계 의도:**
- 버튼과 링크를 하나의 컴포넌트로 통합
- `as="link"`로 설정하면 Next.js Link로 렌더링되어 클라이언트 사이드 라우팅 지원
- 다양한 variant와 size로 재사용성 확보

**특징:**
- 접근성: `aria-label`, `aria-expanded` 등 ARIA 속성 지원
- 유연성: `button`, `link` 두 가지 형태 지원

### 3. Img 컴포넌트
**설계 의도:**
- 이미지 최적화와 접근성을 고려한 래퍼 컴포넌트
- `alt` 속성 필수화로 접근성 강제
- `as` prop으로 `figure` 또는 `span` 태그 선택 가능

### 4. Section 컴포넌트
**설계 의도:**
- 페이지의 섹션 구조를 일관되게 관리
- `SectionDefault`: 기본 섹션 레이아웃
- `SectionMain`: 메인 페이지의 여러 섹션을 구성
- `variant` prop으로 내부/외부 패딩 조절

### 5. Tab 컴포넌트
**설계 의도:**
- 탭 인터랙션을 위한 재사용 가능한 컴포넌트
- `underline` variant로 밑줄 스타일 지원
- 접근성: 키보드 네비게이션 지원

### 6. CardSlider 컴포넌트
**설계 의도:**
- Swiper를 활용한 카드 슬라이더
---


## 🎨 스타일링 접근 방식

### 1. CSS Modules 사용
**이유:**
- 클래스명 충돌 방지
- 컴포넌트별 스타일 격리
- 번들러가 자동으로 고유한 클래스명 생성

**파일 구조:**
```
Button/
├── Button.tsx
└── Button.module.scss  # 컴포넌트 전용 스타일
```

### 2. SCSS 변수와 믹스인 활용
**abstract 폴더 구조:**
- `_breakpoints.scss`: 반응형 브레이크포인트 정의
- `_colors.scss`: 색상 변수
- `_fonts.scss`: 폰트 정의
- `_mixins.scss`: 재사용 가능한 스타일 믹스인
- `_typography.scss`: 타이포그래피 스타일

### 3. 폰트 로딩 전략
**구현:**
- `@font-face`로 커스텀 폰트 정의
- `font-display: swap`으로 폰트 로딩 중 텍스트 표시
- Next.js와 Storybook 모두에서 `/fonts/` 경로로 접근 가능하도록 설정

---

## ♿ 접근성 고려사항

### 1. 시맨틱 HTML
- `<header>`, `<main>`, `<section>` 등 의미 있는 태그 사용
- 제목 계층 구조(`h1`, `h2`, `h3`) 준수

### 2. ARIA 속성
- `aria-label`: 버튼이나 링크의 목적 명시
- `aria-expanded`: 메뉴나 드롭다운의 열림/닫힘 상태
- `aria-controls`: 제어하는 요소와의 관계

### 3. 키보드 네비게이션
- Tab 컴포넌트에서 키보드로 탭 전환 가능
- 포커스 스타일(`:focus-visible`) 적용

### 4. 스킵 링크
- 메인 콘텐츠로 바로 이동할 수 있는 스킵 링크 제공
- 키보드 사용자의 편의성 향상

---

## 🔍 SEO 최적화

### 1. 메타 태그
```tsx
<Head>
  <title>신테카바이오 - Syntekabio</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <link rel="canonical" href="https://syntekabio.com" />
</Head>
```

### 2. 시맨틱 구조
- 제목 계층 구조 준수
- 의미 있는 HTML 태그 사용

### 3. 이미지 최적화
- `alt` 속성으로 이미지 설명 제공
- 검색 엔진이 이미지 내용 이해 가능

---

## 🚀 주요 기능 구현

### 1. 반응형 디자인
- **브레이크포인트**: PC 1100px, 모바일 430px
- **Zustand 스토어**: 디바이스 크기 전역 관리
- **조건부 렌더링**: 디바이스에 따라 다른 이미지/레이아웃 표시

### 2. 비디오 자동 재생
- **Intersection Observer API**: 비디오가 뷰포트에 보일 때 자동 재생
- **성능 최적화**: 스크롤 시에만 재생하여 초기 로딩 시간 단축

### 3. 헤더 스크롤 효과
- 스크롤 시 헤더 스타일 변경
- `useEffect`와 `scroll` 이벤트 리스너 활용

### 4. 카드 슬라이더
- **Swiper 라이브러리**: 모바일에서 카드 슬라이더로 표시
- **터치 제스처**: 모바일 사용자 경험 향상

---

## 💡 개발 팁 (1년차 개발자를 위한)

### 1. 컴포넌트 설계 원칙
- **단일 책임 원칙**: 하나의 컴포넌트는 하나의 역할만
- **재사용성**: props로 다양한 상황에 대응
- **타입 안정성**: TypeScript로 props 타입 명시

### 2. 스타일링 팁
- **CSS Modules**: 컴포넌트별로 스타일 파일 분리
- **변수 활용**: 색상, 폰트 크기 등을 변수로 관리
- **믹스인**: 반복되는 스타일 패턴을 믹스인으로 추출

### 3. 상태 관리 팁
- **로컬 상태**: `useState`로 충분한 경우 사용
- **전역 상태**: 여러 컴포넌트에서 공유해야 할 때만 Zustand 사용
- **서버 상태**: 필요 시 React Query 등 고려

### 4. 성능 최적화
- **이미지 최적화**: 적절한 크기와 포맷 사용
- **코드 스플리팅**: Next.js가 자동으로 처리
- **불필요한 리렌더링 방지**: `useMemo`, `useCallback` 활용

### 5. 디버깅 팁
- **React DevTools**: 컴포넌트 상태 확인
- **TypeScript**: 타입 에러로 버그 사전 방지
- **Storybook**: 컴포넌트 단위로 테스트

---


## 🤝 기여 가이드

1. 새로운 컴포넌트 추가 시 Storybook 스토리 파일도 함께 작성
2. TypeScript 타입 정의는 `src/types/index.ts`에 추가
3. 스타일은 CSS Modules 사용, 전역 스타일은 `global.scss`에 추가
4. 접근성과 SEO를 고려한 마크업 작성
---
