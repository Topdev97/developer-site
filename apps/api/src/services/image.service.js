const { models } = require('../db/sequelize');


class ImageService {

  async create(data) {
    const newImage = await models.Image.create(data)
    return await newImage.save();
  }

  async findAll(){
    const images = await models.Image.findAll()
    return images
  }


  async findOne(id) {
    const image = await models.Image.findByPk(id)
    if (!image) {
      throw new Error("Image doesn't exist")
    }
    return image;
  }

  async update(id, changes) {
    const image = await this.findOne(id);
    const rta = await image.update(changes);
    return rta;
  }

  async delete(id) {
    const image = await this.findOne(id);
    await image.destroy();
    return { id };
  }
  async deleteByProject(projectId){
    const id = await models.Image.destroy({
      where:{
        projectId
      }
    })
    return {
      id
    }
  }


}

module.exports =  {ImageService}