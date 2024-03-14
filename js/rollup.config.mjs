import { glob } from "glob";
import { extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { builtinModules } from "node:module";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: Object.fromEntries(
    glob
      .sync(["src/*.js{x}", "src/**/*.js{x}", "server/*.js"])
      .map((file) => [
        file.slice(0, file.length - extname(file).length),
        fileURLToPath(new URL(file, import.meta.url)),
      ])
  ),
  output: {
    dir: "build",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: ".",
  },
  external(id) {
    return id.includes(sep + "node_modules" + sep);
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs({ ignoreDynamicRequires: true, ignore: builtinModules }),
  ],
};
