import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CoworkersComponent} from './coworkers/coworkers.component';
import {PlanningcardsComponent} from './planningcards/planningcards.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Coworkers',component:CoworkersComponent},
  {path:'PlanningCards',component:PlanningcardsComponent},
  {path:'**',component:PlanningcardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
