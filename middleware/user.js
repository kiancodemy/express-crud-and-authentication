import jwt from "jsonwebtoken";
import { User } from "../model/authemticatiom.model.js";
export const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      throw new Error("please login");
    }

    const { id } = jwt.verify(token, process.env.privatekey);
    const user = await User.findById(id);

    req.user = user;

    next();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
