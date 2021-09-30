import { UIProducts } from "./ui/products";
import "./css/normalize.css";
import "./css/practice-0bdd8b.webflow.css";
import "./css/webflow.css";
import "./css/style.css";
import "./styles/main.scss";
import { Nav } from "./ui/nav";
import { VideoComponent } from "./ui/video";
window.addEventListener("load", () => {
  new UIProducts();
  new Nav();
  new VideoComponent();
});

import("./lib/webflow.js");
