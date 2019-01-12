import { Injectable } from '@angular/core';
import {Gebruiker} from '../models/Gebruiker';
import {PlanningCard} from '../models/PlanningCard';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  private userId: number;
  private user: Gebruiker

  set setId(id: number){
    this.userId = id;
  }

  get getId(){
    return this.userId;
  }

  set setUser(user: Gebruiker){
    this.user = user;
  }

  get getUser(){
    return this.user;
  }

  private card: PlanningCard;

  set setCard(card: PlanningCard){
    this.card = card;
  }

  get getCard() {
    return this.card;
  }

  constructor() { }
}
