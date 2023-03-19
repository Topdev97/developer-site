import { LabelProjectDto, CreateProjectDto, Project, UpdateProjectDto } from "../models/project.model";

class ProjectService{

    async getProjects():Promise<Project[]>{}

    async addProject(token:string,project:CreateProjectDto){

    }
    async updateProject(token:string,changes:UpdateProjectDto){}
    async deleteProject(token:string,id:number){

    }
    async addLabel(token:string,LabelProject:LabelProjectDto){}

    async deleteLabel(token:string,LabelProject:LabelProjectDto){}

    
}

export default new ProjectService()