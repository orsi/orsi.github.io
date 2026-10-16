import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi" },
    { name: "description", content: "Jonathon Orsi's digital home." },
  ];
}

export default function Home() {
  return (
    <main className="mt-4">
      <p><em>under construction...</em></p>
    </main>
  );
}
