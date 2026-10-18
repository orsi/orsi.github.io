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
      <p className="mt-8 text-2xl italic font-mono">
        Hi, my name is Jonathon Orsi.
      </p>
      <p className="mt-8">Something cool will be here soon. I swear...</p>
    </main>
  );
}
