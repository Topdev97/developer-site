import Joi from "joi";

export const messageSchema = Joi.object({


  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  organization: Joi.string().alphanum().min(3).max(30).required(),

  message: Joi.string().allow(""),

});
