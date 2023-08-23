import { config } from "../config";
import { CreateLabelDto, Label, UpdateLabelDto } from "../models/label.model";

class LabelService{

    async getLabels():Promise<Label[]>{
        const response =  await fetch(`${config.apiUri}/labels`)
        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async getLabel(id:number):Promise<Label>{
        const response =  await fetch(`${config.apiUri}/labels/${id}`)
        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
}

export const labelService = new LabelService()