import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectCardComponent,
    NavbarComponent,
    MobileBarComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
