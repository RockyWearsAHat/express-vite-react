# Project to demonstrate vite, react & express running on the same port

### The plugin is courtesy of [Noam](https://noam.hashnode.dev/using-vite-to-serve-and-hot-reload-react-app-express-api-together)

This is not proxying to my knowledge?

This project was written in both JS and TS with the React starter template from Vite. Either way it is possible to create something like this just requires a little bit of setup and some screwing around with rollup and vite configs for which files to write/bundle, and the correct plugins to use to parse the language.

If using typescript, be aware of tsconfig.node.json as with some more options it doesn't always seem stable from what I tested, hopefully this is helpful to someone

# To Use

1. Create a folder
2. Open terminal in folder

RUN COMMANDS 3) git init 4) git remote add origin https://github.com/RockyWearsAHat/express-vite-react.git 5) (OPTIONAL, PULL ONLY ONE VERSION JS OR TS)
