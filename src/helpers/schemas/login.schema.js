import Joi from "joi";

const loginSchema = Joi.object({
  phoneNumber: Joi.string().required(),
  name: Joi.string().required(),
});

export default loginSchema;
