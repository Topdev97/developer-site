import { CreateImageDto, UpdateImageDto } from "../models/project.model";

class ImageService{

    async addImage(image:CreateImageDto){}
    async updateImage(image:UpdateImageDto){}
    async deleteImage(id:number){}
}


export default new ImageService()