import { Router } from "express";
import loginSchema from "../helpers/schemas/login.schema.js";
import * as AuthService from "../services/user/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
const authRouter = Router();

authRouter.post("/login", JoiMiddleware(loginSchema), AuthService.login);

export default authRouter;
