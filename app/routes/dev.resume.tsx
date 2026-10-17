import type { Route } from "./+types/dev.resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - dev/resume" },
    { name: "description", content: "Jonathon Orsi's résumé." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <div className="max-w-3xl m-auto mt-4">
        <h2 id="work">work</h2>
        <div className="mt-4">
          <h3 className="font-bold">
            Software Engineer (L5) at{" "}
            <a href="https://www.meltwater.com" target="_blank" rel="noopener">
              Meltwater
            </a>
          </h3>
          <p>
            Led the adoption of a MUI design system used by 500+ engineers,
            establishing shared component architecture, accessibility, testing,
            and UX standards. Drove frontend and technical direction in
            React/TypeScript, API integration (REST/GraphQL), a11y, responsive
            design, and i18n across 12+ languages.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">
            Lead Software Engineer at{" "}
            <a href="https://thrillworks.com" target="_blank" rel="noopener">
              Thrillworks
            </a>
          </h3>
          <p>
            Built and shipped 12+ production React-based web platforms for
            enterprise clients, including ecommerce, financial services,
            healthcare, and marketing experiences. Led and mentored mid- and
            senior-level engineers through technical guidance, code reviews, and
            1:1s, while partnering with Product, Design, and Engineering to
            drive complex initiatives from architecture through delivery.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">
            Senior Developer at{" "}
            <a href="https://bombardier.com" target="_blank" rel="noopener">
              Bombardier
            </a>
          </h3>
          <p>
            Planned and delivered 12+ scalable enterprise applications that
            replaced manual workflows and improved operational efficiency across
            QA, logistics, and production. Designed, developed, and implemented
            applications with complex workflows, relational data models,
            approval systems, and production-critical requirements.
          </p>
        </div>

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
      </div>
    </main>
  );
}
