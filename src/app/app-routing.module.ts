import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PlanningcardsComponent} from './planningcards/planningcards.component';
import {CardSpecificComponent} from './card-specific/card-specific.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
<<<<<<< HEAD
  {path:'PlanningCards',component:PlanningcardsComponent},
  {path:'Card',component:CardSpecificComponent}
=======
  {path:'Coworkers',component:CoworkersComponent},
  {path:'PlanningCards',component:PlanningcardsComponent},
  {path:'**',component:PlanningcardsComponent}
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
