import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './Authentication/home/home.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'user/home',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'',
    component:WelcomepageComponent,
    pathMatch:'full'
  },
  {
    path:'admin/home',
    component:AdminComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
