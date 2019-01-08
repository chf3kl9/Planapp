import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlanningcardsComponent } from './planningcards/planningcards.component';
import {RestService} from '../services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import { CardSpecificComponent } from './card-specific/card-specific.component';
import {DataService} from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanningcardsComponent,
    CardSpecificComponent
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
