const Joi = require('joi')
const id = Joi.number().integer()
const url = Joi.string().uri()
const projectId = Joi.number().integer()
const createdAt = Joi.date()

const createImageDto = Joi.object({
    url:url.required(),
    projectId:projectId.required()
})


module.exports = {
    createImageDto,
}
