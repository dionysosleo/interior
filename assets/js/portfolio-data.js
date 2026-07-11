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
      cost: "총 공사비 1억 1,116만원",
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
        rate: 0.06,
        amount: 6669000,
        note: "실측 후 전기 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1622237 },
          { name: "철거·설비", amount: 7250565 },
          { name: "목공", amount: 9790500 },
          { name: "전기", amount: 4599717 },
          { name: "도배", amount: 3648448 },
          { name: "타일", amount: 6202000 },
          { name: "욕실", amount: 5123100 },
          { name: "가구", amount: 41535000 },
          { name: "샤시(금속,유리)", amount: 13003000 },
          { name: "도장", amount: 801591 },
          { name: "마루", amount: 4662100 },
          { name: "기타", amount: 2905000 }
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
      cost: "총 공사비 7,429만원",
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
        rate: 0.042,
        amount: 3120000,
        note: "실측 후 타일 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 3002404 },
          { name: "철거·설비", amount: 9154270 },
          { name: "목공", amount: 8284000 },
          { name: "전기", amount: 3712288 },
          { name: "도배", amount: 3323359 },
          { name: "타일", amount: 9627000 },
          { name: "도기", amount: 4055500 },
          { name: "도장", amount: 1150000 },
          { name: "마루", amount: 5727000 },
          { name: "샤시(금속,유리)", amount: 12925700 },
          { name: "기타", amount: 6634330 }
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
      cost: "총 공사비 10,242만원",
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
        rate: 0.04,
        amount: 4097000,
        note: "실측 후 도기 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2876964 },
          { name: "철거·설비", amount: 9982445 },
          { name: "목공", amount: 13081500 },
          { name: "전기", amount: 3907008 },
          { name: "도배", amount: 3384001 },
          { name: "타일", amount: 7835600 },
          { name: "도기", amount: 5177500 },
          { name: "도장", amount: 802670 },
          { name: "마루", amount: 7067520 },
          { name: "샤시(금속,유리)", amount: 10150000 },
          { name: "기타", amount: 28925830 }
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
      cost: "총 공사비 5,526만원",
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
        rate: 0.045,
        amount: 2487000,
        note: "실측 후 타일 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2097706 },
          { name: "철거·설비", amount: 5337625 },
          { name: "목공", amount: 9629000 },
          { name: "전기", amount: 5197732 },
          { name: "도배", amount: 4154300 },
          { name: "타일", amount: 6745500 },
          { name: "도기", amount: 6674900 },
          { name: "도장", amount: 750000 },
          { name: "마루", amount: 6062500 },
          { name: "가구", amount: 0 },
          { name: "기타", amount: 3635225 }
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
      cost: "총 공사비 4,657만원",
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
        rate: 0.045,
        amount: 2095000,
        note: "실측 후 샤시 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1849952 },
          { name: "철거·설비", amount: 4735700 },
          { name: "목공", amount: 6529500 },
          { name: "전기", amount: 3313344 },
          { name: "도배", amount: 2452425 },
          { name: "타일", amount: 1814000 },
          { name: "도기", amount: 55500 },
          { name: "도장", amount: 884400 },
          { name: "마루", amount: 4268460 },
          { name: "샤시", amount: 7814000 },
          { name: "기타", amount: 8653200 }
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
      cost: "총 공사비 3,012만원",
      scope: "가설, 철거·설비, 목공, 전기, 도배, 타일, 필름, 바닥, 기타",
      estimateKey: "residential",
      description: "실제 현장 견적서를 기준으로 정리한 잠실리센츠 224동801호 리모델링 사례입니다. 최초 검토 견적은 3,500만원 수준이었으나 중복 반영된 항목과 시공 범위를 다시 정리해 최종 3,012만원으로 조정했습니다. 현관 벽면은 대리석 톤 포세린 타일로 통일하고 블랙 스틸 프레임 중문을 매치해 입구에서부터 분명한 인상을 남기도록 설계했습니다.",
      points: [
        "현관 벽면을 대리석 톤 포세린 타일로 통일하고 블랙 스틸 프레임 중문을 매치해 입구에서부터 포인트를 만들었습니다.",
        "욕실은 헤링본 패턴 우드톤 타일과 골드 라인 조명으로 호텔 욕실 같은 분위기를 냈습니다.",
        "주방은 그레이 톤 셰이커 도어와 원목 라이브에지 테이블을 매치해 차분하면서도 자연스러운 다이닝 공간을 만들었습니다."
      ],
      savingsHighlight: {
        trade: "필름",
        rate: 0.05,
        amount: 1506000,
        note: "실측 후 필름 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1223730 },
          { name: "철거·설비", amount: 3619050 },
          { name: "목공", amount: 4471500 },
          { name: "전기", amount: 2531850 },
          { name: "도배", amount: 2296045 },
          { name: "타일", amount: 3286000 },
          { name: "필름", amount: 3500250 },
          { name: "바닥", amount: 3776500 },
          { name: "기타", amount: 2511500 },
          { name: "단수정리", amount: 190000 }
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
      cost: "총 공사비 8,697만원",
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
        rate: 0.05,
        amount: 4349000,
        note: "실측 후 타일 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1753515 },
          { name: "철거·설비", amount: 6087865 },
          { name: "목공", amount: 8406000 },
          { name: "전기", amount: 4700009 },
          { name: "도배", amount: 3558612 },
          { name: "타일", amount: 5456000 },
          { name: "욕실", amount: 4351600 },
          { name: "가구", amount: 24770000 },
          { name: "샤시", amount: 12977955 },
          { name: "도장", amount: 778745 },
          { name: "마루", amount: 4660480 },
          { name: "기타", amount: 1639000 }
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
      cost: "총 공사비 4,245만원",
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
        rate: 0.045,
        amount: 1910000,
        note: "실측 후 타일 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 1991970 },
          { name: "철거·설비", amount: 6378555 },
          { name: "목공", amount: 6395000 },
          { name: "전기", amount: 3595310 },
          { name: "도배", amount: 2710013 },
          { name: "타일", amount: 3358000 },
          { name: "도기", amount: 2031000 },
          { name: "도장", amount: 506025 },
          { name: "마루", amount: 3375520 },
          { name: "샤시", amount: 7582497 },
          { name: "기타", amount: 700000 }
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
      cost: "총 공사비 7,621만원",
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
        rate: 0.058,
        amount: 4420000,
        note: "실측 후 도기 항목의 자재·시공 구성을 조정해 절감했습니다."
      },
      customEstimate: {
        marginRate: 0.099,
        rows: [
          { name: "가설", amount: 2028574 },
          { name: "철거·설비", amount: 9211140 },
          { name: "목공", amount: 11810500 },
          { name: "전기", amount: 5664656 },
          { name: "도배", amount: 1194968 },
          { name: "타일", amount: 11683600 },
          { name: "도기", amount: 4183500 },
          { name: "도장", amount: 8200000 },
          { name: "마루", amount: 3451800 },
          { name: "샤시(금속,유리)", amount: 0 },
          { name: "가구", amount: 0 },
          { name: "기타", amount: 11918535 }
        ]
      },
      gallery: ["./assets/images/residential-daegok294a-02.jpeg", "./assets/images/residential-daegok294a-03.jpeg", "./assets/images/residential-daegok294a-04.jpeg"]
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
        rate: 0.044,
        amount: 2094000,
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
        rate: 0.046,
        amount: 1490000,
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
        rate: 0.054,
        amount: 3456000,
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
        rate: 0.056,
        amount: 1971000,
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
        rate: 0.049,
        amount: 2058000,
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
        rate: 0.051,
        amount: 4774000,
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
        trade: "샤시(금속,유리)",
        rate: 0.053,
        amount: 2215000,
        note: "실측 후 샤시(금속,유리) 항목의 자재·공정 구성을 조정해 절감했습니다."
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
        rate: 0.047,
        amount: 2717000,
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
        rate: 0.059,
        amount: 3098000,
        note: "실측 후 사인물 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-99.webp", "./assets/images/commercial-44.webp", "./assets/images/commercial-22.jpeg"]
    },
    "commercial-100": {
      category: "상업공간",
      label: "카페 인테리어 정산 사례",
      title: "실제 정산 흐름을 그대로 공개한 카페 인테리어 사례",
      subtitle: "계약금과 중도금, 인건비·자재비 지급까지 실제 정산 데이터를 기준으로 정리한 상업 공간 시공 사례입니다.",
      hero: "./assets/images/commercial-11.jpg",
      area: "상업 20평",
      duration: "3주",
      cost: "총 공사비 3,938만원",
      scope: "카페 시공, 목공, 전기·조명, 자재 발주, 인건비 정산",
      estimateKey: "commercial",
      description: "계약금과 중도금 2회 지급, 목공·전기·조명 등 공정별 자재 발주, 작업자별 인건비 지급까지 실제 정산 흐름을 그대로 반영해 정리한 카페 인테리어 사례입니다. 공사 완료 후 실제 지출 내역을 기준으로 최종 정산을 투명하게 진행했습니다.",
      points: [
        "계약금과 중도금을 2회로 나눠 지급 부담을 분산했습니다.",
        "목공, 전기·조명, 자재 발주 등 공정별 지출을 세분화해 정산했습니다.",
        "공사 완료 후 실제 지출 내역을 기준으로 최종 정산을 투명하게 안내했습니다."
      ],
      savingsHighlight: {
        trade: "목공",
        rate: 0.043,
        amount: 1693000,
        note: "실측 후 목공 항목의 자재·공정 구성을 조정해 절감했습니다."
      },
      gallery: ["./assets/images/commercial-11.jpg", "./assets/images/commercial-55.webp", "./assets/images/commercial-22.jpeg"]
    }
  }
};
