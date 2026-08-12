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
        ["샤시(금속,유리)", 0.07, 0.14],
        ["도장", 0.08, 0.05],
        ["마루", 0.05, 0.09],
        ["장판", 0.03, 0.02],
        ["도배", 0.03, 0.02],
        ["필름", 0.04, 0.03],
        ["가구", 0.05, 0.11],
        ["행위허가", 0.01, 0],
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
        ["샤시(금속,유리)", 0.08, 0.16],
        ["페인트", 0.11, 0.06],
        ["마감", 0.06, 0.09],
        ["가구", 0.05, 0.1],
        ["도배", 0.02, 0.02],
        ["사인물", 0.02, 0.05],
        ["행위허가", 0.01, 0],
        ["폐기물", 0.02, 0.04]
      ],
      laborRatio: 0.4,
      materialRatio: 0.5
    }
  },

  items: {
    "residential-5555": {
      category: "주거공간",
      label: "북월 아치도어 리빙룸",
      title: "붙박이 책장 벽과 아치 도어로 완성한 삼성동 우정에쉐르 리모델링",
      subtitle: "거실 전면을 붙박이 책장으로 채우고 안쪽 방 입구에 아치형 도어를 더해 감도 높은 인상을 만든 삼성동 우정에쉐르 리모델링 사례입니다.",
      hero: "./assets/images/residential-samsung-woojeong-01.jpeg",
      area: "주거 33평",
      duration: "6주",
      cost: "총 공사비 10,628만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 욕실, 가구, 샤시, 도장, 마루",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 삼성동 우정에쉐르 리모델링 사례입니다. 거실 한쪽 벽면 전체를 화이트 붙박이 책장으로 채우고, 안쪽 방으로 이어지는 입구에는 아치형 도어를 더해 공간에 리듬감을 주었습니다.",
      points: [
        "거실 벽면 전체를 화이트 붙박이 책장으로 채워 수납과 디스플레이를 함께 해결했습니다.",
        "안쪽 방 입구에 아치형 도어를 적용해 동선의 흐름에 부드러운 포인트를 더했습니다.",
        "욕실은 곡선 세면대와 격자 패턴 유리 파티션으로 마감해 호텔 욕실 같은 분위기를 살렸습니다."
      ],
      savingsHighlight: {
        trade: "전기",
        rate: 0.085,
        amount: 9873000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1551115 },
          { name: "철거·설비", amount: 6932687 },
          { name: "목공", amount: 9361267 },
          { name: "전기", amount: 4398057 },
          { name: "도배", amount: 3488494 },
          { name: "타일", amount: 5930093 },
          { name: "욕실", amount: 4898494 },
          { name: "가구", amount: 39714031 },
          { name: "샤시(금속,유리)", amount: 12432925 },
          { name: "도장", amount: 766448 },
          { name: "마루", amount: 4457705 },
          { name: "기타", amount: 2777640 }
        ]
      },
      gallery: ["./assets/images/residential-samsung-woojeong-02.jpeg", "./assets/images/residential-samsung-woojeong-03.jpeg", "./assets/images/residential-samsung-woojeong-04.jpeg"]
    },
    "residential-6666": {
      category: "주거공간",
      label: "그리드글라스 엔트런스",
      title: "그리드 글라스 파티션으로 완성한 삼성동 롯데캐슬프레미어 리모델링",
      subtitle: "현관 진입부에 격자 패턴 글라스 파티션과 스톤 톤 마감을 더해 첫인상을 분명하게 잡은 삼성동 롯데캐슬프레미어 리모델링 사례입니다.",
      hero: "./assets/images/residential-lottecastle-01.jpeg",
      area: "주거 45평",
      duration: "6주",
      cost: "총 공사비 7,215만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 도기, 도장, 마루, 샤시",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 삼성동 롯데캐슬프레미어 리모델링 사례입니다. 현관 진입부에 격자 패턴 글라스 파티션과 짙은 스톤 톤 마감을 더해 첫인상을 분명하게 잡고, 거실은 이중 매입 조명과 사이드 간접등으로 층위감을 살렸습니다.",
      points: [
        "현관 진입부에 격자 패턴 글라스 파티션을 세워 첫 시선을 분명하게 잡았습니다.",
        "거실 천장에 사각 매입 조명 세트를 더해 층고가 높은 공간에도 안정감을 주었습니다.",
        "주방·다이닝 공간에는 클러스터형 펜던트 조명을 더해 포인트를 살렸습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        rate: 0.09,
        amount: 7136000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2916080 },
          { name: "철거·설비", amount: 8891069 },
          { name: "목공", amount: 8045820 },
          { name: "전기", amount: 3605553 },
          { name: "도배", amount: 3227807 },
          { name: "타일", amount: 9350207 },
          { name: "도기", amount: 3938897 },
          { name: "도장", amount: 1116935 },
          { name: "마루", amount: 5562339 },
          { name: "샤시(금속,유리)", amount: 12554063 },
          { name: "기타", amount: 6443581 }
        ]
      },
      gallery: ["./assets/images/residential-lottecastle-02.jpeg", "./assets/images/residential-lottecastle-03.jpeg", "./assets/images/residential-lottecastle-04.jpeg"]
    },
    "residential-1111": {
      category: "주거공간",
      label: "마블 포인트 리빙룸",
      title: "마블 포인트 벽과 간접조명으로 완성한 미아동 두산위브 리모델링",
      subtitle: "거실 한쪽 벽면을 대형 마블 타일로 마감하고 걸레받이 라인에 간접조명을 둘러 넓고 차분한 인상을 만든 미아동 두산위브 리모델링 사례입니다.",
      hero: "./assets/images/residential-mia-doosan-01.jpeg",
      area: "주거 34평",
      duration: "5주",
      cost: "총 공사비 9,990만원",
      scope: "전체 철거, 목공, 전기, 도배, 타일, 도기, 도장, 마루, 샤시, 주방·붙박이 가구",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 미아동 두산위브 리모델링 사례입니다. 거실 한쪽 벽면 전체를 대형 마블 포세린 타일로 마감하고, 걸레받이 라인을 따라 간접조명을 둘러 바닥에서부터 은은한 빛이 퍼지도록 설계했습니다.",
      points: [
        "거실 벽면을 대형 마블 타일 한 장으로 이어 붙여 이음새 없이 넓어 보이도록 정리했습니다.",
        "걸레받이 라인에 간접조명을 매립해 저녁 시간에도 바닥부터 은은하게 밝아지도록 했습니다.",
        "발코니 확장 창호를 전체 교체해 채광과 단열을 함께 개선했습니다."
      ],
      savingsHighlight: {
        trade: "도기",
        rate: 0.07,
        amount: 7519000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2806198 },
          { name: "철거·설비", amount: 9736903 },
          { name: "목공", amount: 12759730 },
          { name: "전기", amount: 3810906 },
          { name: "도배", amount: 3300764 },
          { name: "타일", amount: 7642865 },
          { name: "도기", amount: 5050147 },
          { name: "도장", amount: 782926 },
          { name: "마루", amount: 6893678 },
          { name: "샤시(금속,유리)", amount: 9900337 },
          { name: "기타", amount: 28214331 }
        ]
      },
      gallery: ["./assets/images/residential-mia-doosan-02.jpeg", "./assets/images/residential-mia-doosan-03.jpeg", "./assets/images/residential-mia-doosan-04.jpeg"]
    },
    "residential-2222": {
      category: "주거공간",
      label: "PH펜던트 화이트키친",
      title: "PH 펜던트 조명과 대리석 마감으로 완성한 백현마을 리모델링",
      subtitle: "기하학적 패턴 창과 대리석 포인트 벽, PH 펜던트 조명으로 감도 높은 인상을 더한 백현마을 휴먼시아 이편한세상 909동 리모델링 사례입니다.",
      hero: "./assets/images/residential-baekhyun-01.jpeg",
      area: "주거 29평",
      duration: "4주",
      cost: "총 공사비 5,574만원",
      scope: "전체 철거, 목공, 전기, 도배, 타일, 도기, 도장, 마루, 주방·붙박이 가구",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 백현마을 휴먼시아 이편한세상 리모델링 사례입니다. 주방 상부에는 PH 펜던트 조명 3구를 나란히 매달아 포인트를 주고, 거실 한쪽에는 대리석 톤 마감과 격자 패턴 창을 더해 감도 높은 인상을 완성했습니다.",
      points: [
        "주방 아일랜드 위에 PH 펜던트 조명 3구를 나란히 배치해 공간의 포인트를 분명하게 잡았습니다.",
        "거실 한쪽 벽면을 대리석 톤과 격자 패턴 창으로 마감해 입체감을 더했습니다.",
        "복도에는 세로 루버 마감과 벽부등을 더해 통로 구간도 밋밋하지 않도록 정리했습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        rate: 0.075,
        amount: 4520000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2115938 },
          { name: "철거·설비", amount: 5384016 },
          { name: "목공", amount: 9712688 },
          { name: "전기", amount: 5242907 },
          { name: "도배", amount: 4190406 },
          { name: "타일", amount: 6804127 },
          { name: "도기", amount: 6732913 },
          { name: "도장", amount: 756518 },
          { name: "마루", amount: 6115191 },
          { name: "가구", amount: 0 },
          { name: "기타", amount: 3666820 }
        ]
      },
      gallery: ["./assets/images/residential-baekhyun-02.jpeg", "./assets/images/residential-baekhyun-03.jpeg", "./assets/images/residential-baekhyun-04.jpeg"]
    },
    "residential-3333": {
      category: "주거공간",
      label: "컬러PH펜던트 다이닝",
      title: "멀티컬러 PH펜던트로 포인트를 준 성남 하대원아튼빌 리모델링",
      subtitle: "다이닝 공간에 컬러가 다른 PH 펜던트 조명 세 개를 나란히 달아 화이트 톤 공간에 포인트를 준 성남 하대원아튼빌 1012동1103호 전체 리모델링 사례입니다.",
      hero: "./assets/images/residential-hadaewon-01.jpeg",
      area: "주거 36평",
      duration: "4주",
      cost: "총 공사비 4,744만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 도기, 도장, 마루, 샤시, 기타",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 성남 하대원아튼빌 1012동1103호 전체 리모델링 사례입니다. 다이닝 공간에는 컬러가 다른 PH 펜던트 조명을 나란히 달아 화이트 톤 거실·주방에 포인트를 주고, 침실은 붙박이장과 화장대를 하나로 이어 수납과 동선을 함께 정리했습니다.",
      points: [
        "다이닝 테이블과 아일랜드 위에 컬러가 다른 PH 펜던트 조명 세 개를 나란히 달아 화이트 톤 공간에 포인트를 만들었습니다.",
        "침실은 붙박이장과 화장대를 하나의 라인으로 이어 붙여 수납과 동선을 함께 해결했습니다.",
        "거실 통창에는 시어커튼과 암막커튼을 이중으로 달아 채광과 프라이버시를 모두 챙겼습니다."
      ],
      savingsHighlight: {
        trade: "샤시",
        rate: 0.08,
        amount: 4125000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1884706 },
          { name: "철거·설비", amount: 4824666 },
          { name: "목공", amount: 6652165 },
          { name: "전기", amount: 3375590 },
          { name: "도배", amount: 2498497 },
          { name: "타일", amount: 1848078 },
          { name: "도기", amount: 56543 },
          { name: "도장", amount: 901015 },
          { name: "마루", amount: 4348649 },
          { name: "샤시", amount: 7960796 },
          { name: "기타", amount: 8815762 }
        ]
      },
      gallery: ["./assets/images/residential-hadaewon-02.jpeg", "./assets/images/residential-hadaewon-03.jpeg", "./assets/images/residential-hadaewon-04.jpeg"]
    },
    "residential-1212": {
      category: "주거공간",
      label: "마블월 블랙프레임도어",
      title: "마블 톤 월과 블랙 프레임 중문으로 포인트를 준 잠실리센츠224동 리모델링",
      subtitle: "현관에서 이어지는 벽면을 대리석 톤 포세린 타일로 감싸고 블랙 스틸 프레임 중문을 매치해 입구부터 인상을 분명하게 잡은 잠실리센츠 224동801호 리모델링 사례입니다.",
      hero: "./assets/images/residential-jamsil-01.jpeg",
      area: "주거 33평",
      duration: "4주",
      cost: "총 공사비 3,552만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 필름, 바닥, 기타",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 잠실리센츠 224동801호 리모델링 사례입니다. 최초 검토 견적은 3,991만원 수준이었으나 중복 반영된 항목과 시공 범위를 다시 정리해 최종 3,552만원으로 조정했습니다. 현관 벽면은 대리석 톤 포세린 타일로 통일하고 블랙 스틸 프레임 중문을 매치해 입구에서부터 분명한 인상을 남기도록 설계했습니다.",
      points: [
        "현관 벽면을 대리석 톤 포세린 타일로 통일하고 블랙 스틸 프레임 중문을 매치해 입구에서부터 포인트를 만들었습니다.",
        "욕실은 헤링본 패턴 우드톤 타일과 골드 라인 조명으로 호텔 욕실 같은 분위기를 냈습니다.",
        "주방은 그레이 톤 셰이커 도어와 원목 라이브에지 테이블을 매치해 차분하면서도 자연스러운 다이닝 공간을 만들었습니다."
      ],
      savingsHighlight: {
        trade: "필름",
        rate: 0.11,
        amount: 4390000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1453242 },
          { name: "철거·설비", amount: 4297806 },
          { name: "목공", amount: 5310134 },
          { name: "전기", amount: 3006701 },
          { name: "도배", amount: 2726670 },
          { name: "타일", amount: 3902292 },
          { name: "필름", amount: 4156725 },
          { name: "바닥", amount: 4484786 },
          { name: "기타", amount: 2982534 }
        ]
      },
      gallery: ["./assets/images/residential-jamsil-02.jpeg", "./assets/images/residential-jamsil-03.jpeg", "./assets/images/residential-jamsil-04.jpeg"]
    },
    "residential-7777": {
      category: "주거공간",
      label: "스틱펜던트 화이트키친",
      title: "스틱형 펜던트 조명으로 포인트를 준 신당동 약수하이츠 전체 리모델링",
      subtitle: "주방 아일랜드 위 스틱형 펜던트 조명과 다크 프레임 냉장고장으로 포인트를 주고, 나머지 공간은 화이트·우드 톤으로 정리한 신당동 약수하이츠 106동 1303호 전체 리모델링 사례입니다.",
      hero: "./assets/images/residential-sindang-01.jpeg",
      area: "주거 43평",
      duration: "5주",
      cost: "총 공사비 8,324만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 욕실, 가구, 샤시, 도장, 마루, 기타",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 신당동 약수하이츠 106동 1303호 전체 리모델링 사례입니다. 주방은 화이트 상하부장에 다크 프레임 냉장고장을 더해 포인트를 주고, 나머지 공간은 화이트·우드 톤으로 통일해 전체적으로 밝고 정돈된 인상이 이어지도록 설계했습니다.",
      points: [
        "주방 아일랜드 상부에 스틱형 펜던트 조명을 달아 다크 프레임 냉장고장과 어우러지는 포인트를 만들었습니다.",
        "계단실 하부 자투리 공간을 코너형 오픈 선반으로 짜 넣어 수납을 극대화했습니다.",
        "현관에는 격자 프레임 글라스 중문을 적용해 신발장과 실내가 자연스럽게 분리되도록 정리했습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        rate: 0.095,
        amount: 8738000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1678161 },
          { name: "철거·설비", amount: 5826249 },
          { name: "목공", amount: 8044766 },
          { name: "전기", amount: 4498034 },
          { name: "도배", amount: 3405687 },
          { name: "타일", amount: 5221538 },
          { name: "욕실", amount: 4164597 },
          { name: "가구", amount: 23705551 },
          { name: "샤시", amount: 12420249 },
          { name: "도장", amount: 745280 },
          { name: "마루", amount: 4460204 },
          { name: "기타", amount: 1568567 }
        ]
      },
      gallery: ["./assets/images/residential-sindang-02.jpeg", "./assets/images/residential-sindang-03.jpeg", "./assets/images/residential-sindang-04.jpeg"]
    },
    "residential-8888": {
      category: "주거공간",
      label: "우드슬랫 히든도어",
      title: "우드 슬랫 마감으로 중문을 숨긴 응봉대림 2차 리모델링",
      subtitle: "현관에서 이어지는 복도 벽을 우드 슬랫으로 마감하고 중문을 같은 톤으로 숨겨 넣어 이질감 없이 이어지도록 정리한 응봉대림 2차 102동605호 리모델링 사례입니다.",
      hero: "./assets/images/residential-eungbong-01.jpeg",
      area: "주거 34평",
      duration: "4주",
      cost: "총 공사비 4,270만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 도기, 도장, 마루, 샤시, 기타",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 응봉대림 2차 102동605호 리모델링 사례입니다. 우드 슬랫 마감과 스톤 톤 포인트월로 현관에서 거실까지 이어지는 동선에 통일감을 주고, 주방은 딥그린 아일랜드로 수납과 조리 동선을 함께 정리했습니다.",
      points: [
        "현관 복도 벽 전체를 우드 슬랫으로 마감하고 중문을 같은 톤으로 맞춰 눈에 띄지 않게 숨겼습니다.",
        "주방에는 딥그린 컬러 아일랜드와 황동 벽등을 매치해 우드톤 공간에 포인트를 더했습니다.",
        "거실 포인트월은 대형 스톤 타일로 마감하고 간접조명 라인을 둘러 은은한 무드를 살렸습니다."
      ],
      savingsHighlight: {
        trade: "타일",
        rate: 0.1,
        amount: 4745000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2003948 },
          { name: "철거·설비", amount: 6416909 },
          { name: "목공", amount: 6433453 },
          { name: "전기", amount: 3616928 },
          { name: "도배", amount: 2726308 },
          { name: "타일", amount: 3378191 },
          { name: "도기", amount: 2043212 },
          { name: "도장", amount: 509068 },
          { name: "마루", amount: 3395817 },
          { name: "샤시", amount: 7628090 },
          { name: "기타", amount: 704209 }
        ]
      },
      gallery: ["./assets/images/residential-eungbong-02.jpeg", "./assets/images/residential-eungbong-03.jpeg", "./assets/images/residential-eungbong-04.jpeg"]
    },
    "residential-9999": {
      category: "주거공간",
      label: "아치도어 포인트홀",
      title: "화이트 마블톤으로 완성한 도곡동 SK리더스뷰 전체 리모델링",
      subtitle: "아치형 황동 중문과 대리석 톤 마감으로 고급스러운 인상을 더한 도곡동 SK리더스뷰294A 전체 리모델링 사례입니다.",
      hero: "./assets/images/residential-daegok294a-01.jpeg",
      area: "전용 51평 (294A타입)",
      duration: "6주",
      cost: "총 공사비 7,269만원",
      scope: "전체 철거, 목공, 전기, 타일, 도장, 마루, 도기, 주방·붙박이 가구, 중문",
      estimateKey: "residential",
      description: "실제 현장 발주서와 견적서를 기준으로 정리한 도곡동 SK리더스뷰294A 전체 리모델링 사례입니다. 대리석 톤 포세린 타일로 바닥 전체를 통일하고, 현관에는 아치형 황동 프레임 중문을 더해 입구에서부터 고급스러운 인상이 이어지도록 설계했습니다.",
      points: [
        "거실과 주방을 대형 포세린 타일로 통일해 층고와 개방감이 한층 강조되도록 정리했습니다.",
        "현관에 아치형 황동 프레임 중문을 적용해 첫인상부터 공간의 톤을 분명하게 잡았습니다.",
        "간접조명과 매입등을 층별로 나눠 배치해 시간대에 따라 다른 분위기를 연출할 수 있도록 했습니다."
      ],
      savingsHighlight: {
        trade: "도기",
        rate: 0.105,
        amount: 8527000,
        note: "현장 재검토를 거쳐 여러 공정의 구성을 다시 잡아 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1934686 },
          { name: "철거·설비", amount: 8784823 },
          { name: "목공", amount: 11263878 },
          { name: "전기", amount: 5402480 },
          { name: "도배", amount: 1139662 },
          { name: "타일", amount: 11142851 },
          { name: "도기", amount: 3989876 },
          { name: "도장", amount: 7820482 },
          { name: "마루", amount: 3292041 },
          { name: "샤시(금속,유리)", amount: 0 },
          { name: "가구", amount: 0 },
          { name: "기타", amount: 11366913 }
        ]
      },
      gallery: ["./assets/images/residential-daegok294a-02.jpeg", "./assets/images/residential-daegok294a-03.jpeg", "./assets/images/residential-daegok294a-04.jpeg"]
    },
"commercial-namuegupgi": {
      category: "상업공간",
      label: "우드톤 베이커리 인테리어",
      title: "우드 톤 소재로 아늑하게 완성한 베이커리 인테리어",
      subtitle: "원목 소재와 따뜻한 조명 계획으로 편안한 체류감을 살린 매장 인테리어 사례입니다.",
      popupImages: [
        "./assets/images/commercial-namuegupgi-01.jpg",
        "./assets/images/commercial-namuegupgi-02.jpg",
        "./assets/images/commercial-namuegupgi-03.jpg"
      ]
    },
    "commercial-yogurt-icecream": {
      category: "상업공간",
      label: "요거트 아이스크림 전문점",
      title: "브랜드 톤을 살린 요거트 아이스크림 전문점 매장 인테리어",
      subtitle: "브랜드 컬러와 고객 동선을 고려해 완성한 디저트 매장 인테리어 사례입니다.",
      popupImages: [
        "./assets/images/commercial-yogurt-icecream-01.jpg",
        "./assets/images/commercial-yogurt-icecream-02.jpg",
        "./assets/images/commercial-yogurt-icecream-03.jpg"
      ]
    }
  }
};
