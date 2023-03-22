import { Injectable } from '@angular/core';
import {Project, ProjectWithSlug} from '../models/project.model';
import { HttpClient,HttpParams,HttpErrorResponse,HttpStatusCode } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = environment.apiUrl
  constructor(
    private http:HttpClient
  ) {}

  getProjects(){
    return this.http.get<ProjectWithSlug[]>(`${this.apiUrl}/projects`).pipe(map(projects =>{
      return projects.map((project)=>{ return {...project,slug:project.title.toLowerCase().replaceAll(" ","-")}})
    }))
  }
  getProject(id:number){
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`)

  }
}
