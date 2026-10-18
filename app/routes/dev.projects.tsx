import { Link } from "react-router";
import type { Route } from "./+types/dev.projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev/projects" },
    { name: "description", content: "Jonathon Orsi's projects." },
  ];
}

export default function Page() {
  return (
    <main>
      <p className="mt-8 text-2xl italic font-mono">
        Experimental and fun projects I've created.
      </p>
      <ul>
        <li className="mt-8">
          <a href="https://github.com/orsi/jinx" target="_blank" rel="noopener">
            jinx
          </a>{" "}
          is a barebones, reactive, functional JSX library for building
          web-based UI in Javascript.
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/roxanne"
            target="_blank"
            rel="noopener"
          >
            roxanne
          </a>{" "}
          is an experimental language compiler written in C.
        </li>
        <li className="mt-8">
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
          <p className="mt-2">
            Inspired by Nick Montfort's "Taroko Gorge," and other early poetry
            generators and bots, "Betical" recreates a brand new, randomly
            generated paragraph each time it is loaded. The images that
            constitute the letters and form the words are assemblage-letters
            produced by remixing a scan of the letters typed from Spinosa's own
            typewriter, an Olympia SM9.
          </p>
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/chromatic-tuner"
            target="_blank"
            rel="noopener"
          >
            Chromatic Tuner
          </a>{" "}
          was released in August 2022 on the App Store and Google Play as a
          React Native iOS/Android mobile application for tuning instruments.
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/chip-8c"
            target="_blank"
            rel="noopener"
          >
            chip-8c
          </a>{" "}
          is an emulator for the CHIP-8 interpreted programming language
          developed for 8-bit machines in the 1970s.
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/react-gamin"
            target="_blank"
            rel="noopener"
          >
            react-gamin
          </a>{" "}
          is a library for creating browser games in the functional, hook-based
          React way.
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/simpleeq"
            target="_blank"
            rel="noopener"
          >
            SimpleEQ
          </a>{" "}
          is a C++ audio plugin created with the JUCE framework.
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/orsi/zen-html"
            target="_blank"
            rel="noopener"
          >
            zen-html
          </a>{" "}
          is a Javascript, template string based, component library for
          rendering HTML elements.
        </li>
      </ul>

      <p className="text-2xl mt-8">Open source projects I've contributed to.</p>
      <ul>
        <li className="mt-8">
          <a href="https://deno.com/" target="_blank" rel="noopener">
            deno
          </a>
          , a modern JavaScript/TypeScript runtime by creator of NodeJs, Ryan
          Dahl. I contributed async TLS networking in Rust, working across the
          JS-to-Rust op layer with Tokio.
          <a
            href="https://github.com/denoland/deno/pull/3007"
            target="_blank"
            rel="noopener"
            className="block"
          >
            see contributions
          </a>
        </li>
        <li className="mt-8">
          {/* <img
            src={snes9xOsxUiImageSrc}
            alt="The image shows the Snes9x emulator's settings UI."
          /> */}
          <a href="https://www.snes9x.com/" target="_blank" rel="noopener">
            Snes9x
          </a>{" "}
          is a portable, freeware Super Nintendo Entertainment System (SNES)
          emulator. Contributed to the macOS port of Snes9x, redesigning the
          preferences UI to native macOS conventions, and extending the
          preferences system with new user-facing controls in Objective-C/Cocoa.
          <a
            href="https://github.com/snes9xgit/snes9x/pulls?q=is%3Apr+author%3Aorsi+"
            target="_blank"
            rel="noopener"
            className="block"
          >
            see contributions
          </a>
        </li>
        <li className="mt-8">
          <a
            href="https://github.com/ZaneDubya/UltimaXNA"
            target="_blank"
            rel="noopener"
          >
            UltimaXNA
          </a>
          : Open-source Ultima Online client in C#/XNA. Contributed spellbook
          and in-game features, from UI to reverse-engineered client-server
          packet handling.
          <a
            href="https://github.com/ZaneDubya/UltimaXNA/pulls?q=is%3Apr+author%3Aorsi+"
            target="_blank"
            rel="noopener"
            className="block"
          >
            see contributions
          </a>
        </li>
      </ul>
    </main>
  );
}
