import type { Route } from "./+types/music._index";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /music" },
    { name: "description", content: "Jonathon Orsi's music." },
  ];
}

export default function Page() {
  return (
    <main>
      <p className="mt-8 text-2xl italic font-mono">
        27 years of sound.
      </p>
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
      <p className="mt-8 text-2xl italic font-mono">
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
      <p className="mt-8 text-2xl italic font-mono">
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
      <Outlet />
    </main>
  );
}
