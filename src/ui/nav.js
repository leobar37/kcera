import { mobile } from "../utils/ui";

export class Nav {
  constructor() {
    this.handleNAv();
  }
  handleNAv() {
    const nav$ = document.querySelector(".nav");
    document.addEventListener("scroll", () => {
      const { scrollY } = window;
      const addClass = scrollY > 220;
      if (addClass) {
        nav$.classList.add("scroll");
      } else {
        nav$.classList.remove("scroll");
      }
    });
  }
}
