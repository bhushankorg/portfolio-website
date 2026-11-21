import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: output to "build" to match netlify.toml's publish dir.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
