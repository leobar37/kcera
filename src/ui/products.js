import { fetchProducts } from "../controllers/product";
import { isTrue, ramdom } from "../utils/shared";
import Swiper from "swiper";
import Glide from "@glidejs/glide";

export class UIProducts {
  constructor() {
    this.renderProducts();
    console.log("start");
  }
  initializeSlider() {
    setTimeout(() => {
      new Glide(".glide", {
        perView: 4,
        type: "slider",
        gap: 5,
        bound: true,
        breakpoints: {
          500: {
            perView: 2,
          },
        },
      }).mount();
    }, 200);
  }

  async renderProducts() {
    const products = await fetchProducts("AOferta");
    const wrapper = document.querySelector(".list.products");
    wrapper.classList.add("glide__slides");
    products.forEach((product) => {
      const { idproducto, producto, costopublico, imagenproducto } = product;
      const render = () => {
        const product$ = this.renderProduct({
          id: idproducto,
          title: producto,
          image: imagenproducto,
          price: costopublico,
        });
        wrapper.appendChild(product$);
      };
      isTrue(idproducto, producto, imagenproducto) && render();
    });
    this.initializeSlider();
  }

  renderProduct({ id, image, title, price }) {
    const box = document.createElement("div");
    const slideWrapper = document.createElement("div");
    slideWrapper.classList.add("glide__slide");
    box.dataset.id = id;
    box.classList.add("food-card", "horizontal-item", "glide__slide");
    box.innerHTML = /*html*/ `
      <img src="${image}" loading="lazy" alt=""
                class="image-5">
      <h1 class="heading-7">${title.slice(0, 20)}</h1>
        <div class="text-block-3">${ramdom(15)}g Proteina <br>${ramdom(
      10
    )}g grasa</div> 
        <div><strong class="bold-text">${price} s/.</strong>
         </div>`;
    slideWrapper.appendChild(box);
    return slideWrapper;
  }
}
