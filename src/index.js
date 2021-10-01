import { UIProducts } from "./ui/products";
import "./css/normalize.css";
import "./css/practice-0bdd8b.webflow.css";
import "./css/webflow.css";
import "./css/style.css";
import "./styles/main.scss";
import "sweetalert2/src/sweetalert2.scss";
import "animate.css";
import { Nav } from "./ui/nav";
import { Animation } from "./ui/Animations";
import { VideoComponent } from "./ui/video";
import { LadingUi } from "./ui/landing";
import SmoothScroll from "smooth-scroll";

window.addEventListener("load", () => {
  new SmoothScroll('a[href*="#"]', {
    speed: 400,
    offset: 0,
  });
  new UIProducts();
  new Nav();
  new VideoComponent();
  new Animation();
  new LadingUi();
});

import("./lib/webflow.js");
