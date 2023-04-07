import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss'],
})
export class ProjectpageComponent implements OnInit {
  projectSlug: string | null = null;
  project: Project | null = null

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {

    this.route.paramMap.pipe(switchMap((params)=>{
      this.projectSlug = params.get('slug')
      if(this.projectSlug){
        return this.projectService.getProjectsBySlug(this.projectSlug)
      }
      return [null]
    })).subscribe(data=>{

      if(data){

        this.project = data[0]
      }else {
        this.project = null
      }

    })
  }
}
