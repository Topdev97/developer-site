import { config } from "../config";
import { CreateLabelProjectDto, LabelProject } from "../models/project.model";

class LabelProjectService{

    async setLabelProject(token:string,labelProject:CreateLabelProjectDto):Promise<LabelProject>{
        const response =  await fetch(`${config.apiUri}/projects/set-labels`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(labelProject)
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
}

export const labelProjectService = new LabelProjectService()
