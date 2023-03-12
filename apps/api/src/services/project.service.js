const { models } = require('../db/sequelize');


class ProjectService {

  async create(data) {
    const newProject = await models.Project.create(data)
    return await newProject.save();
  }

  async findAll(){
    const projects = await models.Project.findAll({
      include:[
        'images'
      ]
    })
    return projects
  }


  async findOne(id) {
    const project = await models.Project.findByPk(id)
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