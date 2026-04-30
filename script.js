const copyButtons = document.querySelectorAll("[data-copy-target]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const originalText = button.textContent;
    try {
      await navigator.clipboard.writeText(target.innerText);
      button.textContent = "已复制";
      setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    } catch {
      button.textContent = "复制失败";
      setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    }
  });
});

const faqSearch = document.getElementById("faq-search");
const faqItems = [...document.querySelectorAll("[data-faq]")];

if (faqSearch) {
  faqSearch.addEventListener("input", () => {
    const keyword = faqSearch.value.trim().toLowerCase();

    faqItems.forEach((item) => {
      const text = `${item.dataset.faq} ${item.textContent}`.toLowerCase();
      item.hidden = keyword.length > 0 && !text.includes(keyword);
    });
  });
}
