const Joi = require('joi')
const id = Joi.number().integer()
const link = Joi.string().uri()
const repository = Joi.string().uri()
const title = Joi.string().min(4).max(40)
const shortDescription = Joi.string().min(10).max(50)
const published = Joi.boolean()
const description = Joi.string()
const slug = Joi.string().min(4).max(40)
const createdAt = Joi.date()
  
const createProjectDto = Joi.object({
    link:link,
    repository:repository.required(),
    title:title.required(),
    shortDescription:shortDescription.required(),
    published:published.required(),
    description:description,
    slug:slug.required(),   
})
const updateProjectDto = Joi.object({
    link,
    repository,
    title,
    shortDescription,
    published,
    description,
    slug
})


module.exports = {
    createProjectDto,
    updateProjectDto
}

