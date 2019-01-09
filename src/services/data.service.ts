import { Injectable } from '@angular/core';
import {Gebruiker} from '../models/Gebruiker';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
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

  get getCard() {
    return this.cardId;
  }

  constructor() { }
}
