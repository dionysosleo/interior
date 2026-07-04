/*
  interior instant — 포트폴리오 상세 데이터
  index.html의 시공 사례 카드 → portfolio.html?slug=... 로 연결되며,
  portfolio.js가 이 파일의 PORTFOLIO_DATA를 읽어 상세 페이지를 렌더링한다.
*/

window.PORTFOLIO_DATA = {
  estimateTemplates: {
    residential: {
      rows: [
        ["철거", 0.06, 0.03],
        ["목공", 0.18, 0.19],
        ["전기", 0.11, 0.08],
        ["설비", 0.08, 0.07],
        ["타일", 0.09, 0.1],
        ["금속", 0.04, 0.06],
        ["도장", 0.08, 0.05],
        ["마루", 0.05, 0.09],
        ["장판", 0.03, 0.02],
        ["필름", 0.04, 0.03],
        ["가구", 0.05, 0.11],
        ["유리", 0.03, 0.08],
        ["폐기물", 0.02, 0.04]
      ],
      laborRatio: 0.43,
      materialRatio: 0.48
    },
    commercial: {
      rows: [
        ["철거", 0.07, 0.03],
        ["목공", 0.17, 0.16],
        ["전기", 0.12, 0.08],
        ["설비", 0.07, 0.08],
        ["타일", 0.07, 0.09],
        ["금속", 0.05, 0.08],
        ["페인트", 0.11, 0.06],
        ["마감", 0.06, 0.09],
        ["가구", 0.05, 0.1],
        ["유리", 0.03, 0.08],
        ["사인물", 0.02, 0.05],
        ["폐기물", 0.02, 0.04]
      ],
      laborRatio: 0.4,
      materialRatio: 0.5
    }
  },

  items: {
    "residential-1111": {
      category: "주거공간",
      label: "아파트 거실 리뉴얼",
      title: "밝고 단정한 무드로 정리한 주거 리모델링",
      subtitle: "거실과 주방의 연결감을 살리면서도 일상 동선이 편안하게 이어지도록 정리한 주거 공간 사례입니다.",
      hero: "./assets/images/residential-1111.jpg",
      area: "주거 34평",
      duration: "4주",
      cost: "총 공사비 5,120만원",
      scope: "거실, 주방, 벽체 정리, 조명, 가구 마감",
      estimateKey: "residential",
      description: "기존 공간은 채광이 좋았지만 가구 배치가 무겁고 시선이 분산돼 전체 인상이 답답하게 느껴졌습니다. 이번 프로젝트는 과한 장식 대신 밝은 톤과 정돈된 라인을 중심으로 구성해 생활감은 남기고 공간 밀도는 가볍게 만드는 데 집중했습니다.",
      points: [
        "거실 중심 시야를 방해하던 요소를 줄이고 좌석 배치를 더 여유 있게 조정했습니다.",
        "주방과 거실 사이 재료 톤을 통일해 공간이 자연스럽게 이어지도록 만들었습니다.",
        "은은한 간접 조명으로 저녁 시간에도 차분한 분위기가 유지되도록 설계했습니다."
      ],
      savingsHighlight: {
        trade: "목공",
        amount: 550000,
        note: "실측 후 목공 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-1111.jpg", "./assets/images/residential-2222.png", "./assets/images/residential-3333.png"]
    },
    "residential-2222": {
      category: "주거공간",
      label: "주거 아치 포인트",
      title: "부드러운 곡선과 채광을 살린 주거 공간",
      subtitle: "아치 창과 벽체의 곡선을 강조해 집 전체의 인상을 더 부드럽고 안정적으로 정리한 사례입니다.",
      hero: "./assets/images/residential-2222.png",
      area: "주거 29평",
      duration: "3주",
      cost: "총 공사비 3,780만원",
      scope: "창호 포인트, 마감 정리, 조명, 벽체 개선",
      estimateKey: "residential",
      description: "이 프로젝트는 구조 변경보다 분위기 개선에 초점을 맞춘 리뉴얼입니다. 창 주변 라인을 살리고 불필요한 시각 요소를 덜어내면서 공간이 더 넓고 편안하게 느껴지도록 균형을 맞췄습니다.",
      points: [
        "창을 중심으로 빛이 퍼지는 방향을 고려해 마감 톤을 정리했습니다.",
        "곡선이 강조되는 요소를 반복해 전체 무드가 자연스럽게 통일되도록 했습니다.",
        "큰 공사 없이도 분위기 차이가 느껴질 수 있도록 포인트를 압축했습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        amount: 194000,
        note: "실측 후 타일 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-2222.png", "./assets/images/residential-4444.jpg", "./assets/images/residential-5555.jpg"]
    },
    "residential-3333": {
      category: "주거공간",
      label: "내추럴 우드 홈오피스",
      title: "채광과 작업 동선을 함께 잡은 홈오피스형 주거",
      subtitle: "집 안에서 일과 휴식을 함께 풀어낼 수 있도록 책상, 수납, 창가 영역을 유기적으로 연결한 사례입니다.",
      hero: "./assets/images/residential-3333.png",
      area: "주거 31평",
      duration: "4주",
      cost: "총 공사비 4,180만원",
      scope: "홈오피스, 수납, 바닥, 창가 벤치, 조명",
      estimateKey: "residential",
      description: "거주자의 생활 패턴상 집 안에서 작업하는 시간이 길어, 단순한 책상 배치보다 집중도와 휴식 전환이 모두 가능한 구성을 원했습니다. 자연광과 우드 톤을 중심으로 작업 환경이 과하게 긴장되지 않도록 완급을 조절했습니다.",
      points: [
        "창가 벤치와 책상 라인을 이어 작업과 휴식의 전환이 자연스럽게 되도록 했습니다.",
        "수납 볼륨을 벽면으로 정리해 작업 공간 자체는 더 가볍게 느껴지게 만들었습니다.",
        "밝은 바닥과 천장 톤으로 하루 종일 머물러도 부담 없는 분위기를 만들었습니다."
      ],
      savingsHighlight: {
        trade: "가구",
        amount: 226000,
        note: "실측 후 가구 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-3333.png", "./assets/images/residential-1111.jpg", "./assets/images/residential-6666.jpg"]
    },
    "residential-4444": {
      category: "주거공간",
      label: "미니멀 리빙룸",
      title: "여백을 강조해 더 넓게 느껴지는 미니멀 리빙룸",
      subtitle: "복잡한 요소를 덜고 가구와 마감의 농도를 낮춰 공간 자체의 비례감을 살린 주거 사례입니다.",
      hero: "./assets/images/residential-4444.jpg",
      area: "주거 26평",
      duration: "3주",
      cost: "총 공사비 3,140만원",
      scope: "거실 마감, 수납장, 조명, 가구 배치",
      estimateKey: "residential",
      description: "소형 평형일수록 공간을 채우는 방식보다 비우는 방식이 더 크게 느껴질 때가 있습니다. 이번 프로젝트는 짧은 공사 기간 안에서 가장 체감이 큰 영역에만 집중해 단순한 구조를 더 고급스럽게 정리했습니다.",
      points: [
        "중심 가구를 낮추고 벽면 수납을 정리해 시선이 멀리 뻗도록 했습니다.",
        "간접 조명과 따뜻한 베이지 톤으로 미니멀하지만 차갑지 않은 무드를 만들었습니다.",
        "생활 물건이 드러나는 구간을 줄여 정리된 인상이 오래 유지되도록 했습니다."
      ],
      savingsHighlight: {
        trade: "마루",
        amount: 139000,
        note: "실측 후 마루 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-4444.jpg", "./assets/images/residential-5555.jpg", "./assets/images/residential-8888.jpeg"]
    },
    "residential-5555": {
      category: "주거공간",
      label: "하이엔드 욕실 리뉴얼",
      title: "조용하고 깊은 톤으로 완성한 프리미엄 욕실",
      subtitle: "채광이 적은 욕실에서도 답답하지 않게 느껴지도록 톤과 라인을 단정하게 정리한 사례입니다.",
      hero: "./assets/images/residential-5555.jpg",
      area: "욕실 2개 + 파우더룸",
      duration: "3주",
      cost: "총 공사비 3,180만원",
      scope: "메인욕실, 파우더룸, 세탁실, 수전, 조명, 벽체, 바닥",
      estimateKey: "residential",
      description: "욕실은 자재 선택에 따라 체감 인상이 크게 달라지는 공간입니다. 밝은 톤 일변도로 가지 않고, 질감이 느껴지는 중성 톤을 활용해 안정감과 고급스러움을 함께 살렸습니다.",
      points: [
        "벽과 바닥 재료의 결을 맞춰 욕실이 하나의 공간처럼 보이도록 정리했습니다.",
        "조명 위치를 낮추고 부드럽게 분산해 과하게 번들거리지 않는 분위기를 만들었습니다.",
        "수납장을 벽체에 녹여 생활감이 튀지 않도록 구성했습니다."
      ],
      savingsHighlight: {
        trade: "전기",
        amount: 149000,
        note: "실측 후 전기 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-5555.jpg", "./assets/images/residential-4444.jpg", "./assets/images/residential-7777.jpg"]
    },
    "residential-6666": {
      category: "주거공간",
      label: "복층형 주거 다이닝",
      title: "개방감과 가족 동선을 함께 살린 복층형 주거",
      subtitle: "층고가 주는 장점을 강조하면서 식사, 휴식, 이동 동선이 서로 방해되지 않도록 정리한 사례입니다.",
      hero: "./assets/images/residential-6666.jpg",
      area: "주거 41평",
      duration: "5주",
      cost: "총 공사비 5,940만원",
      scope: "다이닝, 계단부, 가구 마감, 조명, 창호 정리",
      estimateKey: "residential",
      description: "층고가 높은 구조는 시원한 장점이 있지만 자칫 텅 빈 느낌이 날 수 있습니다. 이 프로젝트는 펜던트 조명과 가구 스케일을 활용해 시선을 적절히 묶어주고, 가족이 함께 쓰는 공간의 중심성을 더 강하게 만들었습니다.",
      points: [
        "계단과 다이닝 사이 시선 흐름을 정리해 중심 공간이 자연스럽게 드러나도록 했습니다.",
        "가구 스케일을 키워 층고가 높은 구조에서도 균형이 흐트러지지 않게 잡았습니다.",
        "주방과 거실 사이 연결감을 유지하면서 영역 구분은 명확하게 설계했습니다."
      ],
      savingsHighlight: {
        trade: "도장",
        amount: 268000,
        note: "실측 후 도장 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-6666.jpg", "./assets/images/residential-7777.jpg", "./assets/images/residential-8888.jpeg"]
    },
    "residential-7777": {
      category: "주거공간",
      label: "북쉘프 리빙룸",
      title: "가족의 생활감이 자연스럽게 드러나는 북쉘프 리빙룸",
      subtitle: "아이와 함께 쓰는 생활 공간이면서도 전체 인상은 정돈돼 보이도록 수납과 배치를 풀어낸 사례입니다.",
      hero: "./assets/images/residential-7777.jpg",
      area: "주거 38평",
      duration: "4주",
      cost: "총 공사비 5,120만원",
      scope: "거실, 수납 선반, 계단, 바닥, 가구 재배치",
      estimateKey: "residential",
      description: "생활 가구와 책, 소품이 많은 집일수록 수납 구조와 여백 설계가 중요합니다. 이번 프로젝트는 가족의 물건을 숨기기보다 보기 좋게 정리하는 쪽으로 방향을 잡아 실용성과 분위기를 함께 맞췄습니다.",
      points: [
        "선반과 계단부를 연계해 시선이 끊기지 않도록 구성했습니다.",
        "소품과 도서가 자연스럽게 보이도록 수납 깊이와 간격을 조절했습니다.",
        "따뜻한 목재 톤으로 생활감이 많은 공간도 편안하게 느껴지도록 했습니다."
      ],
      savingsHighlight: {
        trade: "필름",
        amount: 106000,
        note: "실측 후 필름 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-7777.jpg", "./assets/images/residential-6666.jpg", "./assets/images/residential-8888.jpeg"]
    },
    "residential-8888": {
      category: "주거공간",
      label: "파노라마 워크라운지",
      title: "시야가 열리는 창을 중심으로 만든 워크라운지",
      subtitle: "작업과 휴식이 자연스럽게 이어지는 공간을 위해 창 앞 테이블과 주변 수납을 함께 설계한 사례입니다.",
      hero: "./assets/images/residential-8888.jpeg",
      area: "주거 33평",
      duration: "4주",
      cost: "총 공사비 4,280만원",
      scope: "서재, 라운지, 창가 테이블, 수납, 바닥",
      estimateKey: "residential",
      description: "하루 중 가장 오래 머무는 자리의 시선과 빛을 잘 잡는 것이 핵심이었습니다. 넓은 창과 테이블 배치를 중심으로 집중과 대화가 모두 가능한 공간으로 재구성했습니다.",
      points: [
        "메인 테이블을 창과 평행하게 두어 풍경과 작업이 자연스럽게 이어지게 했습니다.",
        "불필요한 파티션 없이 가구만으로 기능 구분을 만들어 개방감을 유지했습니다.",
        "따뜻한 바닥 톤과 천장 마감으로 긴장감보다 안정감이 느껴지도록 조절했습니다."
      ],
      savingsHighlight: {
        trade: "설비",
        amount: 238000,
        note: "실측 후 설비 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-8888.jpeg", "./assets/images/residential-9999.jpg", "./assets/images/residential-4444.jpg"]
    },
    "residential-9999": {
      category: "주거공간",
      label: "아트월 포인트 홀",
      title: "조명과 동선이 살아나는 아트월 포인트 주거 공간",
      subtitle: "입구에서 거실로 이어지는 첫 인상을 강하게 만들면서도 전체 동선은 가볍게 유지한 주거 사례입니다.",
      hero: "./assets/images/residential-9999.jpg",
      area: "주거 45평",
      duration: "5주",
      cost: "총 공사비 6,520만원",
      scope: "현관, 거실, 아트월, 조명, 계단부 정리",
      estimateKey: "residential",
      description: "천장고와 조명 포인트가 살아 있는 공간이라면 강약 조절이 중요합니다. 이 프로젝트는 과한 장식 대신 한두 개의 시선 포인트를 중심으로 공간의 인상을 정리하고, 입구에서부터 고급스러운 흐름이 느껴지도록 계획했습니다.",
      points: [
        "아트월과 조명 위치를 정교하게 맞춰 첫 인상이 분명하게 느껴지게 했습니다.",
        "동선이 복잡해 보이지 않도록 벽체와 가구 볼륨을 줄였습니다.",
        "거실과 다이닝으로 이어지는 흐름에 고급스러운 긴장감을 더했습니다."
      ],
      savingsHighlight: {
        trade: "유리",
        amount: 207000,
        note: "실측 후 유리 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/residential-9999.jpg", "./assets/images/residential-8888.jpeg", "./assets/images/residential-4444.jpg"]
    },
    "commercial-11": {
      category: "상업공간",
      label: "브랜드 카페 메인홀",
      title: "브랜드 동선을 넓게 풀어낸 카페 메인홀 프로젝트",
      subtitle: "첫 방문 고객에게 공간의 구조와 브랜드 무드가 한눈에 들어오도록 테이블 배치와 조명을 정리한 사례입니다.",
      hero: "./assets/images/commercial-11.jpg",
      area: "상업 28평",
      duration: "3주",
      cost: "총 공사비 4,760만원",
      scope: "메인홀, 좌석 배치, 조명, 바닥, 가구",
      estimateKey: "commercial",
      description: "브랜드를 처음 접하는 손님이 머무는 첫 공간이기 때문에, 좌석 배치와 주방 노출 정도, 이동 동선이 모두 중요했습니다. 과하게 복잡한 구성 대신 브랜드 정체성이 분명하게 드러나는 메인홀 구조에 집중했습니다.",
      points: [
        "메인 좌석 동선을 길게 열어 고객 체류가 자연스럽게 이어지게 했습니다.",
        "주방과 홀의 시각적 경계를 조절해 답답하지 않게 구성했습니다.",
        "조명 위치와 테이블 간격을 브랜드 무드에 맞게 세밀하게 조정했습니다."
      ],
      savingsHighlight: {
        trade: "목공",
        amount: 449000,
        note: "실측 후 목공 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-11.jpg", "./assets/images/commercial-22.jpeg", "./assets/images/commercial-33.jpg"]
    },
    "commercial-22": {
      category: "상업공간",
      label: "라운지형 상담존",
      title: "머무름이 편안한 라운지형 상담 공간",
      subtitle: "상담과 대기가 함께 일어나는 구조에서 긴장감보다 편안함이 먼저 느껴지도록 만든 상업 공간 사례입니다.",
      hero: "./assets/images/commercial-22.jpeg",
      area: "상업 18평",
      duration: "2주",
      cost: "총 공사비 3,240만원",
      scope: "상담존, 대기존, 벽체 포인트, 조명, 가구",
      estimateKey: "commercial",
      description: "짧게 머무는 공간이지만 브랜드 인상을 결정하는 중요한 구간이라, 소재와 동선 설계에 더 집중했습니다. 벽체와 좌석의 곡선을 활용해 편안한 체류감을 만들고, 시선이 머무는 요소는 최소화했습니다.",
      points: [
        "대기와 상담 공간을 자연스럽게 나누면서도 답답한 분리는 피했습니다.",
        "가구 크기와 배치를 조정해 시선이 한쪽에 몰리지 않도록 정리했습니다.",
        "체류 시간이 짧아도 인상은 오래 남는 라운지 무드를 목표로 했습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        amount: 140000,
        note: "실측 후 타일 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-22.jpeg", "./assets/images/commercial-11.jpg", "./assets/images/commercial-55.webp"]
    },
    "commercial-33": {
      category: "상업공간",
      label: "오피스 워크존",
      title: "집중과 개방감을 함께 살린 오피스 워크존",
      subtitle: "팀 단위 업무에 필요한 개방감과 개인 집중도를 균형 있게 맞춘 사무 공간 사례입니다.",
      hero: "./assets/images/commercial-33.jpg",
      area: "상업 40평",
      duration: "4주",
      cost: "총 공사비 6,400만원",
      scope: "워크존, 유리 파티션, 조명, 천장 마감, 동선",
      estimateKey: "commercial",
      description: "공간이 넓을수록 오히려 집중 포인트가 분산되기 쉽습니다. 이번 프로젝트는 파티션 투명도와 책상 배열, 천장 라인을 이용해 시야를 확보하면서도 업무 존의 밀도를 유지하는 데 집중했습니다.",
      points: [
        "시선은 열리지만 소음은 분산될 수 있도록 배치를 조정했습니다.",
        "워크존 중심으로 반복되는 라인을 만들어 정돈된 인상을 강화했습니다.",
        "브랜드의 단정함이 드러나도록 전체 톤을 절제된 색으로 맞췄습니다."
      ],
      savingsHighlight: {
        trade: "가구",
        amount: 326000,
        note: "실측 후 가구 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-33.jpg", "./assets/images/commercial-88.jpg", "./assets/images/commercial-77.webp"]
    },
    "commercial-44": {
      category: "상업공간",
      label: "브랜드 쇼룸 아치 공간",
      title: "첫 시선에 브랜드 무드를 남기는 아치형 쇼룸",
      subtitle: "진입부에서부터 공간 이미지가 분명하게 느껴지도록 창과 벽체의 인상을 활용한 사례입니다.",
      hero: "./assets/images/commercial-44.webp",
      area: "상업 16평",
      duration: "2주",
      cost: "총 공사비 3,520만원",
      scope: "쇼룸 전면부, 포인트 창호, 벽체, 조명",
      estimateKey: "commercial",
      description: "작은 면적의 공간일수록 강한 첫 장면이 필요합니다. 아치형 요소와 채광을 적극 활용해 첫 진입 순간에 브랜드 이미지가 정확히 전달되도록 설계했습니다.",
      points: [
        "쇼룸 정면에서 보이는 구조를 가장 먼저 고려해 레이아웃을 잡았습니다.",
        "장식보다 실루엣과 빛의 인상이 남도록 마감과 조명을 절제했습니다.",
        "짧은 공사 기간 안에서 체감 변화를 크게 만드는 쪽으로 공정을 압축했습니다."
      ],
      savingsHighlight: {
        trade: "전기",
        amount: 211000,
        note: "실측 후 전기 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-44.webp", "./assets/images/commercial-99.webp", "./assets/images/commercial-22.jpeg"]
    },
    "commercial-55": {
      category: "상업공간",
      label: "한식 다이닝 공간",
      title: "동선과 시야가 깔끔한 다이닝 공간 리뉴얼",
      subtitle: "좌석 간 밀도와 이동 동선을 함께 고려해 운영 효율과 첫 인상을 동시에 잡은 외식 공간 사례입니다.",
      hero: "./assets/images/commercial-55.webp",
      area: "상업 24평",
      duration: "3주",
      cost: "총 공사비 4,200만원",
      scope: "좌석 구성, 파티션, 조명, 마감, 진입 동선",
      estimateKey: "commercial",
      description: "외식 공간은 예쁜 장면보다 동선의 자연스러움이 훨씬 중요할 때가 많습니다. 이 프로젝트는 주방 접근성과 좌석 운영 효율을 유지하면서, 브랜드가 원하는 차분한 인상이 전달되도록 조율했습니다.",
      points: [
        "좌석 간 간격을 정리해 이동 중 부딪힘이 적게 느껴지도록 만들었습니다.",
        "진입부부터 안쪽까지 시선 흐름이 깨지지 않도록 파티션 높이를 조정했습니다.",
        "밝은 톤 마감으로 체감 면적이 더 넓게 느껴지도록 설계했습니다."
      ],
      savingsHighlight: {
        trade: "마감",
        amount: 158000,
        note: "실측 후 마감 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-55.webp", "./assets/images/commercial-11.jpg", "./assets/images/commercial-66.jpeg"]
    },
    "commercial-66": {
      category: "상업공간",
      label: "하이엔드 로비",
      title: "첫 인상과 체류감이 동시에 살아나는 하이엔드 로비",
      subtitle: "입구에서 느껴지는 고급감과 안쪽으로 이어지는 머무름의 분위기를 함께 설계한 공간입니다.",
      hero: "./assets/images/commercial-66.jpeg",
      area: "상업 52평",
      duration: "5주",
      cost: "총 공사비 9,360만원",
      scope: "로비, 라운지, 천장 조명, 벽체, 바닥",
      estimateKey: "commercial",
      description: "로비는 방문객이 브랜드를 처음 마주하는 공간이라 마감 밀도와 조명 계획이 특히 중요했습니다. 큰 볼륨의 조명과 자연스러운 동선 계획으로 첫인상과 체류감을 함께 설계했습니다.",
      points: [
        "입구에서부터 시선이 자연스럽게 안쪽으로 이어지도록 동선을 계획했습니다.",
        "조명 레이어를 나눠 시간대에 따라 분위기가 다르게 연출되도록 했습니다.",
        "마감재의 질감 대비를 활용해 고급스러운 인상을 오래 유지하도록 했습니다."
      ],
      savingsHighlight: {
        trade: "페인트",
        amount: 536000,
        note: "실측 후 페인트 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-66.jpeg", "./assets/images/commercial-77.webp", "./assets/images/commercial-88.jpg"]
    },
    "commercial-77": {
      category: "상업공간",
      label: "프라이빗 미팅 라운지",
      title: "어두운 톤과 포인트 조명이 만드는 프라이빗 미팅 공간",
      subtitle: "격식 있는 미팅이 자연스럽게 이어지도록 톤과 조도, 좌석 배치를 함께 설계한 사례입니다.",
      hero: "./assets/images/commercial-77.webp",
      area: "상업 22평",
      duration: "3주",
      cost: "총 공사비 4,180만원",
      scope: "미팅룸, 라운지, 조명, 벽체, 가구",
      estimateKey: "commercial",
      description: "격식과 편안함을 동시에 담아야 하는 공간이라 톤 선택이 까다로웠습니다. 어두운 베이스 톤에 조명 포인트를 더해 대화에 집중할 수 있는 분위기를 만들었습니다.",
      points: [
        "테이블 위 조도만 살려 자연스럽게 시선이 모이도록 설계했습니다.",
        "좌석 간격을 넉넉하게 잡아 격식 있는 미팅에도 부담이 없도록 했습니다.",
        "짙은 톤과 따뜻한 소재를 함께 써 차갑지 않은 분위기를 유지했습니다."
      ],
      savingsHighlight: {
        trade: "유리",
        amount: 142000,
        note: "실측 후 유리 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-77.webp", "./assets/images/commercial-33.jpg", "./assets/images/commercial-66.jpeg"]
    },
    "commercial-88": {
      category: "상업공간",
      label: "사내 카페테리아 공간",
      title: "라운지와 미팅 기능을 함께 담은 오피스 카페테리아",
      subtitle: "직원 휴게와 캐주얼 미팅이 한 공간에서 자연스럽게 오갈 수 있도록 구성한 사례입니다.",
      hero: "./assets/images/commercial-88.jpg",
      area: "상업 35평",
      duration: "4주",
      cost: "총 공사비 5,780만원",
      scope: "카페테리아, 좌석 구성, 조명, 주방 존, 가구",
      estimateKey: "commercial",
      description: "휴게 공간이면서 동시에 캐주얼한 미팅 장소로도 쓰이는 공간이라 좌석 구성의 유연함이 중요했습니다. 크고 작은 테이블을 섞어 다양한 인원과 목적에 대응할 수 있도록 계획했습니다.",
      points: [
        "테이블 크기를 다양화해 혼자 쓰는 자리와 팀 미팅 자리를 함께 담았습니다.",
        "주방 존과 좌석 존의 동선이 겹치지 않도록 배치를 정리했습니다.",
        "밝고 편안한 톤으로 짧은 휴식 시간에도 리프레시되는 분위기를 만들었습니다."
      ],
      savingsHighlight: {
        trade: "설비",
        amount: 322000,
        note: "실측 후 설비 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-88.jpg", "./assets/images/commercial-33.jpg", "./assets/images/commercial-77.webp"]
    },
    "commercial-99": {
      category: "상업공간",
      label: "브랜드 라운지 리뉴얼",
      title: "체류 경험을 높이는 브랜드 라운지 리뉴얼",
      subtitle: "공간 안에서 머무는 시간이 자연스럽게 늘어나도록 시선과 좌석 구성, 정원 뷰를 함께 설계한 사례입니다.",
      hero: "./assets/images/commercial-99.webp",
      area: "상업 30평",
      duration: "3주",
      cost: "총 공사비 5,250만원",
      scope: "라운지, 창가 좌석, 조경 뷰, 조명, 가구",
      estimateKey: "commercial",
      description: "정적인 좌석 배치만으로는 라운지 경험이 살아나지 않을 수 있습니다. 이 프로젝트는 창 너머 보이는 풍경과 실내 좌석의 거리를 조절해 공간에 머무는 경험 자체가 더 편안하게 느껴지도록 만들었습니다.",
      points: [
        "창가와 좌석 사이 간격을 조정해 정원 뷰가 더 깊게 느껴지게 만들었습니다.",
        "가구 배치와 시선 방향을 정리해 누구나 편하게 머물 수 있도록 구성했습니다.",
        "조용한 분위기를 해치지 않으면서도 브랜드 이미지는 분명하게 보이도록 정리했습니다."
      ],
      savingsHighlight: {
        trade: "사인물",
        amount: 107000,
        note: "실측 후 사인물 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-99.webp", "./assets/images/commercial-44.webp", "./assets/images/commercial-22.jpeg"]
    }
  }
};
