const { models } = require('../db/sequelize');

class ProjectService {

  async create(data) {
    const newProject = await models.Project.create(data)
    return await newProject.save();
  }
  async addLabel(data) {
    const project = await models.Project.findByPk(data.projectId);
    if (!project) {
      throw new Error("project not found")
    }
    const label = await models.Label.findByPk(data.labelId);
    if (!label) {
      throw  new Error('label not found') 
    }
    const newItem = await models.LabelProject.create(data);
    return newItem;
  }
  async findAll(limit,offset,slug){
    if(slug){

    const projects = await models.Project.findAll({
      include:[{ all: true }],
      where:{
        slug
      },
      limit:1
    })
    return projects
    }
    const projects = await models.Project.findAll({
      include:['images','labels'],
    })
    return projects
  }


  async findOne(id) {
    const project = await models.Project.findByPk(id,{
      include:[{ all: true }]
    })
    if (!project) {
      throw new Error("Project doesn't exist")
    }
    return project;
  }

  async update(id, changes) {
    const project = await this.findOne(id);
    const rta = await project.update(changes);
    return rta;
  }

  async delete(id) {
    const project = await this.findOne(id);
    await project.destroy();
    return { id };
  }


}

module.exports =  {ProjectService}