import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoworkersComponent } from './coworkers/coworkers.component';
import { PlanningcardsComponent } from './planningcards/planningcards.component';
import {RestService} from '../services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../services/data.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoworkersComponent,
    PlanningcardsComponent,
    CardComponent
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
