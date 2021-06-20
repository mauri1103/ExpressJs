import Express from "express";
import Products from "./products.js";

const port = 3000;

const app = Express();

app.get("/", (req, res) => {
  //   res.send("Hello Mondo");
  res.json(Products);
});

app.listen(port, () => {
  console.log("questa e la porta che sto usando " + port);
});
