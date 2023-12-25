import { throwIfNull } from "@luizffgv/ts-conversions";
import { Component } from "Scripts/component";
import { css, html } from "Scripts/tags";
import { ProjectRaw } from "projects-list";

/** Wraps a {@link ProjectRaw | project} as an HTML element. */
export default class ProjectElement extends Component({
  template: html`<!---->
    <div id="project">
      <div id="top">
        <span id="name"></span>
        <p id="description"></p>
      </div>
      <div id="bottom">
        <div id="buttons">
          <a id="view" target="_blank">Ver</a>
          <a id="repository" target="_blank">Repositório</a>
        </div>
      </div>
    </div>`,
  styles: css`
    @keyframes project {
      0% {
        translate: 0 50px;
      }

      15%,
      85% {
        translate: none;
      }

      100% {
        translate: 0 -50px;
      }
    }

    #project {
      @starting-style {
        opacity: 0;
      }

      border: 1px solid var(--color-fg);
      box-sizing: border-box;
      contain: content;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      max-width: 35ch;
      padding: 8px 16px;
      transition: opacity 250ms ease;

      animation: project linear;
      animation-timeline: view();
      animation-range: cover;

      #name {
        font-size: 1.2em;
        font-weight: bold;
      }

      #buttons {
        margin-top: auto;
        display: flex;
        gap: 2ch;
        justify-content: space-between;

        #view,
        #repository {
          color: inherit;
          cursor: none;
          font-weight: bold;
          opacity: 0;
          transition: opacity 250ms ease;

          #project:hover & {
            opacity: 1;
          }
        }
      }
    }
  `,
  imperativeSlotting: false,
}) {
  /** Elements in the component. */
  #elements: {
    name: HTMLElement;
    description: HTMLElement;
    view: HTMLElement;
    repository: HTMLElement;
  };

  /** Wrapped {@link ProjectRaw | project}. */
  #rawProject?: ProjectRaw;

  constructor() {
    super();

    this.#elements = {
      name: throwIfNull(this.shadowRoot.getElementById("name")),
      description: throwIfNull(this.shadowRoot.getElementById("description")),
      view: throwIfNull(this.shadowRoot.getElementById("view")),
      repository: throwIfNull(this.shadowRoot.getElementById("repository")),
    };
  }

  /**
   * Sets a project for this element to display.
   *
   * @param project - Project to display.
   * @returns `this`.
   */
  setProject(project: ProjectRaw): this {
    this.#rawProject = project;

    this.#elements.name.textContent = project.name;
    this.#elements.description.textContent = project.description;

    this.#elements.view.style.visibility = project.url ? "visible" : "hidden";
    this.#elements.view.setAttribute("href", project.url ?? "");

    this.#elements.repository.style.visibility = project.repository
      ? "visible"
      : "hidden";
    this.#elements.repository.setAttribute("href", project.repository ?? "");

    return this;
  }

  /** The wrapped {@link ProjectRaw | project} as set in {@link setProject}. */
  get raw(): ProjectRaw | undefined {
    if (this.#rawProject == undefined) return undefined;

    return { ...this.#rawProject };
  }
}

customElements.define("x-project", ProjectElement);

declare global {
  interface HTMLElementTagNameMap {
    "x-project": ProjectElement;
  }
}
