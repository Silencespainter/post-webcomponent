// ⚓  WcIcon Create a class for the element and extend HTMLElement
class WcIcon extends HTMLElement {
  //  🔧 Constructor
  constructor() {
    // 🗜️ Always call super first in constructor
    super();
    // 🧩 📚 Define attributes
    this.typeicon = "default";
    // 🧩  Styles like a template <style></style>
    this.css = `<style>
    :root {
      --wcicon-width: 32px;
      --wcicon-height: var(--wcicon-width);
      --wcicon-fill: #333;
    }
    .wcicon {
      width: var(--wcicon-width);
      height: var(--wcicon-height);
      fill: var(--wcicon-fill);
    }
    </style>`;
    // 🧩  Icons like a object
    this.icon = {
      default: `<svg class="wcicon wcicon-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64"><path d="M391 196v-60C391 61.569 330.599 0 256 0c-74.443 0-135 61.557-135 136v60c0 56.852 35.598 107.906 90 127.192V331h-45c-41.353 0-75 33.647-75 75v91c0 8.291 6.709 15 15 15h45v-46c0-8.291 6.709-15 15-15s15 6.709 15 15v46h150v-46c0-8.291 6.709-15 15-15s15 6.709 15 15v46h45c8.291 0 15-6.709 15-15v-91c0-41.353-33.647-75-75-75h-45v-7.764c53.54-18.72 90-69.463 90-127.236zm-135 45c-8.284 0-15-6.716-15-15 0-8.286 6.716-15 15-15s15 6.714 15 15c0 8.284-6.716 15-15 15zm26.982-98.979C275.482 147.646 271 156.61 271 166c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-18.779 8.965-36.724 23.979-47.988C268.817 115.141 271 110.775 271 106c0-8.276-6.724-15-15-15s-15 6.724-15 15c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814 20.186-45 45-45s45 20.186 45 45c0 14.106-6.738 27.568-18.018 36.021z"/></svg>`,
      twitter: `<svg class="wcicon wcicon-tw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64"><path d="M191.012 419.043c-22.14 0-44.93-1.793-67.856-5.387-40.379-6.336-81.254-27.457-92.82-33.781L0 363.289l32.844-10.8c35.902-11.805 57.742-19.13 84.777-30.598-27.07-13.11-47.933-36.692-57.976-67.176l-7.641-23.195 6.266.957A113.939 113.939 0 0144 214.883c-12.934-19.645-19.781-43.649-18.324-64.219l1.437-20.246 12.121 4.695a113.316 113.316 0 01-10.98-30.777c-5.293-26.36-.863-54.363 12.476-78.852L51.29 6.102l14.12 16.96c44.66 53.649 101.227 85.473 168.363 94.79-2.742-18.903-.687-37.145 6.114-53.497 7.918-19.039 22.004-35.183 40.722-46.69 20.79-12.778 46-18.97 70.989-17.435 26.511 1.63 50.582 11.563 69.699 28.747 9.336-2.426 16.215-5.016 25.512-8.516 5.593-2.106 11.937-4.496 19.875-7.23l29.25-10.079-19.075 54.477a96.355 96.355 0 013.91-.254l31.235-1.414-18.461 25.23c-1.059 1.446-1.328 1.856-1.703 2.422-1.488 2.242-3.34 5.032-28.68 38.867-6.344 8.473-9.512 19.508-8.922 31.079 2.246 43.968-3.148 83.75-16.043 118.234-12.195 32.625-31.093 60.617-56.164 83.2-31.023 27.937-70.582 47.066-117.582 56.847-23.054 4.797-47.812 7.203-73.437 7.203zm0 0" /></svg>`,
      facebook: `<svg class="wcicon wcicon-fb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64"><path d="M437 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h151V331h-60v-90h60v-61c0-49.629 40.371-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.352 0 75-33.648 75-75V75c0-41.352-33.648-75-75-75zm0 0" /></svg>`,
    };
  }

  // 🔒 Executed when the tag will be in the html
  connectedCallback() {
    // DEFAULT: If you don't delivery the attr typeicon in the html
    if (this.getAttribute("typeicon") == undefined)  {
      this.innerHTML = `${this.css} ${this.icon.default}`;
    }
  }

  // 🔓 Executed when the tag will not be in the html
  disconnectedCallback() {}

  // 🧩 🏃‍♀️ Actions relative with the attributes
  attributeChangedCallback(attr, oldValue, newValue) {
    // Check if change attribute change and update the icon tpl
    if (attr === "typeicon") {
      switch (true) {
        case newValue === "twitter":
          this.innerHTML = `${this.css} ${this.icon.twitter}`;
          console.log(newValue);
          break;
        case newValue === "facebook":
          this.innerHTML = `${this.css} ${this.icon.facebook}`;
          console.log(newValue);
          break;
        default:
          this.innerHTML = `${this.css} ${this.icon.default}`;
          console.log(newValue);
          break;
      }
    }
  }

  // 🧩 👀 Detect changes of the attributes
  static get observedAttributes() {
    return ["typeicon"];
  }
}

// 🔖  Define the element
window.customElements.define("wc-icon", WcIcon);

// 📨 Export Class like a module
export default WcIcon;
