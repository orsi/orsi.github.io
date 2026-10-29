import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi" },
    { name: "description", content: "Jonathon Orsi's online profile." },
  ];
}

export default function Page() {
  return <main></main>;
}
