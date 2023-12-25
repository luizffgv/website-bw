//
// Behavior for opening a random song when a button is pressed.
//

import { trySpecify } from "@luizffgv/ts-conversions";

/** Represents a song. */
export type Song = {
  /** Title of the song. */
  title: string;
  /** Artists of the song. */
  artists: string[];
  /** Spotify ID for the song. */
  spotifyID: string;
};

/** List of some songs I like. */
const SONGS = [
  {
    title: "Amsterdam",
    artists: ["Super Monkeys"],
    spotifyID: "1QQGSjRQCznet9gpmelgjV",
  },
  {
    title: "Close To The Sun",
    artists: ["TheFatRat", "Anjulie"],
    spotifyID: "7CQjnYsGLdtcrsp95oBpCv",
  },
  {
    title: "Inferno",
    artists: ["CPX", "HUX"],
    spotifyID: "4jRXeFRViCC6oe0yK3btGt",
  },
  {
    title: "Mahala",
    artists: ["Misha Miller", "Sasha Lopez"],
    spotifyID: "00PT9Iwb5tKVXCXBRavvIW",
  },
  {
    title: "Meant for You",
    artists: ["OMFG"],
    spotifyID: "7Aja4tskn9P5iXw4h4Y1p8",
  },
  {
    title: "Nightlight",
    artists: ["ILLENIUM", "Annika Wells"],
    spotifyID: "7ksAGloyLZyKThB86rErvT",
  },
  {
    title: "No Fun",
    artists: ["Armin van Buuren", "The Stickmen Project"],
    spotifyID: "1q3qh7hEJrPmPH7uOteYSr",
  },
  {
    title: "Only Love Can Hurt Like This",
    artists: ["Paloma Faith"],
    spotifyID: "62ke5zFUJN6RvtXZgVH0F8",
  },
  {
    title: "PLAY",
    artists: ["Alan Walker", "K-391", "Tungevaag", "Mangoo"],
    spotifyID: "4jp4Z02kzzg8gK0NmDGgml",
  },
  {
    title: "Pretty Ugly",
    artists: ["TIMMS"],
    spotifyID: "4qs8lh1gD7DbxC62wmoS62",
  },
  {
    title: "Serotonin Killer",
    artists: ["TIMMS"],
    spotifyID: "4MxxwUfOuM3aVO2hJsiE7q",
  },
  {
    title: "Sunday Night",
    artists: ["Holy Molly", "LIZOT"],
    spotifyID: "7IAFfnLZEm7zPyTBNjjdYb",
  },
  {
    title: "Sweet Boi",
    artists: ["Chevy"],
    spotifyID: "2Y5elCs4h7qQ37fbVuGHrY",
  },
  {
    title: "Take My Breath Away",
    artists: ["Berlin"],
    spotifyID: "3Z9Belc04X390cxHd0NC7G",
  },
  {
    title: "Take You To Hell",
    artists: ["Ava Max"],
    spotifyID: "0TxOB9JSgYXjPVR6uWAyfM",
  },
  {
    title: "Tempo",
    artists: ["Margaret"],
    spotifyID: "0yeg0NZmcZu6y6G9sdJliL",
  },
  {
    title: "The Calling",
    artists: ["TheFatRat", "Laura Brehm"],
    spotifyID: "2k1bFfcPIRTMeCGO48F0OE",
  },
  {
    title: "Those Eyes",
    artists: ["New West"],
    spotifyID: "2psRActEWsTlYYd7EDoyVR",
  },
  {
    title: "Tokyo Drift",
    artists: ["EMDI"],
    spotifyID: "0A8rvkDkZRTH3UgYGWxFnp",
  },
  {
    title: "When The Sun Loves The Moon",
    artists: ["Reinaeiry"],
    spotifyID: "01TvX9axSgLAg7MEmk9npe",
  },
] as const satisfies Song[];

const elements = {
  newSongButton: trySpecify(
    document.getElementById("new-song-button"),
    HTMLButtonElement
  ),
};

elements.newSongButton.addEventListener("click", () => {
  const songID = SONGS[Math.floor(Math.random() * SONGS.length)]?.spotifyID;

  window.open(`https://open.spotify.com/track/${songID}`, "_blank");
});
