import prisma from "../configs/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authController = {
  register: async (req, res, next) => {
    try {
      const { email, name, password } = req.body;
      const user = await prisma.user.findFirst({ where: { email } });
      if (user) {
        createError(400, "email already exist");
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      console.log("hashPassword", hashPassword);
      const result = await prisma.user.create({
        data: { email, name, password: hashPassword },
      });
      console.log("result", result);
      res.json({ message: `Regiter ${result.name} Success` });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return createError(400, "email or password invalid");
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return createError(400, "email or password invalid");
      const payload = { id: user.id, role: user.role };
      const accessToken = jwt.sign(payload, process.env.SECRET, {
        algorithm: "HS256",
        expiresIn: "1d",
      });
      res.json({ message: `Welcome back ${user.name}`, accessToken });
    } catch (error) {
      next(error);
    }
  },
};
