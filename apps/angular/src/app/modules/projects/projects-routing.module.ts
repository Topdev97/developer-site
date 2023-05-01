import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from '../admin/pages/projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectsComponent
  },
  {
    path:':slug',
    component:ProjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
