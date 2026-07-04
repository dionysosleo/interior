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

  function buildEstimate(item, estimateTemplates) {
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

    return { rows, laborTotal, materialBaseTotal, miscTotal, costBeforeMargin, margin, total };
  }

  // 현재 디자인으로 문의 시 적용되는 즉시 할인 (기본 3%)
  function applyInquiryDiscount(total, rate = 0.03) {
    const saved = Math.round(total * rate);
    const discounted = total - saved;
    return { rate, saved, discounted };
  }

  return { formatWon, parseKoreanCost, buildEstimate, applyInquiryDiscount };
})();
