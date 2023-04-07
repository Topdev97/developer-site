import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';
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

    return this.http.get<Project[]>(`${this.apiUrl}/projects`)

  }
  getProject(id:number){
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`)

  }
  getProjectsBySlug(slug:string){
    let params = new HttpParams()
    if(slug){
      params = params.set('slug',slug)
    }
    return this.http.get<Project[]>(`${this.apiUrl}/projects`,{params})
  }
}
