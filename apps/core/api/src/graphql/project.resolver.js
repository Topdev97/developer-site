const {ProjectService} = require('../services/project.service') 
const {ImageService} = require('../services/image.service') 

const service = new ProjectService()
const getProjects = async () => {
    const projects = await service.findAll()
    return projects
}

const getProject = async (_,{id}) => {
    const project = await service.findOne(id)
    return project
}

const addProject = async (_,{dto}) => {
    const {images,labels,...rest} = dto
    const projectResponse =  await service.create(rest)
    const labelsResponse = await service.addLabel(labels)
    const imageResponse = await service.create(images)
    return {message:"message"}


}

const updateProject = async (_,{dto,id}) => {
    
    const project = await service.update(id,dto)
    return project
}
const deleteProject = async (_,{id}) => { 

    return await service.delete(id)
 }


module.exports = {
    getProject,
    getProjects,
    addProject,
    updateProject,
    deleteProject
}