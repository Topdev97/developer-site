import { config } from "../config";
import { Project } from "../models/project.model";

class ProjectService{

    async getProjects():Promise<Project[]>{
        const response = await fetch(`${config.apiUrl}/projects`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async getProject(id:number):Promise<Project>{
        const response = await fetch(`${config.apiUrl}/projects/${id}`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }

    
    
}

export const projectService = new ProjectService()

