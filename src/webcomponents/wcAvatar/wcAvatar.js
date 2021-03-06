/**
 *
 * This component is 900% better if I use the litElement, but this project is a challenge :) for me with vanilla js 100%
 *
 */

class WcAvatar extends HTMLElement {
  constructor() {
    super();
    // Shadow Dom
    this.attachShadow({
      mode: "open",
    });
    // Handle Render status
    this.rendered = false;
    this.renderIt = function (callback) {
      if (this.rendered) {
        callback();
      }
    };

    // Attributes
    this.nickname = "Avatar Name";
    this.img = "./src/webcomponents/wcAvatar/avatardefault.jpg";

    // Template
    this.tpl = `<span class="nick">${this.nickname}</span>`;

    // Style
    this.cssHost = `<style type="text/css">
      :host  {
        --wc-avatar-border: 0;
        --wc-avatar-bgi: url(${this.img});
      }
      :host {
        background: black;
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-radius: 100%;
        background-image: var(--wc-avatar-bgi);
        background-position: center center;
        background-size: cover;
        border: var(--wc-avatar-border);
      }

      :host .nick {
        box-sizing: border-box;
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.95);
        color: black;
        width: 100%;
        padding: 4px;
        text-align: center;
        font-size: 10px;
        font-family: sans-serif;
        font-weight: bold;
        text-transform: uppercase;
      }    
     </style>`;
  }

  connectedCallback() {
    this.rendered = true;
    // With Shadow Activated
    this.shadowRoot.innerHTML = this.cssHost + this.tpl;
    this.renderIt(() => {
      this.shadowRoot.querySelector(".nick").innerHTML = this.nickname;
      this.style.setProperty(
        "--wc-avatar-bgi",
        "url(https://avatars.githubusercontent.com/u/1270068?s=460&u=3fadf3dc7057e73bc181b4b06f271a67815a591c&v=4)"
      );
    });
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    this.rendered = false;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (true) {
      case attr === "nickname":
        this.nickname = newValue;
        this.renderIt(() => {
          this.shadowRoot.querySelector(".nick").innerHTML = this.nickname;
        });
        break;
    }
  }

  static get observedAttributes() {
    return ["nickname"];
  }
}

window.customElements.define("wc-avatar", WcAvatar);

export default WcAvatar;
