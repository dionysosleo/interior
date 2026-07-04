/*
  interior instant — index.html 렌더링/인터랙션
  data.js(SITE_DATA) + portfolio-data.js(PORTFOLIO_DATA) + estimate-utils.js를 읽어
  이벤트배너, 특징블록, 통계바, 원가표, 절감사례표, 시공사례 카드, 공정, 추천, FAQ, 회사정보를 그린다.
  실제 서비스로 전환할 때는 이 파일에서 SITE_DATA/PORTFOLIO_DATA를 API 응답으로 바꿔치기만 하면 된다.
*/

(function () {
  const { formatWon, buildEstimate } = window.EstimateUtils || {};

  function renderEventBanner(text) {
    const el = document.querySelector("[data-event-banner]");
    if (!el) return;
    el.textContent = text;
  }

  function renderHeroBadge(data) {
    const el = document.querySelector("[data-hero-badge]");
    if (!el || !data.badge) return;
    el.textContent = data.badge;
  }

  function renderHeroMetrics(data) {
    const bodyEl = document.querySelector("[data-hero-metrics]");
    if (!bodyEl) return;

    bodyEl.innerHTML = data.metrics
      .map(
        (metric) => `
          <div class="metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
          </div>
        `
      )
      .join("");
  }

  function renderFeatureBlocks(data) {
    const bodyEl = document.querySelector("[data-feature-body]");
    if (!bodyEl) return;

    bodyEl.innerHTML = data.items
      .map(
        (item) => `
          <div class="feature-row align-${item.align}">
            <div class="feature-media">
              <div class="img-fill" style="background-image:url('${item.image}')"></div>
              <div class="img-overlay"></div>
            </div>
            <div class="feature-copy">
              <div class="num-label">${item.number}</div>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </div>
        `
      )
      .join("");
  }

  function renderStatBar(data) {
    const numberEl = document.querySelector("[data-stat-number]");
    const titleEl = document.querySelector("[data-stat-title]");
    const bodyEl = document.querySelector("[data-stat-body]");
    if (!bodyEl) return;

    if (numberEl) numberEl.textContent = data.number;
    if (titleEl) titleEl.textContent = data.title;

    bodyEl.innerHTML = data.stats
      .map(
        (stat) => `
          <div class="stat-bar-item">
            <div class="stat-bar-value">${stat.value}</div>
            <div class="stat-bar-label">${stat.label}</div>
          </div>
        `
      )
      .join("");
  }

  function renderCostTable(data) {
    const numberEl = document.querySelector("[data-cost-number]");
    const titleEl = document.querySelector("[data-cost-title]");
    const descEl = document.querySelector("[data-cost-desc]");
    const bodyEl = document.querySelector("[data-cost-body]");
    if (!bodyEl) return;

    if (numberEl) numberEl.textContent = data.number;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    bodyEl.innerHTML = data.rows
      .map(
        (row) => `
          <tr>
            <td><strong>${row.trade}</strong></td>
            <td class="table-amount">${formatWon(row.lead)}</td>
            <td class="table-amount">${formatWon(row.skilled)}</td>
          </tr>
        `
      )
      .join("");
  }

  function renderSavingsTable(data) {
    const numberEl = document.querySelector("[data-saving-number]");
    const eyebrowEl = document.querySelector("[data-saving-eyebrow]");
    const titleEl = document.querySelector("[data-saving-title]");
    const bodyEl = document.querySelector("[data-saving-body]");
    if (!bodyEl) return;

    if (numberEl) numberEl.textContent = data.number;
    if (eyebrowEl) eyebrowEl.textContent = data.eyebrow;
    if (titleEl) titleEl.textContent = data.title;

    bodyEl.innerHTML = data.rows
      .map((row) => {
        const nameHtml = row.slug
          ? `<a class="table-case-link" href="./portfolio.html?slug=${row.slug}">${row.name}</a>`
          : row.name;
        return `
          <tr>
            <td><strong>${nameHtml}</strong><span>${row.sub}</span></td>
            <td class="table-type">${row.spaceType}</td>
            <td><div class="table-clamp-2">${row.point}</div></td>
            <td><div class="table-clamp-2">${row.detail}</div></td>
            <td class="table-amount">${formatWon(row.amount)}</td>
          </tr>
        `;
      })
      .join("");
  }

  function categoryTag(category) {
    return category === "상업공간" ? "Commercial" : "Residential";
  }

  function renderCaseCard(slug, item, estimateTemplates) {
    const estimate = buildEstimate(item, estimateTemplates);
    const materialWithMisc = estimate.materialBaseTotal + estimate.miscTotal;

    return `
      <article class="case-card">
        <a class="case-link" href="./portfolio.html?slug=${slug}">
          <div class="case-image">
            <div class="img-fill img-${slug}"></div>
            <div class="img-overlay"></div>
            <span class="img-note">${categoryTag(item.category)}</span>
            <span class="img-label">${item.label}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
          <div class="case-cost-preview">
            <span>인건비 원가 <strong>${formatWon(estimate.laborTotal)}</strong></span>
            <span>자재비 원가 <strong>${formatWon(materialWithMisc)}</strong></span>
          </div>
        </a>
      </article>
    `;
  }

  function renderCases(data, portfolioData) {
    const numberEl = document.querySelector("[data-cases-number]");
    const titleEl = document.querySelector("[data-cases-title]");
    const descEl = document.querySelector("[data-cases-desc]");
    const residentialEl = document.querySelector("[data-cases-residential]");
    const commercialEl = document.querySelector("[data-cases-commercial]");
    if (!residentialEl || !commercialEl || !portfolioData) return;

    if (numberEl) numberEl.textContent = data.number;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    const { items, estimateTemplates } = portfolioData;
    const residentialHtml = [];
    const commercialHtml = [];

    Object.entries(items).forEach(([slug, item]) => {
      const html = renderCaseCard(slug, item, estimateTemplates);
      if (item.category === "상업공간") {
        commercialHtml.push(html);
      } else {
        residentialHtml.push(html);
      }
    });

    residentialEl.innerHTML = residentialHtml.join("");
    commercialEl.innerHTML = commercialHtml.join("");
  }

  function renderProcess(data) {
    const numberEl = document.querySelector("[data-process-number]");
    const titleEl = document.querySelector("[data-process-title]");
    const bodyEl = document.querySelector("[data-process-body]");
    if (!bodyEl) return;

    if (numberEl) numberEl.textContent = data.number;
    if (titleEl) titleEl.textContent = data.title;

    bodyEl.innerHTML = data.steps
      .map(
        (step, index) => `
          <div class="process-row">
            <div class="eyebrow">STEP ${index + 1}</div>
            <div>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
            </div>
            <div class="process-side">${step.side}</div>
          </div>
        `
      )
      .join("");
  }

  function renderRecommend(data) {
    const titleEl = document.querySelector("[data-recommend-title]");
    const bodyEl = document.querySelector("[data-recommend-body]");
    if (!bodyEl) return;

    if (titleEl) titleEl.textContent = data.title;

    bodyEl.innerHTML = data.cards
      .map(
        (card) => `
          <article class="recommend-card">
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
          </article>
        `
      )
      .join("");
  }

  function renderFaq(data) {
    const numberEl = document.querySelector("[data-faq-number]");
    const titleEl = document.querySelector("[data-faq-title]");
    const bodyEl = document.querySelector("[data-faq-body]");
    if (!bodyEl) return;

    if (numberEl) numberEl.textContent = data.number;
    if (titleEl) titleEl.textContent = data.title;

    bodyEl.innerHTML = data.items
      .map(
        (faq) => `
          <details class="faq-item">
            <summary>${faq.q}</summary>
            <div class="faq-item-answer">${faq.a}</div>
          </details>
        `
      )
      .join("");
  }

  function renderCompanyInfo(company) {
    document.querySelectorAll("[data-company-license]").forEach((el) => (el.textContent = company.license));
    document.querySelectorAll("[data-company-address]").forEach((el) => (el.textContent = company.address));
    document.querySelectorAll("[data-company-phone]").forEach((el) => (el.textContent = company.phone));
    document.querySelectorAll("[data-company-email]").forEach((el) => (el.textContent = company.email));
  }

  function initConsultForm() {
    const form = document.getElementById("consult-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.alert("데모 폼입니다. 실제 운영 시에는 카카오 상담, 이메일, CRM 또는 DB와 연결하면 됩니다.");
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const data = window.SITE_DATA;
    if (!data) return;

    renderEventBanner(data.eventBanner);
    renderHeroBadge(data.hero);
    renderHeroMetrics(data.hero);
    renderFeatureBlocks(data.featureBlocks);
    renderStatBar(data.statBar);
    renderCostTable(data.costTable);
    renderSavingsTable(data.savingsTable);
    renderCases(data.cases, window.PORTFOLIO_DATA);
    renderProcess(data.process);
    renderRecommend(data.recommend);
    renderFaq(data.faq);
    renderCompanyInfo(data.company);
    initConsultForm();
  });
})();
