const { models } = require('../db/sequelize');


class LabelService {

  async create(data) {
    const newLabel = await models.Label.create(data)
    return await newLabel.save();
  }

  async findAll(){
    const labels = await models.Label.findAll()

    return labels
  }


  async findOne(id) {
    const label = await models.Label.findByPk(id)
    if (!label) {
      throw new Error("Label doesn't exist")
    }
    return label;
  }

  async update(id, changes) {
    const label = await this.findOne(id);
    const rta = await label.update(changes);
    return rta;
  }

  async delete(id) {
    const label = await this.findOne(id);
    await label.destroy();
    return { id };
  }


}

module.exports =  {LabelService}