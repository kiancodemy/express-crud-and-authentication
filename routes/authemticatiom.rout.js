import express from "express";
import { userAuth } from "../middleware/user.js";
import {
  login,
  logout,
  signup,
  updateprofile,
} from "../controlers/authemticatiom.controler.js";
export const userrouter = express.Router();

userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.post("/logout", logout);
userrouter.post("/ss", userAuth);
