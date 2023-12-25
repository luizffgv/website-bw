interface ComponentParameters {
  /**
   * String containing the contents of the style sheet for the element to use.
   */
  styles: string;

  /**
   * String containing the initial HTML contents of the element's shadow DOM.
   */
  template: string;

  /** Whether slots will be imperatively or declaratively assigned. */
  imperativeSlotting: boolean;
}

/**
 * Creates a class for a component to extend.
 *
 * @param parameters - Class creation parameters.
 * @returns Class creation parameters.
 */
export function Component(parameters: ComponentParameters) {
  return class Component extends HTMLElement {
    static #styles = new CSSStyleSheet();
    static {
      this.#styles.replaceSync(parameters.styles ?? "");
    }

    static #template = parameters.template ?? "";

    override shadowRoot!: ShadowRoot;

    constructor() {
      super();

      this.attachShadow({
        mode: "open",
        slotAssignment: parameters.imperativeSlotting ? "manual" : "named",
      });
      this.shadowRoot.innerHTML = Component.#template;
      this.shadowRoot.adoptedStyleSheets.push(Component.#styles);
    }
  };
}

/**
 * Sets the value for an element's attribute or removes that attribute if the
 * {@link value} is `null`.
 *
 * @param element - Element to modify.
 * @param name - Name of the attribute to modify.
 * @param value - New value of the attribute, or `null` for attribute removal.
 */
export function setAttribute(
  element: HTMLElement,
  name: string,
  value?: string
) {
  if (value == null) element.removeAttribute(name);
  else element.setAttribute(name, value);
}
