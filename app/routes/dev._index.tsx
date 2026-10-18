import type { Route } from "./+types/dev._index";

import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev" },
    { name: "description", content: "Jonathon Orsi /dev." },
  ];
}

const RESUME_KEYWORDS = [
  "design systems",
  "product engineering",
  "frontend standards",
  "test driven development (TDD)",
  "ci/cd pipelines",
  "react",
  "javascript/typescript",
  "state management",
  "react testing library",
  "jest",
  "cypress",
  "playwright",
  "ai-assisted workflows",
  "accessibility (a11y)",
  "internationalization (i18n)",
];
export default function Page() {
  return (
    <main className="mt-4">
      <p className="mt-6 text-2xl italic font-mono">
        Hi, my name is Jonathon Orsi.
      </p>
      <p className="mt-6">
        I've been coding since 1996 when I wrote HTML using notepad for my first
        Geocities website. Most of my development career has been working on
        problems that sit somewhere between user and developer experience. I
        have built complex and highly interactive interfaces, theme-based design
        systems with compositional components, established code quality and
        standards via continuous integrations and continuous delivery (CI/CD)
        pipelines, and migrated legacy codebases into modern tech stacks.
      </p>
      <p className="mt-6">
        I've built enterprise software in large corporate offices and cloud
        microservice architectures and SEO optimized marketing campaigns at
        design agency startups. I am comfortable learning new domains and
        adapting quickly to contribute in both dynamic team settings and as an
        independent contribution.
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

      {/* <p className="mt-6">Keywords that you would see on my resume:</p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {RESUME_KEYWORDS.map((keyword) => {
          return (
            <li
              className="bg-maroon-700/80 shadow shadow-maroon-800/70 rounded-md px-2 py-1 text-gray-100/90 text-xs text-nowrap"
              key={keyword}
            >
              {keyword}
            </li>
          );
        })}
      </ul> */}
      <Outlet />
    </main>
  );
}
