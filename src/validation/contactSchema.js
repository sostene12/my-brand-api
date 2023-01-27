import Joi from "joi";

export const contactValidate = Joi.object().keys({
    fullName:Joi.string().min(5).required(),
    email:Joi.string().lowercase().required(),
    message:Joi.string().required()
});