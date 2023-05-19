const {ProjectService} = require('../services/project.service') 
const service = new ProjectService()
const getProjects = async () => {
    const projects = await service.findAll()
    return projects
}

const getProject = async (_,{id}) => {
    const project = await service.findOne(id)
    return project
}


module.exports = {
    getProject,
    getProjects
}