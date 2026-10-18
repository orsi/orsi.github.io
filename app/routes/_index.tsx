import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi" },
    { name: "description", content: "Jonathon Orsi's online profile." },
  ];
}

export default function Page() {
  return (
    <main className="mt-4">
      <p className="mt-6 text-2xl italic font-mono">
        Something cool will be here soon. I swear...
      </p>
    </main>
  );
}
