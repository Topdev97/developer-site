import { config } from "../config";
import { CreateProjectDto, Project, UpdateProjectDto } from "../models/project.model";

class ProjectService{

    async getProjects(queryParams?:any):Promise<Project[]>{
        const response = await fetch(`${config.apiUri}/projects?` + new URLSearchParams(queryParams),{
            
        })
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async getProject(id:number):Promise<Project>{
        const response = await fetch(`${config.apiUri}/projects/${id}`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }

    
}

export const projectService = new ProjectService()

