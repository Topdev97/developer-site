import { Component, OnInit } from '@angular/core';
import {Project, ProjectWithSlug} from '../../models/project.model'
import { ProjectService } from 'src/app/services/projects.service';
import { pipe, tap } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  projects:ProjectWithSlug[]= []

  constructor(
    private projectService:ProjectService
  ){

  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects)=>{
      this.projects = projects
    })
  }
}
