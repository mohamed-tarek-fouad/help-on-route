import {
  okResponse,
  unAuthorizedResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";
import twilio from "twilio";
import createAccessToken from "../../helpers/functions/createAccessToken.js";
export async function login(req, res, next) {
  try {
    const { phoneNumber, name } = req.body;
    let accessToken;
    const user = await prisma.users.findUnique({
      where: {
        phoneNumber,
      },
    });
    if (!user) {
      const createUser = await prisma.users.create({
        data: {
          phoneNumber,
          name,
        },
      });
      accessToken = createAccessToken(createUser.id);
      return okResponse(res, "Login successful", {
        ...createUser,
        accessToken,
      });
    }
    accessToken = createAccessToken(user.id);
    return okResponse(res, "Login successful", { ...user, accessToken });
  } catch (err) {
    next(err);
  }
}
