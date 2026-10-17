import { Link } from "react-router";
import type { Route } from "./+types/dev.web";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev/web" },
    { name: "description", content: "Jonathon Orsi /dev/web." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <div className="max-w-3xl m-auto mt-4">
        <h2 id="online">online</h2>
        <ul>
          <li className="mt-4">
            <p>
              <a
                href="https://adarkroom.doublespeakgames.com/"
                target="_blank"
                rel="noopener"
              >
                A Dark Room
              </a>{" "}
              is an open-source, text-based, browser role-playing game. I built
              the audio engine with the Web Audio API and composed 88 original
              compositions to create a seamless, immersive audio experience.{" "}
              <a
                href="https://github.com/doublespeakgames/adarkroom/pulls?q=+is%3Apr+author%3Aorsi+"
                target="_blank"
                rel="ooopener"
              >
                see contributions
              </a>
            </p>
          </li>
          <li className="mt-4">
            <a href="https://code-x.live/" target="_blank" rel="noopener">
              Code X
            </a>
            {` `}is a sound poem and a gallery installation piece by{" "}
            <a
              href="https://www.wmarksutherland.com/"
              target="_blank"
              rel="noopener"
            >
              W. Mark Sutherland
            </a>
            . Working with Mark, I ported his Adobe Flash version of Code X to
            the web, rebuilding the audio engine from scratch with a custom DSP
            chain — convolution reverb, wave shaping, and mouse-driven pitch and
            stereo panning.
          </li>
          <li className="mt-4">
            <a href="https://jojogun.ca" target="_blank" rel="noopener">
              jojogun.ca
            </a>{" "}
            is the the online presence of Jo Jo Gun and the Bullets. I setup,
            built, and deployed the site in AWS. Frontend crafted in React,
            brought to life through a procedural glitch animation system.
          </li>
        </ul>

        <h2 id="art">procedural art</h2>
        <ul>
          <li className="mt-4">
            {/* <img
            src={beticalImageSrc}
            alt="A passage from betical, displaying a poem-like structure composed of unrecognizable letters."
          /> */}
            <p>
              <a
                href="https://github.com/orsi/betical"
                target="_blank"
                rel="noopener"
              >
                "Betical"
              </a>{" "}
              is a born-digital paragraph generator; concept and art by{" "}
              <a
                href="https://genericpronoun.com/"
                target="_blank"
                rel="noopener"
              >
                Dani Spinosa
              </a>
              , programming by <Link to="/">Jon Orsi</Link>.
            </p>
            <p className="mt-4">
              Inspired by Nick Montfort's "Taroko Gorge," and other early poetry
              generators and bots, "Betical" recreates a brand new, randomly
              generated paragraph each time it is loaded. The images that
              constitute the letters and form the words are assemblage-letters
              produced by remixing a scan of the letters typed from Spinosa's
              own typewriter, an Olympia SM9.
            </p>
            <p className="mt-4">
              Special thanks to Stacey Schmidt for design input, and Bradley
              Connolly for early programming direction.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
