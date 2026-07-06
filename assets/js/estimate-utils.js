/*
  interior instant — 견적 계산 공통 유틸
  index.html(시공사례 카드 원가 미리보기)와 portfolio.html(상세 견적표) 양쪽에서 사용한다.
*/

window.EstimateUtils = (function () {
  function formatWon(value) {
    return `${Math.round(value).toLocaleString("ko-KR")}원`;
  }

  function parseKoreanCost(costText) {
    const match = costText.match(/([\d,]+)\s*만원/);
    if (!match) return 0;
    return Number(match[1].replace(/,/g, "")) * 10000;
  }

  // 실제 현장 공정표(발주서/견적서)를 그대로 반영하는 케이스용 — 공정별 단일 금액(공정, 금액)을 쓰고
  // 인건비/자재비로 나누지 않는다. 원본 견적서 형식과 동일하게 "공정 / 금액"으로만 보여준다.
  function buildCustomEstimate(custom) {
    const costBeforeMargin = custom.rows.reduce((sum, row) => sum + row.amount, 0);
    const rate = custom.marginRate != null ? custom.marginRate : 0.099;
    const margin = Math.round(costBeforeMargin * rate);
    const total = costBeforeMargin + margin;
    return { rows: custom.rows, costBeforeMargin, margin, total, marginRate: rate, isCustom: true };
  }

  function buildEstimate(item, estimateTemplates) {
    if (item.customEstimate) {
      return buildCustomEstimate(item.customEstimate);
    }

    const total = parseKoreanCost(item.cost);
    const template = estimateTemplates[item.estimateKey || "residential"];
    const costBeforeMargin = Math.round(total / 1.099);
    const margin = total - costBeforeMargin;
    const laborTotal = Math.round(costBeforeMargin * template.laborRatio);
    const materialBaseTotal = Math.round(costBeforeMargin * template.materialRatio);
    const miscTotal = Math.max(costBeforeMargin - laborTotal - materialBaseTotal, 0);

    const rows = template.rows.map(([name, laborWeight, materialWeight]) => ({
      name,
      labor: Math.round(laborTotal * laborWeight),
      material: Math.round(materialBaseTotal * materialWeight)
    }));

    return { rows, laborTotal, materialBaseTotal, miscTotal, costBeforeMargin, margin, total, isCustom: false };
  }

  // 현재 디자인으로 문의 시 적용되는 즉시 할인 (기본 3%)
  function applyInquiryDiscount(total, rate = 0.03) {
    const saved = Math.round(total * rate);
    const discounted = total - saved;
    return { rate, saved, discounted };
  }

  return { formatWon, parseKoreanCost, buildEstimate, applyInquiryDiscount };
})();
