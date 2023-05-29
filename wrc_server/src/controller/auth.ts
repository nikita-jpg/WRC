import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { env } from "process";
import User from "../models/user.model";

const generateAccessToken = (id: number, email: string) => {
  const payload = {
    userId: id,
    email: email,
  };
  return jwt.sign(payload, env.GENERATE_ACCESS_TOKEN_WORD, {
    expiresIn: env.GENERATE_ACCESS_TOKEN_IN,
  });
};

export const authorizationController = async (req, res) => {
  try {
    console.debug(req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(403).json({ message: "Email error" });
    }

    const validPassword = bcrypt.compareSync(password, user.password_hash);
    if (!validPassword) {
      return res.status(403).json({ message: "Password error" });
    }

    const token = generateAccessToken(user.userId, user.email);
    return res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Login error" });
  }
};

export const registrationController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userNew = User.build({
      email,
      password_hash: bcrypt.hashSync(password, 10),
    });
    const user = await userNew.save();

    const token = generateAccessToken(user.userId, user.email);
    return res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Registration error" });
  }
};
