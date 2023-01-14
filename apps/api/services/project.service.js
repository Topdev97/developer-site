
class ProjectService {

  async create(data) {
    const project = await models.Category.findByPk(data.categoryId);
    if (!project) {
      throw new Error('')
    }
    const newProject = await models.Product.create(data);
    return newProject;
  }


  async findOne(id) {
    const project = await models.Product.findByPk(id, {
      include: ['category']
    });
    if (!project) {
      throw new Error('')
    }
    return project;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
  //   async find(query) {
//     const options = {
//       include: ['category'],
//       where: {}
//     }
//     const { limit, offset } = query;
//     if (limit && offset) {
//       options.limit =  limit;
//       options.offset =  offset;
//     }

//     const { price } = query;
//     if (price) {
//       options.where.price = price;
//     }

//     const { price_min, price_max } = query;
//     if (price_min && price_max) {
//       options.where.price = {
//         [Op.gte]: price_min,
//         [Op.lte]: price_max,
//       };
//     }
//     const products = await models.Product.findAll(options);
//     return products;
//   }


}

export default ProjectService