const $input = document.querySelector("#email_cupon");
const $sendCupon = document.querySelector("#sendCupon");
import { leobarApi } from "../lib/api";
import Swal from "sweetalert2";
import { isEmail } from "../utils/internal";
export class LadingUi {
  constructor() {
    console.log("sende");
    this.handleInput();
  }
  handleInput() {
    $input.value = "leonardito3458@gmail.com";

    $sendCupon.addEventListener("click", async () => {
      const email = $input.value;
      console.log("click");
      if (!isEmail(email)) {
        console.log("hola");
        Swal.fire({
          icon: "error",
          title: ` ${email} no parece ser una email`,
        });
      }
      Swal.showLoading();
      const resp = await leobarApi("cupon", {
        method: "POST",
        body: {
          email,
        },
      });
      Swal.hideLoading();
      if (resp.ok) {
        Swal.fire({
          icon: "success",
          title: `Hemos enviado un email con tu cupón de descuento a ${email}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: resp.data,
        });
      }
    });
  }
}
