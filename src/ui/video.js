import { VideoPlayer } from "../utils/video";

export class VideoComponent {
  constructor() {
    const player = new VideoPlayer({
      wrapper: ".header__media .video",
    });

    const play$ = document.querySelector(".overlay button");
    const overlay$ = document.querySelector(".overlay");
    player.on("play", () => {
      player.showNativeControls();
      overlay$.classList.add("hide");
    });
    player.on("pause", () => {
      player.hideNativeControls();
      overlay$.classList.remove("hide");
    });
    play$.addEventListener("click", () => {
      player.tooglePlay();
    });
  }
  init() {}
}
