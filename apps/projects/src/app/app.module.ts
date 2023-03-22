import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    LayoutComponent,
    NotfoundComponent,
    HomepageComponent,
    ProjectpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/projects'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
