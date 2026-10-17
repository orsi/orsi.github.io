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
    <main className="mt-4">
      <p className="mt-6">
        I've spent most of my career working on problems that sit somewhere
        between products, user experience, and platform engineering. I like
        building features, and I tend to gravitate toward the work that makes
        everyone else's job easier: design systems, shared infrastructure,
        developer tooling, architecture, and modernizing codebases.
      </p>
      <p className="mt-6">
        I've built design system, shipped features, and spent a lot of time
        defining frontend standards, improving CI/CD, introducing AI-assisted
        development workflows, and making accessibility (a11y) and
        internationalization (i18n) part of the normal development process.
      </p>
      <p className="mt-6">
        I've moved between enterprise software, design agency startups, and
        product focused companies, which taught me to get comfortable learning
        new domains quickly without getting attached to particular technologies.
      </p>
      <p className="mt-6">
        I've excelled in frontend engineering because I typically think of
        software from the user's experience, though the users could be: a client
        on a marketing campaign website; a developer trying to build a new
        feature with the design system; or a data analyst wanting to generate
        reports from an SQL server. I like understanding whole system, and find
        myself enjoying the jump between React monrepos, backend services,
        databases, infrastructure, and deployment pipelines, depending on what
        needed attention.
      </p>
      <p className="mt-6">
        I write software because it's fun. Some of my side projects include a
        compiler, a CHIP-8 emulator, a JSX library, and a handful of graphics
        and audio experiments. I also write audio engines and compose music for
        indie games.
      </p>
      <Outlet />
    </main>
  );
}
