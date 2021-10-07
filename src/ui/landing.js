const $input = document.querySelector("#email_cupon");
const $sendCupon = document.querySelector("#sendCupon");
import { apiBase } from "../lib/api";
import api from "../lib/api";
import Swal from "sweetalert2";
import { isEmail } from "../utils/internal";
export class LadingUi {
  constructor() {
    console.log("register");
    this.handleInput();
  }
  handleInput() {
    console.log("cupon");
    $sendCupon.addEventListener("click", async () => {
      const email = $input.value;
      if (!isEmail(email)) {
        console.log("hola");
        Swal.fire({
          icon: "error",
          title: ` ${email} no parece ser una email`,
        });
      }
      // Swal.showLoading();

      const { data: resp } = await apiBase.get("ClienteApp/Enviaremail", {
        params: {
          email,
        },
      });

      Swal.hideLoading();
      console.log(resp);
      if (resp.estatus == 200) {
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
