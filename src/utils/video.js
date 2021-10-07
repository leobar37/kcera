/**
 * A simple video player.
 * @author Jayden Seric
 * @param  {Object}      options                  - Options object.
 * @param  {HTMLElement} options.element          - Container.
 * @param  {string}      [options.playClass=play] - Container class name when video is playing.
 * @param  {string}      [options.muteClass=mute] - Container class name when video is mute.
 */
export class VideoPlayer {
  events = new Map();
  _validEvents = ["pause", "play", "volume"];
  constructor(options) {
    if (typeof options.wrapper == "string") {
      this.element = document.querySelector(options.wrapper);
    } else {
      this.element = options.element;
    }

    this.playClass = options.playClass || "play";
    this.muteClass = options.muteClass || "mute";

    this.video = this.element.querySelector("video");
    this.playToggleButton = this.element.querySelector(".play-toggle");
    this.muteToggleButton = this.element.querySelector(".mute-toggle");
    this.eventsHandler();
  }
  showNativeControls() {
    this.video.setAttribute("controls", "");
    // if (this.isPlay()) {
    // } else {
    //   this.element.removeAttribute("controls");
    // }
  }
  hideNativeControls() {
    this.element.removeAttribute("controls");
  }
  isPlay() {
    return this.element.classList.contains(this.playClass);
  }

  on(event, callback) {
    if (this.events.has(event)) {
      const callbacks = this.events.get(event);
      callbacks.push(callbacks);
    } else if (this._validEvents.includes(event)) {
      this.events.set(event, [callback]);
    } else {
      throw new Error("not valid event" + event);
    }
  }

  eventsHandler() {
    // Handle play
    this.video.addEventListener("play", (e) => {
      this.element.classList.add(this.playClass);
      const callbacks = this.events.get("play");
      if (callbacks) {
        callbacks.forEach((d) => d(e));
      }
    });
    // Handle pause
    this.video.addEventListener("pause", (e) => {
      this.element.classList.remove(this.playClass);

      const callbacks = this.events.get("pause");
      if (callbacks) {
        callbacks.forEach((d) => d(e));
      }
    });
    // Handle mute
    this.video.addEventListener("volumechange", function () {
      if (this.video.muted) this.element.classList.add(this.muteClass);
      else this.element.classList.remove(this.muteClass);
    });
    // Enable play toggle button
    this.playToggleButton &&
      this.playToggleButton.addEventListener("click", (e) => {
        this.togglePlay();
      });
    // Enable mute toggle button
    this.playToggleButton &&
      this.muteToggleButton.addEventListener("click", function () {
        this.toggleMute();
      });
  }
  toogleMute() {
    this.video.muted = !this.video.muted;
  }
  tooglePlay() {
    if (this.video.paused) this.video.play();
    else this.video.pause();
  }
}
