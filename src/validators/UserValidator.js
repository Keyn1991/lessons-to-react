import Joi from "joi";


const userValidator = Joi.object({
    id:Joi.number().min(11).max(100000).required(),
    name:Joi.string().regex(/^[a-zA-Z][a-zA-Z0-9._-]{5,31}$/).required(),
    email:Joi.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),

})

export {
    userValidator
}