# Project to demonstrate vite, react & express running on the same port

### The plugin is courtesy of [Noam, check out his blog post here](https://noam.hashnode.dev/using-vite-to-serve-and-hot-reload-react-app-express-api-together)

This is not proxying to my knowledge?

This project was written in both JS and TS with the React starter template from Vite. Either way it is possible to create something like this just requires a little bit of setup and some screwing around with rollup and vite configs for which files to write/bundle, and the correct plugins to use to parse the language.

If using typescript, be aware of tsconfig.node.json as with some more options it doesn't always seem stable from what I tested, hopefully this is helpful to someone

# To Use

- Open terminal
- Run either
  - `git clone https://github.com/RockyWearsAHat/express-vite-react.git` (clone the entire repository)
  - `git clone --single-branch --branch js|ts https://github.com/RockyWearsAHat/express-vite-react.git` (clone one version, make sure to swap js|ts with whichever branch you'd like to copy, js or ts)
- Open folder in vs code
- Run `npm i`
- To start dev mode, simply run `npm run dev`
- The build is split into a couple steps defined in package.json, simplest way to run build is to run `npm run buildNstart`

Enjoy React and Express running on the same port via express serving your rendered react content as defined in the index.html file
