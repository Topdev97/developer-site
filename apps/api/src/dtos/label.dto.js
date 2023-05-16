const Joi = require('joi')
const id = Joi.number().integer()
const image = Joi.string().uri()
const title = Joi.string().min(4).max(40)
const createdAt = Joi.date()
const type = Joi.string().min(1).max(30)

const createLabelDto = Joi.object({
    title:title.required(),
    image:image.required(),
    type:type.required()    
})
const updateLabelDto = Joi.object({
    title:title,
    image:image,
    type:type  
})


module.exports = {
    createLabelDto,
    updateLabelDto
}
