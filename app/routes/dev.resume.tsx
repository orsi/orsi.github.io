import type { Route } from "./+types/dev.resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev/résumé" },
    { name: "description", content: "Jonathon Orsi's résumé." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <div className="max-w-3xl m-auto mt-4">
      <p className="mt-6 text-2xl italic font-mono">
          Companies I've worked for in my professional career.
        </p>
        <div className="mt-8">
          <h3 className="font-bold">
            Software Engineer (L5) at{" "}
            <a href="https://www.meltwater.com" target="_blank" rel="noopener">
              Meltwater
            </a>
          </h3>
          <p className="">2023 {"->"} Present</p>
          <ul className="list-disc list-inside mt-2">
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
          <ul className="list-disc list-inside mt-2">
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
          <ul className="list-disc list-inside mt-2">
            <li>
              Led end-to-end requirements gathering, architecture design, and
              application UI/UX design and development for 20+ C# .NET
              applications.
            </li>
            <li>
              Replaced manual workflows, approval systems, and improved
              operational efficiency on production-floor operations across QA
              and logistical organizations.
            </li>
          </ul>
        </div>

      <p className="mt-6 text-2xl italic font-mono">My educational background.</p>
        <ul>
          <li className="mt-8">
            <a href="https://www.ocadu.ca/" target="_blank" rel="noopener">
              OCAD University
            </a>
            <p>2022, Digital Media Certificate</p>
          </li>
          <li className="mt-8">
            <a
              href="https://www.georgebrown.ca/"
              target="_blank"
              rel="noopener"
            >
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
      </div>
    </main>
  );
}
