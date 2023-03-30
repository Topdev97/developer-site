import { config } from "../config";
import { CreateImageDto, Image, UpdateImageDto } from "../models/project.model";

class ImageService{

    async addImage(token:string,image:CreateImageDto):Promise<Image>{

        const response =  await fetch(`${config.apiUri}/projects/set-labels`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(image)
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    
    }
    async updateImage(image:UpdateImageDto){}
    async deleteImage(id:number){}
}

export const imageService = new ImageService()
