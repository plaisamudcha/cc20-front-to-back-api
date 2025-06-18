import express from "express";
import { authController } from "../controllers/auth.controller.js";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../validations/schemaRegister.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), authController.register);
authRouter.post("/login", validate(loginSchema), authController.login);

export default authRouter;
