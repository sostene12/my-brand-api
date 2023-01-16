import Joi from "joi";

export const blogSchema = Joi.object().keys({
    title:Joi.string().min(10).required(),
    description:Joi.string().required(),
    image:Joi.any().required()
})