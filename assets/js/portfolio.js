/*
  interior instant — portfolio.html 렌더링/인터랙션
  data.js(SITE_DATA) + portfolio-data.js(PORTFOLIO_DATA) + estimate-utils.js를 읽어
  ?slug= 쿼리에 해당하는 시공 사례 상세 페이지를 그린다.
*/

(function () {
  const { formatWon, buildEstimate } = window.EstimateUtils;

  function buildEstimateTable(item, estimateTemplates) {
    const estimate = buildEstimate(item, estimateTemplates);
    const rowsHtml = estimate.rows
      .map(
        (row) => `
          <tr>
            <td>${row.name}</td>
            <td>${formatWon(row.labor)}</td>
            <td>${formatWon(row.material)}</td>
            <td>${formatWon(row.labor + row.material)}</td>
          </tr>
        `
      )
      .join("");

    return `
      <section class="section">
        <div class="estimate-card">
          <div class="estimate-card__head">
            <div>
              <div class="eyebrow">COST BREAKDOWN</div>
              <h2 class="estimate-card__title">원가 견적 기준을 함께 확인해보세요</h2>
            </div>
            <div class="estimate-card__desc">인건비 원가와 자재비 원가를 공정별로 나눠 보여주고, 기타 잡비와 9.9% 기준 마진까지 한 흐름으로 확인할 수 있게 구성했습니다.</div>
          </div>
          <div class="estimate-table-wrap">
            <table class="estimate-table">
              <thead>
                <tr>
                  <th>공정</th>
                  <th>인건비 원가</th>
                  <th>자재비 원가</th>
                  <th>합계</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
                <tr class="estimate-table__summary">
                  <td>기타 잡비</td>
                  <td>-</td>
                  <td>${formatWon(estimate.miscTotal)}</td>
                  <td>${formatWon(estimate.miscTotal)}</td>
                </tr>
                <tr class="estimate-table__summary">
                  <td>공사 원가</td>
                  <td>${formatWon(estimate.laborTotal)}</td>
                  <td>${formatWon(estimate.materialBaseTotal + estimate.miscTotal)}</td>
                  <td>${formatWon(estimate.costBeforeMargin)}</td>
                </tr>
                <tr class="estimate-table__summary">
                  <td>이윤(9.9%)</td>
                  <td>-</td>
                  <td>${formatWon(estimate.margin)}</td>
                  <td>${formatWon(estimate.margin)}</td>
                </tr>
                <tr class="estimate-table__total">
                  <td>현재 원가견적</td>
                  <td colspan="2">${item.label}</td>
                  <td>${formatWon(estimate.total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  function renderEmptyState(app) {
    app.innerHTML = `
      <section class="section empty">
        <h1>포트폴리오를 찾을 수 없습니다</h1>
        <p>선택한 프로젝트 정보가 아직 준비되지 않았습니다. 주거공간 또는 상업공간 목록으로 돌아가 다른 사례를 확인해 주세요.</p>
        <a class="button button--primary" href="./index.html#cases">포트폴리오 목록으로 돌아가기</a>
      </section>
    `;
  }

  function renderPortfolio(app, item, estimateTemplates) {
    document.title = `${item.title} | 포트폴리오`;
    const estimate = buildEstimate(item, estimateTemplates);

    app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div class="hero__visual" style="background-image:url('${item.hero}')">
            <div class="hero__badge">${item.category}</div>
          </div>
          <div class="hero__copy">
            <div>
              <div class="eyebrow">${item.label}</div>
              <h1 class="hero__title">${item.title}</h1>
            </div>
            <p class="hero__subtitle">${item.subtitle}</p>
            <div class="stats">
              <div class="stat">
                <div class="stat__label">공간 규모</div>
                <div class="stat__value">${item.area}</div>
              </div>
              <div class="stat">
                <div class="stat__label">공사 기간</div>
                <div class="stat__value">${item.duration}</div>
              </div>
            </div>
            <div class="meta">
              <div class="meta__item">
                <div class="meta__label">공사 범위</div>
                <div class="meta__value">${item.scope}</div>
              </div>
              <div class="meta__item">
                <div class="meta__label">비용</div>
                <div class="meta__value">${item.cost}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${buildEstimateTable(item, estimateTemplates)}

      <section class="section">
        <div class="section__head">
          <div>
            <div class="eyebrow">PROJECT STORY</div>
            <h2 class="section__title">이 프로젝트를 이렇게 정리했습니다</h2>
          </div>
          <div class="section__desc">${item.description}</div>
        </div>
        <div class="point-grid">
          ${item.points
            .map(
              (point, index) => `
                <article class="point-card">
                  <div class="point-card__num">POINT 0${index + 1}</div>
                  <p class="point-card__text">${point}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="section__head">
          <div>
            <div class="eyebrow">DETAIL IMAGE</div>
            <h2 class="section__title">상세 이미지를 함께 확인해보세요</h2>
          </div>
          <div class="section__desc">메인 이미지만 보는 것보다 실제 시공 톤과 디테일이 더 잘 읽히도록 대표 장면과 보조 이미지를 함께 구성했습니다.</div>
        </div>
        <div class="gallery">
          <div class="gallery__lead">
            <img src="${item.gallery[0]}" alt="${item.title} 대표 이미지" />
          </div>
          <div class="gallery__stack">
            <img src="${item.gallery[1]}" alt="${item.title} 상세 이미지 1" />
            <img src="${item.gallery[2]}" alt="${item.title} 상세 이미지 2" />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section__head">
          <div>
            <div class="eyebrow">CONSULTING FLOW</div>
            <h2 class="section__title">상담과 시공은 이런 흐름으로 이어집니다</h2>
          </div>
        </div>
        <div class="story">
          <div class="story__panel">
            <h3>상담 기준</h3>
            <p>공간의 상태와 예산, 일정, 원하는 분위기를 먼저 정리한 뒤 현장 실측과 원가 견적 기준으로 실제 가능한 범위를 제안합니다. 무리한 연출보다 운영과 생활에 맞는 방향을 우선으로 잡는 방식입니다.</p>
          </div>
          <div class="story__panel">
            <h3>체크 포인트</h3>
            <ul class="story__list">
              <li>실측 후 공정상 꼭 필요한 항목과 제외 가능한 항목을 함께 구분합니다.</li>
              <li>인건비와 자재비 기준을 먼저 확인한 뒤 디자인과 견적을 조정합니다.</li>
              <li>직접 시공 또는 검증된 파트너 연결 구조에 맞춰 일정을 안내합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="cta">
          <div class="cta__copy">
            <div class="eyebrow">NEXT STEP</div>
            <h2>비슷한 방향의 공간을 상담으로 이어보세요</h2>
            <p>주거 리모델링부터 상업 공간, 부분 시공까지 현재 상황과 예산에 맞는 방식으로 연결해드립니다.</p>
          </div>
          <div class="cta__actions">
            <button class="button button--primary" type="button" data-open-inquiry>현재 디자인으로 문의하기</button>
            <a class="button button--ghost" href="./index.html#cases">목록으로 돌아가기</a>
          </div>
        </div>
      </section>
    `;

    const floatingBar = document.getElementById("floatingBar");
    const floatingAmount = document.getElementById("floatingAmount");
    floatingAmount.textContent = formatWon(estimate.total);
    floatingBar.classList.add("is-visible");
    floatingBar.setAttribute("aria-hidden", "false");

    const targetInput = document.getElementById("inquiryTarget");
    const contentInput = document.getElementById("inquiryContent");
    const subtitle = document.getElementById("inquirySubtitle");
    if (targetInput) targetInput.value = `${item.title} | ${window.location.href}`;
    if (contentInput) {
      contentInput.value = `${item.label}와 비슷한 방향으로 상담 원합니다.\n공간 유형: ${item.category}\n예상 범위: ${item.scope}\n현재 보고 있는 견적 기준: ${formatWon(estimate.total)}`;
    }
    if (subtitle) {
      subtitle.textContent = `${item.label} 기준으로 상담을 남겨주시면 현재 보고 계신 디자인 방향과 원가견적을 함께 검토해드립니다.`;
    }
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal.is-open")) {
      document.body.style.overflow = "";
    }
  }

  function renderCompanyInfo(company) {
    document.querySelectorAll("[data-company-license]").forEach((el) => (el.textContent = company.license));
    document.querySelectorAll("[data-company-address]").forEach((el) => (el.textContent = company.address));
    document.querySelectorAll("[data-company-phone]").forEach((el) => (el.textContent = company.phone));
    document.querySelectorAll("[data-company-email]").forEach((el) => (el.textContent = company.email));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.SITE_DATA) renderCompanyInfo(window.SITE_DATA.company);

    const { items, estimateTemplates } = window.PORTFOLIO_DATA || { items: {}, estimateTemplates: {} };

    const app = document.getElementById("app");
    const inquiryModal = document.getElementById("inquiryModal");
    const successModal = document.getElementById("successModal");
    const inquiryForm = document.getElementById("inquiryForm");
    const openInquiryButton = document.getElementById("openInquiryButton");
    const slug = new URLSearchParams(window.location.search).get("slug");
    const item = slug ? items[slug] : null;

    if (!item) {
      renderEmptyState(app);
    } else {
      renderPortfolio(app, item, estimateTemplates);
    }

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-open-inquiry]") || event.target === openInquiryButton) {
        openModal(inquiryModal);
      }
      if (event.target.matches("[data-close-modal]") || event.target === inquiryModal) {
        closeModal(inquiryModal);
      }
      if (event.target.matches("[data-close-success]") || event.target === successModal) {
        closeModal(successModal);
      }
    });

    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("inquiryName").value.trim();
      const phone1 = document.getElementById("phone1").value.trim();
      const phone2 = document.getElementById("phone2").value.trim();
      const phone3 = document.getElementById("phone3").value.trim();
      const agreed = document.getElementById("privacyAgree").checked;

      if (!name || !phone1 || !phone2 || !phone3 || !agreed) {
        window.alert("성함, 연락처, 개인정보 동의를 확인해 주세요.");
        return;
      }

      closeModal(inquiryModal);
      inquiryForm.reset();
      openModal(successModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (inquiryModal.classList.contains("is-open")) closeModal(inquiryModal);
        if (successModal.classList.contains("is-open")) closeModal(successModal);
      }
    });
  });
})();
