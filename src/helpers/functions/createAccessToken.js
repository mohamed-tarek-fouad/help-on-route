import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default function createAccessToken(adminId) {
  return jwt.sign({ adminId }, process.env.ACCESS_TOKEN_SECRET, {});
}
