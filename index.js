import express from "express";
const app = express();
import { movierouter } from "./routes/movies.rout.js";
app.use(express.json());

app.use("/movie", movierouter);
app.listen(4000, () => {
  console.log("connect");
});
