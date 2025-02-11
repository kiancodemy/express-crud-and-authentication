import express from "express";
import dotenv from "dotenv";
import { movierouter } from "./routes/movies.rout.js";
import { connection } from "./connection/connection.js";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/movie", movierouter);
app.listen(process.env.PORT, () => {
  connection();
  console.log(`connected to port ${process.env.PORT}`);
});
