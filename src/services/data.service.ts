import { Injectable } from '@angular/core';
import {Coworker} from '../models/Coworker';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  private user: Coworker = null;

  changeUser(user: Coworker){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  constructor() { }
}
