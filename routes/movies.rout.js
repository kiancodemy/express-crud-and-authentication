import express from "express";
import { getAllMovies } from "../controlers/movie.controler.js";
export const movierouter = express.Router();
movierouter.get("/allmovies", getAllMovies);
