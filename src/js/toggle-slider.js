const controls = document.querySelector("[data-slider-nav]");
const slider = document.querySelector("[data-slide-container]");

const handleChancheSlide = (event) => {
  const target = event.target;

  if (!target) return;

  if (target.tagName === "BUTTON") {
    const index = target.dataset.slide;
    const translateX = `translateX(-${index}00%)`;
    slider.style.transform = translateX;

    controls.querySelectorAll("[data-slide]").forEach((btn) => {
      btn.classList.remove("toggle-nav__button--active");
    });
    target.classList.add("toggle-nav__button--active");
  }
};

controls.addEventListener("click", handleChancheSlide);
