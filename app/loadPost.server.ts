import fs from "node:fs";
import path from "node:path";
import { data } from "react-router";

export function loadPost(pathname: string) {
  const filepath = path.join(process.cwd(), `./app/blog/${pathname}.md`);
  if (!fs.existsSync(filepath)) {
    return data("Not found", 404);
  }

  const post = fs.readFileSync(filepath, "utf8");
  return post;
}
