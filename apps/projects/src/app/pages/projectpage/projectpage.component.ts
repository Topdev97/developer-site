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
  project: Project | null = {
    id: 0,
    link: '',
    repository: '',
    title: '',
    shortDescription: '',
    published: false,
    description: '',
    createdAt: '',
    slug:"",
    images: [
      {
        id: 0,
        url: '',
        projectId: 0,
        createdAt: '',
      },
    ],
    labels: [
      {
        id: 0,
        title: '',
        type: '',
        createdAt: '',
        LabelProject: {
          id: 0,
          projectId: 0,
          labelId: 0,
          createdAt: '',
        },
      },
    ],
  };

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
      this.project = data
    })
  }
}
