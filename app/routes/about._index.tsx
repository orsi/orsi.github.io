import type { Route } from "./+types/about._index";
import { Link, Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /about" },
    { name: "description", content: "About Jonathon Orsi." },
  ];
}

export default function Page() {
  return (
    <main>
      {/* <h2>Digital infrastructure for the north.</h2>
      <p>
        An agency dedicated to building out digital platforms hosted and ran
        wholly inside Canada.
      </p> */}
      {/* 
      <section>
        <h3>Services</h3>
        <ul className="list-inside list-disc">
          <li>Domain registration and management</li>
          <li>TLS/SSL Certificate generation</li>
          <li>Hosting</li>
          <li>CI/CD Deployment</li>
        </ul>
      </section> */}

      <p className="font-mono italic">27 years of sound.</p>
      <p className="mt-6">
        I started music at 13 when my Uncle Steve and his acoustic guitar moved
        in with us. The first song I learned to play was Kryptonite by 3 Doors
        Down, and my first band was jazz-ish in grade 10, where we played the
        Peter Gunn theme on loop at family events.
      </p>
      <p className="mt-6">
        I am one of four in{" "}
        <a href="https://jojogun.ca" rel="noopener" target="_blank">
          JoJo Gun & the Bullets
        </a>
        . I've played in a motown coverband called{" "}
        <a
          href="https://www.youtube.com/watch?v=rjnPU3ZYWRk"
          rel="noopener"
          target="_blank"
        >
          Gooding Jones & the Overtones
        </a>
        , and was the guitar-half of Lindsey Buckingham in{" "}
        <a
          href="https://www.youtube.com/watch?v=zOHUfhNQsoc"
          rel="noopener"
          target="_blank"
        >
          The Dirty Rumours
        </a>
        , a Fleetwood Mac Rumours album tribute band.
      </p>
      <p className="mt-8 font-mono italic">
        Over the years I've dabbled in composition and scoring of commercials
        and video games.
      </p>

      <p className="mt-6">
        <a
          href="https://adarkroom.doublespeakgames.com/"
          rel="noopener"
          target="_blank"
        >
          A Dark Room
        </a>{" "}
        is an open-source textual browser rpg that I programmed a Javascript
        audio engine for to play the 88 lo-fi sfx and melodic loops I made (I'm
        in the{" "}
        <a
          href="https://en.wikipedia.org/wiki/A_Dark_Room#:~:text=October%2012%2C%202020%2C%20an%20open%2Dsource%20contributor%20Jonathon%20Orsi"
          rel="noopener"
          target="_blank"
        >
          wikipedia
        </a>{" "}
        article!). For{" "}
        <a
          href="https://store.steampowered.com/app/1709350/Bat_Boy/"
          rel="noopener"
          target="_blank"
        >
          Bat Boy
        </a>
        , I absolutely abused Plogue's{" "}
        <a
          href="https://www.plogue.com/products/chipsounds.html"
          rel="noopener"
          target="_blank"
        >
          chipsounds
        </a>{" "}
        to emulate the NES' bleeps and bloops to fit naturally with the 8-bit
        graphics. I composed half the soundtrack of{" "}
        <a
          href="https://store.steampowered.com/app/1941370/Dancin_Divas/"
          rel="noopener"
          target="_blank"
        >
          Dancin' Divas
        </a>{" "}
        with{" "}
        <a href="https://www.dmms.com.au/" rel="noopener" target="_blank">
          Evader Music
        </a>
        . There's also a plethora of my{" "}
        <a href="https://orsilocus.bandcamp.com" rel="noopener" target="_blank">
          incomplete game soundtracks
        </a>{" "}
        on Bandcamp.
      </p>
      <p className="mt-8 font-mono italic">
        Production, recording, and mixing.
      </p>
      <p className="mt-6">
        I ocassionally produce, record, and mix music through{" "}
        <a
          href="https://www.facebook.com/tweedside/"
          rel="noopener"
          target="_blank"
        >
          Tweedside
        </a>{" "}
        recording studio in Stoney Creek, Ontario. Check out the album{" "}
        <a
          href="https://open.spotify.com/album/3Rq1lo7hugtP0mA3urJO5n?si=aj3QPmsTTOWzontjLJ9Ovw"
          rel="noopener"
          target="_blank"
        >
          Yesterday's Kill
        </a>{" "}
        by Panic Line.
      </p>

      <p className="mt-8 font-mono italic">
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

      <p className="mt-8">Open source projects I've contributed to.</p>
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

      <p className="mt-8 font-mono italic">Companies I've worked for.</p>
      <div className="mt-8">
        <h3 className="font-bold">
          Software Engineer (L5) at{" "}
          <a href="https://www.meltwater.com" target="_blank" rel="noopener">
            Meltwater
          </a>
        </h3>
        <p className="">2023 {"->"} Present</p>
        <ul className="mt-2 list-inside list-disc">
          <li>
            Architect and led the adoption of a new design system based on
            React/MUI used by 500+ engineers, establishing shared component
            architecture, accessibility, testing, and UX standards.
          </li>
          <li>
            Drove frontend and technical direction in React/TypeScript, API
            integration (REST/GraphQL), a11y, and i18n across 12+ languages.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-bold">
          Lead Software Engineer at{" "}
          <a href="https://thrillworks.com" target="_blank" rel="noopener">
            Thrillworks
          </a>
        </h3>
        <p className="">2020 {"->"} 2023</p>
        <ul className="mt-2 list-inside list-disc">
          <li>
            Built and deployed 12+ production React-based web platforms for
            enterprise clients, including ecommerce, financial services,
            healthcare, and marketing experiences.
          </li>
          <li>
            Led and mentored mid- and senior-level engineers through technical
            guidance, code reviews, and 1:1s, while partnering with Product,
            Design, and Engineering to drive complex initiatives from
            architecture through delivery.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-bold">
          Senior Developer at{" "}
          <a href="https://bombardier.com" target="_blank" rel="noopener">
            Bombardier
          </a>
        </h3>
        <p className="">2016 {"->"} 2020</p>
        <ul className="mt-2 list-inside list-disc">
          <li>
            Led end-to-end requirements gathering, architecture design, and
            application UI/UX design and development for 20+ C# .NET
            applications.
          </li>
          <li>
            Replaced manual workflows, approval systems, and improved
            operational efficiency on production-floor operations across QA and
            logistical organizations.
          </li>
        </ul>
      </div>

      <p className="mt-8 font-mono italic">My educational background.</p>
      <ul>
        <li className="mt-8">
          <a href="https://www.ocadu.ca/" target="_blank" rel="noopener">
            OCAD University
          </a>
          <p>2022, Digital Media Certificate</p>
        </li>
        <li className="mt-8">
          <a href="https://www.georgebrown.ca/" target="_blank" rel="noopener">
            George Brown Polytechnic
          </a>
          <p>2017, Computer Programming and Analysis (T127)</p>
        </li>
        <li className="mt-8">
          <a href="https://www.utoronto.ca/" target="_blank" rel="noopener">
            University of Toronto
          </a>
          <p>2013, HBa, Latin and Philosophy</p>
        </li>
      </ul>
    </main>
  );
}
