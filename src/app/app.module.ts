import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlanningcardsComponent } from './planningcards/planningcards.component';
import {RestService} from '../services/rest.service';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { CardSpecificComponent } from './card-specific/card-specific.component';
import {DataService} from '../services/data.service';
=======
import {DataService} from '../services/data.service';
import { CardComponent } from './card/card.component';
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    PlanningcardsComponent,
    CardSpecificComponent
=======
    CoworkersComponent,
    PlanningcardsComponent,
    CardComponent
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
