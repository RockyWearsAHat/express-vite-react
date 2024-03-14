import express from "express";

//Exporting express app to be referenced in vite config through the plugin, THIS IS NECESSARY FOR THIS SETUP
export const app = express();
app.use(express.json());

const port = 3000;

//A simple test route
app.get("/hello", (_req, res) => {
  res.json("Hello, World!");
});

//If not vite, have express serve static files and open server, vite will otherwise do this
if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/build/";
  app.use(express.static(frontendFiles));

  app.get("/*", (_req, res) => {
    res.sendFile("index.html", { root: frontendFiles });
  });

  app.listen(process.env["PORT"] ? process.env["PORT"] : port);
  console.log(
    !process.env["PORT"]
      ? `Server started on http://localhost:${port}` //FOR DEV AND BUILD
      : "Server is running on host platform" //FOR HOSTING PLATFORM
  );
}
