import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "./plugins/express-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express("server/server.ts")],
  build: {
    outDir: "build",
  },
});
