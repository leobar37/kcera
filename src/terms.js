import axios from "axios";
import MarkdownIt from "markdown-it";
import "./styles/terms.scss";

class Terms {
  markdownConvert = new MarkdownIt();
  constructor() {
    console.log("hello world");
    this.loadText();
  }

  async loadText() {
    const text = await fetch("/assets/terms.txt").then((d) => d.text());
    console.log(text);
    const content = document.querySelector("#terms");
    const result = this.markdownConvert.render(text);
    content.innerHTML = result;
    console.log(result);
  }
}

new Terms();
