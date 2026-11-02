import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi" },
    { name: "description", content: "Jonathon Orsi's online profile." },
  ];
}

export default function Page() {
  return (
    <main>
      <h2 className="font-mono italic">Writing code like it's 1995.</h2>
      <p className="mt-6">
        I first wrote HTML in notepad for my Geocities website about Final
        Fantasy 6. Since then, I've built complex user interfaces, component
        design systems, enterprise-level microservice architectures, and
        improved internal tooling and CI/CD pipelines.
      </p>

      <p className="mt-6">
        I have an eclectic mix of side projects that include: a custom
        programming language; a CHIP-8 emulator; a JSX rendering library; plus a
        handful of graphics and audio experiments. Check out my GitHub profile{" "}
        <a href="https://github.com/orsi" rel="noreferrer noopener">
          here
        </a>
        .
      </p>
    </main>
  );
}
