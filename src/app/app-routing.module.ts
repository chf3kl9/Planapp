import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PlanningcardsComponent} from './planningcards/planningcards.component';
import {CardSpecificComponent} from './card-specific/card-specific.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'PlanningCards',component:PlanningcardsComponent},
  {path:'Card',component:CardSpecificComponent},
  {path:'**',component:PlanningcardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
