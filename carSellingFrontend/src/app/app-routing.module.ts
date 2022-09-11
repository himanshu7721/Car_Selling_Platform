import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './Authentication/home/home.component';
import { AdminGuard } from './Authentication/Services/admin.guard';
import { UserGuard } from './Authentication/Services/user.guard';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'user/home',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[UserGuard],
  },
  {
    path:'',
    component:WelcomepageComponent,
    pathMatch:'full'
  },
  {
    path:'admin/home',
    component:AdminComponent,
    pathMatch:'full',
    canActivate:[AdminGuard],
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
