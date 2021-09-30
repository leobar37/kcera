const button$ = document.querySelector(".header__button button");
export class Animation {
  constructor() {
    this.downButton();
  }
  downButton() {
    button$.addEventListener("click", () => {
      window.scrollTo({
        top: (window.screenY += 800),
        behavior: "smooth",
      });
    });
  }
}
