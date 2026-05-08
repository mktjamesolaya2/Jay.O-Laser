// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel deployment configuration:
//   - cloudflare: false  → disables the Cloudflare Workers build target (was producing
//     a Worker bundle that Vercel could not serve, causing 404 NOT_FOUND).
//   - tanstackStart.spa.enabled: true  → prerenders the root shell to a static
//     `dist/client/index.html`, turning the build into a pure static SPA that Vercel
//     can serve directly without any function runtime. This is appropriate because the
//     project is a single landing page with no server functions.
// `npm run dev` is unaffected — the Cloudflare plugin only ran on `command === "build"`.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      // Emit the prerendered shell as `dist/client/index.html` (default would be
      // `_shell.html`). Vercel serves `index.html` at `/` automatically, so this
      // makes the deployed root URL render the SPA shell instead of 404.
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
