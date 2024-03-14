import express, { Request, Response } from "express";

//EXPORTING EXPRESS FUNCTION TO BE USED IN VITE CONFIG, THIS IS NECESSARY FOR THIS SETUP
export const app = express();
app.use(express.json());

const port = 3000;

//A SIMPLE TEST ROUTE
app.get("/hello", (_req: Request, res: Response) => {
  res.json("Hello, World!");
});

//IF NOT VITE, HAVE EXPRESS SERVE STATIC FILES AND OPEN SERVER, VITE WILL OTHERWISE DO THIS
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
