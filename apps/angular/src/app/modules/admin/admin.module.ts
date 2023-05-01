import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LabelItemComponent } from './components/label-item/label-item.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LabelsComponent } from './pages/labels/labels.component';
import { CreateLabelComponent } from './pages/create-label/create-label.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { EditLabelComponent } from './pages/edit-label/edit-label.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    MobileBarComponent,
    NavbarComponent,
    LoginFormComponent,
    LabelItemComponent,
    ProjectItemComponent,
    LoginComponent,
    ProjectsComponent,
    LabelsComponent,
    CreateLabelComponent,
    CreateProjectComponent,
    EditProjectComponent,
    EditLabelComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
