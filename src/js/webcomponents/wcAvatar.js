/**
 *
 * This component is 900% better if I use the litElement, but this project is a challenge :) for me with vanilla js 100%
 *
 */
class WcAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    // Handle Render status
    this.rendered = false;
    // ATTRIBUTES
    this.nickname = "Avatar Name";
  }

  connectedCallback() {
    this.rendered = true;
    this.shadowRoot.innerHTML = `<span>${this.nickname}</span>`; // With Shadow Activated
    // this.innerHTML = `<span>${this.nickname}</span>`; Not Shadow
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    this.rendered = false;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (true) {
      case attr === "nickname":
        this.nickname = newValue;
        break;
      default:
        break;
    }
    if (this.rendered) {
      this.shadowRoot.innerHTML = `<span>${this.nickname}</span>`; // With Shadow Activated
      // this.innerHTML = `<span>${this.nickname}</span>`; Not Shadow
      console.log("attributeChangedCallback - rendered: ", this.rendered);
    }
  }

  static get observedAttributes() {
    return ["nickname"];
  }
}

window.customElements.define("wc-avatar", WcAvatar);

export default WcAvatar;
