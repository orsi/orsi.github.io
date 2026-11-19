import type { Config } from "@react-router/dev/config";
import { readdirSync } from "node:fs";
import path from "node:path";

export default {
  ssr: false,
  async prerender() {
    const pathname = path.join(process.cwd(), "app/blog");
    const filenames = readdirSync(pathname).map(
      (filename) => `/blog/${filename.split(".md")[0]}`,
    );
    return ["/", "/about", "/projects", ...filenames];
  },
} satisfies Config;
