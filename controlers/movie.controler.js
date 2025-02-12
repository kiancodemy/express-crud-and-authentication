import { Movie } from "../model/movie.model.js";

///get alll movies//
export const getAllMovies = async (req, res) => {
  try {
    let query = Movie.find();
    if (req.query.search) {
      query = query.find({
        name: { $regex: req.query.search, $options: "i" },
      });
    }
    if (req.query.gte) {
      query = query.find({ year: { $gte: Number(req.query.gte) } });
    }
    if (req.query.lte) {
      query = query.find({ year: { $lte: Number(req.query.lte) } });
    }
    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      query = query.sort(sort);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    const data = await query;

    res.status(200).json([{ length: data.length }, ...data]);
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
