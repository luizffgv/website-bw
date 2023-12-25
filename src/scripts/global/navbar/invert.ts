import { throwIfNull } from "@luizffgv/ts-conversions";
import { Component } from "Scripts/component";
import { css, html } from "Scripts/tags";
import { INVERT_OVERLAY_INDEX } from "Scripts/z-indexes";

/** An element that inverts the colors of the page. */
export class InvertOverlayElement extends Component({
  template: html`<div id="overlay"></div>`,
  styles: css`
    #overlay {
      background-color: white;
      inset: 0;
      mix-blend-mode: difference;
      opacity: 0;
      pointer-events: none;
      position: fixed;
      transition: opacity 250ms ease;
      z-index: ${INVERT_OVERLAY_INDEX};

      &[data-enabled] {
        opacity: 1;
        transition-duration: 5s;
        transition-easing-function: cubic-bezier(0.25, 1, 0.5, 1);
      }
    }
  `,
  imperativeSlotting: false,
}) {
  /** Wrapped overlay element. */
  #overlayElement: HTMLElement;

  constructor() {
    super();

    this.#overlayElement = throwIfNull(
      this.shadowRoot.getElementById("overlay")
    );
  }

  connectedCallback() {
    if (
      !matchMedia("(prefers-color-scheme: dark)").matches ||
      localStorage.getItem("light-theme") == "true"
    )
      this.#overlayElement.setAttribute("data-enabled", "");
  }

  /** Toggles the invert overlay. */
  toggle() {
    if (this.#overlayElement.hasAttribute("data-enabled"))
      this.#overlayElement.removeAttribute("data-enabled");
    else this.#overlayElement.setAttribute("data-enabled", "");

    localStorage.setItem(
      "light-theme",
      this.#overlayElement.hasAttribute("data-enabled") ? "true" : "false"
    );
  }
}

customElements.define("x-invert-overlay", InvertOverlayElement);

declare global {
  interface HTMLElementTagNameMap {
    "x-invert-overlay": InvertOverlayElement;
  }
}
