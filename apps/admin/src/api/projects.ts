import { config } from "../config";
import { LabelProjectDto, CreateProjectDto, Project, UpdateProjectDto } from "../models/project.model";

class ProjectService{

    async getProjects():Promise<Project[]>{
        const response = await fetch(`${config.apiUri}/v1/projects`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }

    async addProject(token:string,project:CreateProjectDto){

    }
    async updateProject(token:string,changes:UpdateProjectDto){}
    async deleteProject(token:string,id:number){

    }
    async addLabel(token:string,LabelProject:LabelProjectDto){}

    async deleteLabel(token:string,LabelProject:LabelProjectDto){}

    
}

export const projectService = new ProjectService()

