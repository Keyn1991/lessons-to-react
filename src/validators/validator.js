import Joi from "joi";


const carValidator = Joi.object({
    id:Joi.number().min(11).max(100000).required(),
    brand:Joi.string().regex(/^[a-zA-Z][a-zA-Z0-9._-]{5,31}$/).required(),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(2023).required()
})

export {
    carValidator
}