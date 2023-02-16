import Model from "../db/mongo/models/user.model.js";

class UserService {
  async findAll() {
    const users = await Model.find({});
    return users;
  }

  async findOne(id) {
    const user = await Model.findById(id);
    if (!user) {
      throw new Error("User doesn't exist");
    }
    return user;
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

export { UserService };
