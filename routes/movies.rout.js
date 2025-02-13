import express from "express";
export const movierouter = express.Router();

import {
  getAllMovies,
  filter,
  createMovies,
  deleteMovies,
  updateMovies,
} from "../controlers/movie.controler.js";

movierouter.route("/").get(getAllMovies).post(createMovies);
movierouter.route("/filter").get(filter);
movierouter.route("/:id").delete(deleteMovies).put(updateMovies);
