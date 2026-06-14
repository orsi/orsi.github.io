import { useEffect, useState } from 'jinx';
import snes9xOsxUiImageSrc from './assets/snes9x-osx-ui.gif';
import beticalImageSrc from './assets/betical.png';
import discworldImageSrc from './assets/discworld.gif';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
  }, [showTooltip]);

  const onClickCopyEmail = (_e: Event) => {
    navigator.clipboard.writeText('jonathon.orsi@gmail.com');
    setShowTooltip(true);
    ``;
    const tooltip = document.querySelector<HTMLSpanElement>('#tooltip-copied');
    if (tooltip) {
      tooltip.style.display = 'block';
    }
  };

  return (
    <>
      <aside
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          margin: 'var(--spacing-4) var(--spacing-8)',
          padding: 'var(--spacing-4)',
          transformOrigin: 'top left',
          transform: 'skew(-4deg) scale(.5)',
          backgroundColor: 'hsla(0, 0%, 0%, .6)',
          zIndex: '1',
        }}
      >
        <h1>jon/orsi</h1>

        <button
          onClick={onClickCopyEmail}
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            display: 'flex',
            fontFamily: 'inherit',
            fontSize: '.6rem',
            gap: 'var(--spacing-2)',
            position: 'relative',
          }}
        >
          {showTooltip ? 'jonathon.orsi@gmail.com' : 'j••••••••••••@•••••.•••'}
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              stroke="white"
              x="8"
              y="4"
              width="12"
              height="12"
              rx="2"
              ry="2"
            />
            <rect
              stroke="white"
              x="5"
              y="8"
              width="12"
              height="12"
              rx="2"
              ry="2"
            />
          </svg>
          <span
            id="tooltip-copied"
            style={{
              display: showTooltip ? 'block' : 'none',
              fontSize: '.5rem',
              position: 'absolute',
              top: '100%',
              left: '100%',
              transform: 'translate(-25%,-50%)',
            }}
          >
            Copied!
          </span>
        </button>

        <div>
          <a href="https://github.com/orsi" target="_blank" rel="noopener">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="white"
                d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"
              ></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/jonorsi"
            target="_blank"
            rel="noopener"
          >
            <svg
              fill="white"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>linkedin</title>
              <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
            </svg>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#work">work</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#online">online</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#education">education</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#open-source">open source</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'var(--spacing-4)',
          zIndex: '0',
        }}
      >
        <div
          id="work"
          style={{
            paddingTop: 'var(--spacing-48)',
          }}
        />
        <h2>work</h2>
        <ul>
          <li>
            Software Engineer (L5) at{' '}
            <a href="https://www.meltwater.com" target="_blank" rel="noopener">
              Meltwater
            </a>
            , an online media, social, and consumer intelligence company.
          </li>
          <li>
            Senior Developer at{' '}
            <a href="https://bombardier.com" target="_blank" rel="noopener">
              Bombardier
            </a>
            , Canada's largest aerospace manufacturer of business jets.
          </li>
          <li>
            Lead Software Engineer at{' '}
            <a href="https://thrillworks.com" target="_blank" rel="noopener">
              Thrillworks
            </a>
            , a digital development agency specializing in web, mobile, and
            marketing solutions.
          </li>
        </ul>

        <h2
          id="online"
          style={{
            marginTop: 'var(--spacing-48)',
          }}
        >
          online
        </h2>
        <ul>
          <li>
            <a
              href="https://adarkroom.doublespeakgames.com/"
              target="_blank"
              rel="noopener"
            >
              A Dark Room
            </a>{' '}
            is an open-source, text-based, browser role-playing game. I built
            the audio engine with the Web Audio API and composed 88 original
            compositions to create a seamless, immersive audio experience.
            <div>
              <a
                href="https://github.com/doublespeakgames/adarkroom/pulls?q=+is%3Apr+author%3Aorsi+"
                target="_blank"
                rel="ooopener"
                class="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li>JavaScrit</li>
          <li>Web Audio API</li>
          <li>Audio Playback Engine</li>
          <li>Sound Asset</li>
          <li>Pipeline</li>
        </ul> */}
          </li>
          <li>
            <a href="https://code-x.live/" target="_blank" rel="noopener">
              Code X
            </a>
            {` `}is a sound poem and a gallery installation piece by{' '}
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
          <li>
            <a href="https://jojogun.ca" target="_blank" rel="noopener">
              jojogun.ca
            </a>{' '}
            is the the online presence of Jo Jo Gun and the Bullets. I setup,
            built, and deployed the site in AWS. Frontend crafted in React,
            brought to life through a procedural glitch animation system.
          </li>
        </ul>

        <h2
          id="education"
          style={{
            marginTop: 'var(--spacing-48)',
          }}
        >
          education
        </h2>
        <ul>
          <li>
            Digital Media,{' '}
            <a href="https://www.ocadu.ca/" target="_blank" rel="noopener">
              OCAD University
            </a>
            .
          </li>
          <li>
            Computer Programming and Analysis,{' '}
            <a
              href="https://www.georgebrown.ca/"
              target="_blank"
              rel="noopener"
            >
              George Brown Polytechnic
            </a>
            .
          </li>
          <li>
            HBa, Latin and Philosophy,{' '}
            <a href="https://www.utoronto.ca/" target="_blank" rel="noopener">
              University of Toronto
            </a>
            .
          </li>
        </ul>

        <h2
          id="projects"
          style={{
            marginTop: 'var(--spacing-48)',
          }}
        >
          side projects
        </h2>
        <ul>
          <li>
            <a
              href="https://github.com/orsi/jinx"
              target="_blank"
              rel="noopener"
            >
              jinx
            </a>{' '}
            is a barebones, reactive, functional JSX library for building
            web-based UI in Javascript. This site is built completely with jinx.
          </li>
          <li>
            <a
              href="https://github.com/orsi/roxanne"
              target="_blank"
              rel="noopener"
            >
              roxanne
            </a>{' '}
            is an experimental language compiler written in C.
          </li>
          <li>
            <a
              href="https://github.com/orsi/chromatic-tuner"
              target="_blank"
              rel="noopener"
            >
              Chromatic Tuner
            </a>{' '}
            was released in August 2022 on the App Store and Google Play as a
            React Native iOS/Android mobile application for tuning instruments.
          </li>
          <li>
            <a
              href="https://github.com/orsi/chip-8c"
              target="_blank"
              rel="noopener"
            >
              chip-8c
            </a>{' '}
            is an emulator for the CHIP-8 interpreted programming language
            developed for 8-bit machines in the 1970s.
          </li>
          <li>
            <a
              href="https://github.com/orsi/react-gamin"
              target="_blank"
              rel="noopener"
            >
              react-gamin
            </a>{' '}
            is a library for creating browser games in the functional,
            hook-based React way.
          </li>
          <li>
            <a
              href="https://github.com/orsi/simpleeq"
              target="_blank"
              rel="noopener"
            >
              SimpleEQ
            </a>{' '}
            is a C++ audio plugin created with the JUCE framework.
          </li>
          <li>
            <a
              href="https://github.com/orsi/zen-html"
              target="_blank"
              rel="noopener"
            >
              zen-html
            </a>{' '}
            is a Javascript, template string based, component library for
            rendering HTML elements.
          </li>
        </ul>

        <h2
          id="open-source"
          style={{
            marginTop: 'var(--spacing-48)',
          }}
        >
          open source
        </h2>
        <ul>
          <li>
            <a href="https://deno.com/" target="_blank" rel="noopener">
              deno
            </a>
            , a modern JavaScript/TypeScript runtime. I contributed async TLS
            networking in Rust, working across the JS-to-Rust op layer with
            Tokio. Code reviewed by Ryan Dahl (creator of Node.js and Deno).{' '}
            <div>
              <a
                href="httdivs://github.com/denoland/deno/pull/3007"
                target="_blank"
                rel="ooopener"
                class="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li>Rust</li>
          <li>Javascript/Typescript</li>
          <li>Tokio</li>
          <li>tokio-rustls</li>
          <li>Async/Futures</li>
          <li>TLS</li>
        </ul> */}
          </li>
          <li>
            <img
              src={snes9xOsxUiImageSrc}
              alt="The image shows the Snes9x emulator's settings UI."
            />
            <a href="https://www.snes9x.com/" target="_blank" rel="noopener">
              Snes9x
            </a>{' '}
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
                class="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li>Objective-C</li>
          <li>Cocoa</li>
          <li>AppKit</li>
        </ul> */}
          </li>
          <li>
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
                class="contribution"
              >
                see contributions
              </a>
            </div>
            {/* <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
          <li>C#</li>
          <li>XNA</li>
          <li>TCP/IP</li>
          <li>UTF-8 Serialization</li>
          <li>Binary Protocol Parsing</li>
        </ul> */}
          </li>
        </ul>

        <h2>procedural art</h2>
        <ul>
          <li>
            <img
              alt="An overview of a procedurally generated 'disc' world, with varying colours representing different biomes."
              src={discworldImageSrc}
              style={{ width: '100%' }}
            />
            <a
              href="https://github.com/orsi/discworld"
              target="_blank"
              rel="noopener"
            >
              discworld
            </a>{' '}
            procedurally generates a dynamic world, simulating 13 colourful
            biomes from an initial text seed.
          </li>
          <li>
            <img
              src={beticalImageSrc}
              alt="A passage from betical, displaying a poem-like structure composed of unrecognizable letters."
            />
            <a
              href="https://github.com/orsi/betical"
              target="_blank"
              rel="noopener"
            >
              betical
            </a>
            , a born-digital paragraph generator composed with remixed typed
            assemblage-letters. co-created with{' '}
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
      </main>
    </>
  );
}
