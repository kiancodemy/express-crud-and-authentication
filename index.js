import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { userrouter } from "./routes/authemticatiom.rout.js";
import { movierouter } from "./routes/movies.rout.js";
import { connection } from "./connection/connection.js";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());

app.use("/movie", movierouter);
app.use("/user", userrouter);

app.all("*", () => {
  res.status(404).json({
    message: "not available",
  });
});
app.use((error, req, res, next) => {});
app.listen(process.env.PORT, () => {
  connection();
  console.log(`connected to port ${process.env.PORT}`);
});
