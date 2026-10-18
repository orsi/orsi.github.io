import { Link } from "react-router";
import type { Route } from "./+types/dev.web";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /dev/web" },
    { name: "description", content: "Jonathon Orsi /dev/web." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <div className="max-w-3xl m-auto mt-4">
        <p className="mt-6 text-2xl italic font-mono">
          A few of my web projects you can visit today.
        </p>
        <ul>
          <li className="mt-8">
            <a
              href="https://adarkroom.doublespeakgames.com/"
              target="_blank"
              rel="noopener"
            >
              A Dark Room
            </a>{" "}
            is an open-source, text-based, browser role-playing game. I built
            the audio engine with the Web Audio API and composed 88 original
            compositions to create a seamless, immersive audio experience.{" "}
            <a
              href="https://github.com/doublespeakgames/adarkroom/pulls?q=+is%3Apr+author%3Aorsi+"
              target="_blank"
              rel="noopener"
              className="block"
            >
              see contributions
            </a>
          </li>
          <li className="mt-8">
            <a href="https://escarpment.dev" target="_blank" rel="noopener">
              Escarpment Developments
            </a>{" "}
            is a team of tradespeople with over 20 years of experience who
            believe that great homes deserve thoughtful planning and dependable
            execution.
            <p className="mt-2">
              I designed, developed, and deployed a React/NextJS marketing site,
              utilizing GitHub Pages, Actions, and Cloudflare Workers for
              contact form submission handling.
            </p>
            <a
              href="https://github.com/orsi/escarpment.dev"
              target="_blank"
              rel="noopener"
              className="block"
            >
              see the code
            </a>
          </li>
          <li className="mt-8">
            <a href="https://code-x.live/" target="_blank" rel="noopener">
              Code X
            </a>
            {` `}is a sound poem and a gallery installation piece by{" "}
            <a
              href="https://www.wmarksutherland.com/"
              target="_blank"
              rel="noopener"
            >
              W. Mark Sutherland
            </a>
            . Working with Mark, I ported his original Adobe Flash Code X to the
            web, rebuilding the audio engine from scratch with a custom DSP
            chain — convolution reverb, wave shaping, and mouse-driven pitch and
            stereo panning.
            <p className="mt-2">
              Deployed as a statically-generated SPA on AWS using S3,
              Cloudfront, Route 53, and SSL Certificate Manager.
            </p>
            <a
              href="https://github.com/orsi/code-x.live"
              target="_blank"
              rel="ooopener"
              className="block"
            >
              see the code
            </a>
          </li>
          <li className="mt-8">
            <a href="https://jojogun.ca" target="_blank" rel="noopener">
              Jo Jo Gun & the Bullets
            </a>{" "}
            are a Hamilton, Ontario rock band built around big guitars, strong
            vocals, catchy choruses and the kind of songs that are meant to be
            played loud. I setup, built, and deployed the site in AWS. Frontend
            crafted in React, brought to life through a procedural glitch
            animation system.
            <p className="mt-2">
              Deployed as a statically-generated SPA on AWS using S3,
              Cloudfront, Route 53, and SSL Certificate Manager.
            </p>
            <a
              href="https://github.com/orsi/jojogun.ca"
              target="_blank"
              rel="ooopener"
              className="block"
            >
              see the code
            </a>
          </li>
          <li className="mt-8">
            <a
              href="https://www.walmartrewards.ca/"
              target="_blank"
              rel="noopener"
            >
              Walmart Rewards
            </a>
            , a financial rewards credit card application in partnership with
            Fairstone Bank of Canada.
            <p className="mt-2">
              I contributed in architecting and developing a GatsbyJS frontend
              integrated with Contentful as a headless CMS, and developed
              AWS-hosted microservices to support core application functionality
            </p>
          </li>
          <li className="mt-8">
            <a href="https://ryobitools.ca/" target="_blank" rel="noopener">
              RYOBI Tools Canada
            </a>{" "}
            is a Japanese manufacturer of components for automobiles,
            electronics, and telecommunications industries.
            <p className="mt-2">
              I was the Team Lead of 4 engineers in modernizing Ryobi Canada's
              ecommerce platform, making architecture and delivery decisions
              across React/Next.js, GraphQL, and Contentful while migrating
              10,000+ entities from Adobe AEM.
            </p>
          </li>
          <li className="mt-8">
            <a href="https://miovision.com/" target="_blank" rel="noopener">
              Miovision
            </a>{" "}
            provides cities with modern tools to fix today’s traffic problems.
            <p className="mt-2">
              During my time at Thrillworks, I led the development team in
              creating a statically-generated, multi-page frontend, powered by a
              headless CMS and cloud backend architecture.
            </p>
          </li>
          <li className="mt-8">
            <a href="https://thrillworks.com/" target="_blank" rel="noopener">
              Thrillworks
            </a>{" "}
            has built lasting relationships with some of the world's most
            respected organizations for over 20 years - accelerating the way
            they unlock and realize the potential of human-centric,
            technology-driven products.
          </li>
          <li className="mt-8">
            <a
              href="https://www.edgepointwealth.com/"
              target="_blank"
              rel="noopener"
            >
              Edgepoint Wealth
            </a>{" "}
            and{" "}
            <a href="https://cymbria.com/" target="_blank" rel="noopener">
              Cymbria
            </a>{" "}
            are investment professionals who share the belief that they could
            provide an alternative to the standard fare of mutual fund companies
            that didn't seem to have their priorities straight.
            <p className="mt-2">
              I led a development team of 4 to deliver a highly-performant and
              data-rich frontend with a11y and i18n support, and a cloud service
              handling user authentication, identity management, and financial
              analytics.
            </p>
          </li>
          <li className="mt-8">
            <a
              href="https://www.cardinalhealth.ca/en/"
              target="_blank"
              rel="noopener"
            >
              Cardinal Health
            </a>{" "}
            manufacture and distribute essential and differentiated products
            across the continuum of care.
            <p className="mt-2">
              Worked with design and content specialist to build a
              highly-customized Wordpress theme with Elementor and Advanced
              Custom Fields (ACF).
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
