import type { Route } from "./+types/about._index";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "orsi - /blog" },
    { name: "description", content: "Jonathon Orsi's blog." },
  ];
}

export default function Page() {
  return (
    <main>
      Blog index
      <Outlet />
    </main>
  );
}
