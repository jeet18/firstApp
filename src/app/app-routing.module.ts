import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
