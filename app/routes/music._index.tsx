// import type { Route } from "./+types/home";

import { Outlet } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "orsi" },
//     { name: "description", content: "Jonathon Orsi's digital home." },
//   ];
// }

export default function Page() {
  return (
    <main className="mt-4">
      <Outlet />
    </main>
  );
}
