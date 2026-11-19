import type { Route } from "./+types/blog.$";
import Markdown from "react-markdown";
import { loadPost } from "~/loadPost.server";

export const meta = ({ loaderData }: Route.MetaArgs) => {
  return [
    { title: `orsi - /blog/${loaderData}` },
    { name: "description", content: "Jonathon Orsi's blog..." },
  ];
};

export async function loader({ params }: Route.LoaderArgs) {
  return loadPost(params["*"]);
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <Markdown>{loaderData}</Markdown>
    </main>
  );
}
