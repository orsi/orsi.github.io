import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    return ["/", "/dev", "/dev/resume", "/dev/projects", "/dev/web", "/music"];
  },
} satisfies Config;
