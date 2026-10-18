import type { Route } from "./+types/dev._index";

import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev" },
    { name: "description", content: "Jonathon Orsi /dev." },
  ];
}

export default function Page() {
  return (
    <main>
      <p className="mt-8 text-2xl italic font-mono">
        Writing code like it's 1995.
      </p>
      <p className="mt-6">
        I first wrote HTML in notepad for my Geocities website about Final
        Fantasy 6. Since then, I've built complex and highly interactive user
        interfaces, theme-based design systems with compositional components,
        while establishing code quality and standards for teams, improving CI/CD
        pipelines, and migrated legacy codebases into modern tech stacks.
      </p>
      <p className="mt-6">
        Software is fun. I have an eclectic mix of side projects that include a
        my own programming language compiler, a CHIP-8 emulator, a JSX library,
        and a handful of graphics and audio experiments. Check out my GitHub
        profile{" "}
        <a href="https://github.com/orsi" rel="noreferrer noopener">
          here
        </a>
        .
      </p>

      <Outlet />
    </main>
  );
}
