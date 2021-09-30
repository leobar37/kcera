import { UIProducts } from "./ui/products";
import "./css/normalize.css";
import "./css/practice-0bdd8b.webflow.css";
import "./css/webflow.css";
import "./css/style.css";
import "./styles/main.scss";
import "animate.css";
import { Nav } from "./ui/nav";
import { Animation } from "./ui/Animations";
import { VideoComponent } from "./ui/video";
import SmoothScroll from "smooth-scroll";
window.addEventListener("load", () => {
  // scrollbar
  new SmoothScroll('a[href*="#"]', {
    speed: 400,
    offset: 0,
  });

  new UIProducts();
  new Nav();
  new VideoComponent();
  new Animation();
});

import("./lib/webflow.js");
