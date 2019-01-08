import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Gebruiker} from '../models/Gebruiker';
=======
import {Coworker} from '../models/Coworker';
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
<<<<<<< HEAD
  private userId: number;

  set setId(id: number){
    this.userId = id;
  }

  get getId(){
    return this.userId;
  }

  private cardId: number;

  set setCard(id: number){
    this.cardId = id;
  }

  get getCard(){
    return this.cardId;
=======
  private user: Coworker = null;

  changeUser(user: Coworker){
    this.user = user;
  }

  getUser(){
    return this.user;
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
  }

  constructor() { }
}
