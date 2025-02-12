import { jwtmaker, jwtcleaner } from "../functions/jwtmaker.js";

import { User } from "../model/authemticatiom.model.js";
//login//
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("fill al the sections");
    }
    const find = await User.findOne({ email });
    if (!find) {
      throw new Error("the email is not available");
    }

    if (find && (await find.comparePass(password))) {
      await jwtmaker(res, find._id);
    }
    res.status(200).json(find);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

//logout//
export const logout = async (req, res) => {
  await jwtcleaner(res);
};

//signup///
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("fill al the sections");
    }
    const create = await User.create({ name, email, password });
    res.status(200).json(create);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateprofile = async (req, res) => {};
