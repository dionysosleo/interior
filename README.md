# Interior Instant Landing

원가 공개 인테리어 랜딩 페이지 프로토타입입니다.

## Files

- `index.html`: 랜딩 페이지 본문
- `vercel.json`: 정적 배포 설정
- `.gitignore`: 로컬 불필요 파일 제외

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
