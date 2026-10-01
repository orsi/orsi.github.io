import { useEffect } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi" },
    { name: "description", content: "Jonathon Orsi's digital home." },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl m-auto">
        <h1 className="text-4xl tracking-wider font-serif">jonathon orsi</h1>
        <hr className="border-slate-800" />

        <h2 id="work">work</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            Software Engineer (L5) at{" "}
            <a href="https://www.meltwater.com" target="_blank" rel="noopener">
              Meltwater
            </a>
            , an online media, social, and consumer intelligence company.
          </li>
          <li className="list-item mt-2">
            Senior Developer at{" "}
            <a href="https://bombardier.com" target="_blank" rel="noopener">
              Bombardier
            </a>
            , Canada's largest aerospace manufacturer of business jets.
          </li>
          <li className="list-item mt-2">
            Lead Software Engineer at{" "}
            <a href="https://thrillworks.com" target="_blank" rel="noopener">
              Thrillworks
            </a>
            , a digital development agency specializing in web, mobile, and
            marketing solutions.
          </li>
        </ul>

        <h2 id="online">online</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            <a
              href="https://adarkroom.doublespeakgames.com/"
              target="_blank"
              rel="noopener"
            >
              A Dark Room
            </a>{" "}
            is an open-source, text-based, browser role-playing game. I built
            the audio engine with the Web Audio API and composed 88 original
            compositions to create a seamless, immersive audio experience.
            <div>
              <a
                href="https://github.com/doublespeakgames/adarkroom/pulls?q=+is%3Apr+author%3Aorsi+"
                target="_blank"
                rel="ooopener"
                className="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li className="list-item mt-2">JavaScrit</li>
          <li className="list-item mt-2">Web Audio API</li>
          <li className="list-item mt-2">Audio Playback Engine</li>
          <li className="list-item mt-2">Sound Asset</li>
          <li className="list-item mt-2">Pipeline</li>
        </ul> */}
          </li>
          <li className="list-item mt-2">
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
          <li className="list-item mt-2">
            <a href="https://jojogun.ca" target="_blank" rel="noopener">
              jojogun.ca
            </a>{" "}
            is the the online presence of Jo Jo Gun and the Bullets. I setup,
            built, and deployed the site in AWS. Frontend crafted in React,
            brought to life through a procedural glitch animation system.
          </li>
        </ul>

        <h2 id="education">education</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            Digital Media,{" "}
            <a href="https://www.ocadu.ca/" target="_blank" rel="noopener">
              OCAD University
            </a>
            .
          </li>
          <li className="list-item mt-2">
            Computer Programming and Analysis,{" "}
            <a
              href="https://www.georgebrown.ca/"
              target="_blank"
              rel="noopener"
            >
              George Brown Polytechnic
            </a>
            .
          </li>
          <li className="list-item mt-2">
            HBa, Latin and Philosophy,{" "}
            <a href="https://www.utoronto.ca/" target="_blank" rel="noopener">
              University of Toronto
            </a>
            .
          </li>
        </ul>

        <h2 id="projects">side projects</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            <a
              href="https://github.com/orsi/jinx"
              target="_blank"
              rel="noopener"
            >
              jinx
            </a>{" "}
            is a barebones, reactive, functional JSX library for building
            web-based UI in Javascript. This site is built completely with jinx.
          </li>
          <li className="list-item mt-2">
            <a
              href="https://github.com/orsi/roxanne"
              target="_blank"
              rel="noopener"
            >
              roxanne
            </a>{" "}
            is an experimental language compiler written in C.
          </li>
          <li className="list-item mt-2">
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
          <li className="list-item mt-2">
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
          <li className="list-item mt-2">
            <a
              href="https://github.com/orsi/react-gamin"
              target="_blank"
              rel="noopener"
            >
              react-gamin
            </a>{" "}
            is a library for creating browser games in the functional,
            hook-based React way.
          </li>
          <li className="list-item mt-2">
            <a
              href="https://github.com/orsi/simpleeq"
              target="_blank"
              rel="noopener"
            >
              SimpleEQ
            </a>{" "}
            is a C++ audio plugin created with the JUCE framework.
          </li>
          <li className="list-item mt-2">
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

        <h2 id="open-source">open source</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            <a href="https://deno.com/" target="_blank" rel="noopener">
              deno
            </a>
            , a modern JavaScript/TypeScript runtime. I contributed async TLS
            networking in Rust, working across the JS-to-Rust op layer with
            Tokio. Code reviewed by Ryan Dahl (creator of Node.js and Deno).{" "}
            <div>
              <a
                href="httdivs://github.com/denoland/deno/pull/3007"
                target="_blank"
                rel="ooopener"
                className="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li className="list-item mt-2">Rust</li>
          <li className="list-item mt-2">Javascript/Typescript</li>
          <li className="list-item mt-2">Tokio</li>
          <li className="list-item mt-2">tokio-rustls</li>
          <li className="list-item mt-2">Async/Futures</li>
          <li className="list-item mt-2">TLS</li>
        </ul> */}
          </li>
          <li className="list-item mt-2">
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
            preferences system with new user-facing controls in
            Objective-C/Cocoa.
            <div>
              <a
                href="https://github.com/snes9xgit/snes9x/pulls?q=is%3Apr+author%3Aorsi+"
                target="_blank"
                rel="ooopener"
                className="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li className="list-item mt-2">Objective-C</li>
          <li className="list-item mt-2">Cocoa</li>
          <li className="list-item mt-2">AppKit</li>
        </ul> */}
          </li>
          <li className="list-item mt-2">
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
            <div>
              <a
                href="https://github.com/ZaneDubya/UltimaXNA/pulls?q=is%3Apr+author%3Aorsi+"
                target="_blank"
                rel="ooopener"
                className="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li className="list-item mt-2">C#</li>
          <li className="list-item mt-2">XNA</li>
          <li className="list-item mt-2">TCP/IP</li>
          <li className="list-item mt-2">UTF-8 Serialization</li>
          <li className="list-item mt-2">Binary Protocol Parsing</li>
        </ul> */}
          </li>
        </ul>

        <h2 id="art">procedural art</h2>
        <ul className="list-disc list-inside">
          <li className="list-item mt-2">
            {/* <img
            alt="An overview of a procedurally generated 'disc' world, with varying colours representing different biomes."
            src={discworldImageSrc}
            style={{ width: "100%" }}
          /> */}
            <a
              href="https://github.com/orsi/discworld"
              target="_blank"
              rel="noopener"
            >
              discworld
            </a>{" "}
            procedurally generates a dynamic world, simulating 13 colourful
            biomes from an initial text seed.
          </li>
          <li className="list-item mt-2">
            {/* <img
            src={beticalImageSrc}
            alt="A passage from betical, displaying a poem-like structure composed of unrecognizable letters."
          /> */}
            <a
              href="https://github.com/orsi/betical"
              target="_blank"
              rel="noopener"
            >
              betical
            </a>
            , a born-digital paragraph generator composed with remixed typed
            assemblage-letters. co-created with{" "}
            <a
              href="https://genericpronoun.com/"
              target="_blank"
              rel="noopener"
            >
              Dani Spinosa
            </a>
            .
          </li>
        </ul>
      </div>
    </main>
  );
}
