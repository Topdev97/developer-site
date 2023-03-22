import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: ':slug',
        component: ProjectpageComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
