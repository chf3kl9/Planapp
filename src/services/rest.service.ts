import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coworker} from '../models/Coworker';
import {PlanningCard} from '../models/PlanningCard';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected url: string;

  protected readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient) {
    this.url = 'http://192.168.0.196:8094/';
    this.temp.setId = 1;
  }

  temp: Coworker = new Coworker(null);

  login(username:string, password:string): Coworker{
    let coworker = new Coworker(null)
    coworker.setName = name;
    coworker.setPass = password;
    return this.temp;
    //return this.http.
  }

  register(username:string, password:string): Coworker{
    let coworker = new Coworker(null)
    coworker.setName = name;
    coworker.setPass = password;
    return this.temp;
  }

   addFriend(user: Coworker, friend: string): Coworker{
    return this.temp;
   }

   getPlanningCards(userId: number): Observable<PlanningCard[]> {
    return this.http.get<PlanningCard[]>(this.url + 'PlanningCards/' + userId);
   }

   getPlanningCard(cardId: number): Observable<PlanningCard> {
    return this.http.get<PlanningCard>(this.url + 'PlanningCard/' + cardId);
   }

  getCoworkers(userId: number): Observable<Coworker[]> {
    return this.http.get<Coworker[]>(this.url + 'Coworkers/' + userId);
  }
}
