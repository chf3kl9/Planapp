import {PlanningCard} from './PlanningCard';

export class Coworker{
  private id: number;
  private name: string;
  private pass: string;
  private friends: Coworker[];
  private friended: Coworker[];
  private planningCards: PlanningCard[];

  constructor(obj) {
    if (obj != null) {
      for (var prop in obj) this[prop] = obj[prop];
    }
  }

  get getId():number{
    return this.id;
  }

  get getName():string{
    return this.name;
  }

  set setId(id: number){
    this.id = id;
  }

  set setName(name: string){
    this.name = name;
  }

  get getPass():string{
    return this.pass;
  }

  set setPass(pass: string){
    this.pass = pass;
  }

  get getFriends(): Coworker[] {
    return this.friends;
  }

  set setFriends(value: Coworker[]) {
    this.friends = value;
  }

  get getFriended(): Coworker[] {
    return this.friended;
  }

  set setFriended(value: Coworker[]) {
    this.friended = value;
  }

  get getPlanningCards(): PlanningCard[] {
    return this.planningCards;
  }

  set setPlanningCards(value: PlanningCard[]) {
    this.planningCards = value;
  }
}
