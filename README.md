# Interior Instant Landing

원가 공개 인테리어 랜딩 페이지 프로토타입입니다.

## Files

- `index.html`: 랜딩 페이지 본문 (원가공개 / 비용절감 / 시공사례 / 진행과정 / 상담신청)
- `portfolio.html`: 시공 사례 상세 페이지 (`?slug=` 쿼리로 항목 렌더링)
- `assets/css/tokens.css`: 두 페이지가 공유하는 디자인 토큰(색상·라운드·타이포)과 topbar/footer/form 공통 스타일
- `assets/css/home.css`: `index.html` 전용 스타일 (히어로, 원가/절감 테이블, 시공사례 카드, 공정)
- `assets/css/portfolio.css`: `portfolio.html` 전용 스타일 (상세 히어로, 견적표, 문의 모달)
- `assets/js/data.js`: 브랜드/회사정보, 원가 견적표, 비용절감 사례, 공정, 추천 카드 데이터
- `assets/js/portfolio-data.js`: 시공 사례 18건 상세 데이터 + 견적 계산 템플릿
- `assets/js/home.js`: `index.html` 렌더링(데이터 → 테이블/카드) 및 상담 폼 처리
- `assets/js/portfolio.js`: `portfolio.html` 렌더링, 견적 계산, 문의 모달 처리
- `vercel.json`: 정적 배포 설정
- `.gitignore`: 로컬 불필요 파일 제외

콘텐츠(문구, 숫자, 시공 사례)를 바꿀 때는 `index.html`/`portfolio.html`을 직접 건드리지 말고 `assets/js/data.js`, `assets/js/portfolio-data.js`만 수정하면 된다. 추후 실제 백엔드/CMS를 연동할 때도 이 두 파일의 구조를 API 응답 스키마로 그대로 옮기면 된다.

## Local Preview

```bash
python3 -m http.server 8300
```

브라우저에서 `http://127.0.0.1:8300`으로 확인할 수 있습니다.

## GitHub Upload

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Vercel Deploy

1. GitHub에 저장소를 올립니다.
2. Vercel에서 `New Project`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Framework Preset은 `Other` 또는 `Static`으로 둡니다.
5. 배포하면 기본 URL이 생성됩니다.

## Custom Domain

나중에 도메인을 바꾸고 싶으면:

1. Vercel 프로젝트의 `Settings`
2. `Domains`
3. 새 도메인 추가
4. DNS 연결

그러면 기존 프로젝트는 그대로 두고 URL만 교체할 수 있습니다.

## Lead Form Note

현재 폼은 데모입니다.
실제 운영 시에는 아래 중 하나로 연결해야 합니다.

- 구글폼
- 이메일 전송 서비스
- 카카오 상담 링크
- CRM / DB 저장 API
