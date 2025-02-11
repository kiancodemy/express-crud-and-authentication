import { Movie } from "../model/movie.model.js";

///get alll movies//
export const getAllMovies = async (req, res) => {
  try {
    const create = await Movie.find();
    if (create && create.length === 0) {
      throw new Error("there is no movie");
    }
    res.status(200).json(create);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

/// create new movie***
export const createMovies = async (req, res) => {
  try {
    const { name, year, duration } = req.body;
    if (!name || !year || !duration || !rating) {
      throw new Error("fill out all sections");
    }
    console.log(req.body);
    const newMoviwe = await Movie.create(req.body);
    res.status(200).json(newMoviwe);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

///delete by id//
export const deleteMovies = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted sucessfully",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

///update by id//
export const updateMovies = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
