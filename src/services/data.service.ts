import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  private id: number;

  changeId(id: number){
    this.id = id;
  }

  getId(){
    return this.id;
  }

  constructor() { }
}
