import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LabelsComponent } from './pages/labels/labels.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateLabelComponent } from './pages/create-label/create-label.component';
import { EditLabelComponent } from './pages/edit-label/edit-label.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent,
},
{
  path:'',
  redirectTo:'login'
},
{
  path:'projects',
  component:ProjectsComponent,
},
{
  path:'labels',
  component:LabelsComponent,
},
{
  path:'profile',
  component:ProfileComponent,
},
{
  path:'label/create',
  component:CreateLabelComponent,
},
{
  path:'label/edit/:id',
  component:EditLabelComponent,
},
{
  path:'project/edit/:id',
  component:EditProjectComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
