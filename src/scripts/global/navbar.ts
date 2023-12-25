import { html } from "Scripts/tags";
import { InvertOverlayElement } from "./navbar/invert";

/** A navigation bar entry. */
interface Entry {
  /** Display name. */
  name: string;
  /** Preferred path followed by alternative paths to the page. */
  paths: [string, ...string[]];
}

/**
 * Makes sure that the document has an
 * {@link InvertOverlayElement | invert overlay} and returns it.
 *
 * @returns The {@link InvertOverlayElement | invert overlay} of the document.
 */
function getInvertOverlay(): InvertOverlayElement {
  let overlay = document.querySelector("x-invert-overlay");

  if (overlay == null) {
    overlay = new InvertOverlayElement();
    document.body.append(overlay);
  }

  return overlay;
}

/**
 * Creates a button to switch between light and dark modes.
 *
 * @returns Created button element.
 */
export default function createInvertSwitch(): HTMLElement {
  const overlay = getInvertOverlay();

  const invertSwitch = document.createElement("button");
  invertSwitch.type = "button";
  invertSwitch.role = "switch";
  invertSwitch.innerHTML = html`<!---->
    <span class="material-symbols-outlined">invert_colors</span>`;
  invertSwitch.addEventListener("click", () => {
    overlay.toggle();
  });

  return invertSwitch;
}

/** List of navigation bar entries. */
const ENTRIES = [
  {
    name: "Início",
    paths: ["/", "", "/index.html", "/index"],
  },
  {
    name: "Projetos",
    paths: ["/projects.html", "/projects"],
  },
] as const satisfies Entry[];

const navbar = document.createElement("nav");
navbar.id = "navbar";

const pages = document.createElement("div");
pages.id = "navbar__pages";
pages.append(
  ...ENTRIES.flatMap(({ name, paths }) => {
    const element = document.createElement("a");
    element.textContent = name;
    element.href = paths[0];

    if (paths.some((path) => path == window.location.pathname)) return [];

    return element;
  })
);

navbar.append(pages, createInvertSwitch());

document.body.insertBefore(navbar, document.body.firstChild);
