import Model from '../db/mongo/models/project.model.js'



class ProjectService {

  async create(data) {
    const newProject = new Model(data) 
    return await newProject.save();
  }

  async findAll(){
    const projects = await Model.find({})
    return projects
  }


  async findOne(id) {
    const project = await Model.findById(id)
    if (!project) {
      throw new Error("Project doesn't exist")
    }
    return project;
  }

  async update(id, changes) {
    try {
      await Model.findById(id)
      
    } catch (error) {
      
      throw new Error("Project doesn't exist")
    }
    const rta = await Model.updateOne({_id:id},changes)
    return rta;
  }

  async delete(id) {
    const project = await Model.findByIdAndDelete(id)
    return project;
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

export {ProjectService}