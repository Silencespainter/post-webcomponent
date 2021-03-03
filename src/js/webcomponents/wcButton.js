const fakeHTML = (foo) => {
  console.log("fakeHtml", foo);
};

class WcButton extends HTMLElement {
  constructor() {
    super();
    this.rendered = false;
    this.txt = "Button Default";
  }

  connectedCallback() {
    this.rendered = true;
    fakeHTML(this);
    this.innerHTML = `<button>${this.txt}</button>`;
    console.log("This WS is the HTML", this.txt);
  }
  disconnectedCallback() {
    this.rendered = false;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (true) {
      case attr === "txt":
        this.txt = newValue;
        break;
      default:
        break;
    }
    if (this.rendered) {
      fakeHTML(this);
      this.innerHTML = `<button>${this.txt}</button>`;
    }
  }
  static get observedAttributes() {
    return ["txt"];
  }
}

window.customElements.define("wc-button", WcButton);

export default WcButton;
