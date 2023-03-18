const { cloudinary } = require("../cloudinary");


class FileService {

  async create(data) {
     // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

      const result = await cloudinary.uploader.upload(data.toString(), options);
      
      return result
    
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


}

module.exports =  {FileService}