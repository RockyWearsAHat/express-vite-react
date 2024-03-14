import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "./express-react-vite.plugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express("server/server-entry.js")],
  build: {
    outDir: "build",
  },
});
