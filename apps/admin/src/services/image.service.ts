import { config } from "../config";
import { CreateImageDto, Image, UpdateImageDto } from "../models/project.model";

class ImageService{

    async addImage(token:string,image:CreateImageDto):Promise<Image>{

        const response =  await fetch(`${config.apiUri}/images`,{
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
    async updateImage(token:string,image:UpdateImageDto):Promise<Image>{
        const response =  await fetch(`${config.apiUri}/images`,{
            method:"PATCH",
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
    async deleteImage(token:string,id:number){
        const response =  await fetch(`${config.apiUri}/images/${id}`,{
            method:"PATCH",
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }
}

export const imageService = new ImageService()
