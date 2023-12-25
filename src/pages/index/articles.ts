//
// Behavior for opening a random article when a button is pressed.
//

import { trySpecify } from "@luizffgv/ts-conversions";

/** Represents an ar ticle . */
export type Article = {
  /** Wikipedia URL for the article. */
  url: string;
};

/** List of some articles I find interesting. */
const ARTICLES = [
  { url: "https://en.wikipedia.org/wiki/River_(typography)" },
  { url: "https://pt.wikipedia.org/wiki/Depress%C3%A3o_cortical_alastrante" },
  { url: "https://pt.wikipedia.org/wiki/Pangrama" },
  { url: "https://pt.wikipedia.org/wiki/Alimento_b%C3%A1sico" },
  { url: "https://pt.wikipedia.org/wiki/Engrama" },
  { url: "https://pt.wikipedia.org/wiki/For%C3%A7a_eletromotriz_inversa" },
  { url: "https://pt.wikipedia.org/wiki/Pampsiquismo" },
  { url: "https://pt.wikipedia.org/wiki/Carta-bomba" },
  { url: "https://pt.wikipedia.org/wiki/Hilaridade_fatal" },
  { url: "https://pt.wikipedia.org/wiki/Labilidade_emocional" },
] as const satisfies Article[];

const elements = {
  randomArticleButton: trySpecify(
    document.getElementById("random-article-button"),
    HTMLButtonElement
  ),
};

elements.randomArticleButton.addEventListener("click", () => {
  const url = ARTICLES[Math.floor(Math.random() * ARTICLES.length)]?.url;

  window.open(url, "_blank");
});
