import express from "express";
export const movierouter = express.Router();

import {
  getAllMovies,
  createMovies,
  deleteMovies,
  updateMovies,
} from "../controlers/movie.controler.js";

movierouter.route("/").get(getAllMovies).post(createMovies);
movierouter.route("/:id").delete(deleteMovies).put(updateMovies);
