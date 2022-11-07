import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import errorHandler from "./helpers/middlewares/errorHandller.js";
import authRouter from "./controllers/admins.controller.js";
import registerStrategies from "./helpers/functions/registerStratigies.js";

import { CronJob } from "cron";
import { join } from "path";
const prisma = new PrismaClient();
dotenv.config();

const app = express();
registerStrategies();

// -- Middlewares --
app.use(express.json());
app.use("/uploads", express.static(join(process.cwd(), "uploads")));
// -- Routes --
app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

export { prisma };
