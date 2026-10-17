import type { Route } from "./+types/dev.projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - dev/projects" },
    { name: "description", content: "Jonathon Orsi's projects." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <div className="max-w-3xl m-auto mt-4">
        <h2 id="projects">projects</h2>
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
      </div>
    </main>
  );
}
