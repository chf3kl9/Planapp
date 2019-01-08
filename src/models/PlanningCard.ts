<<<<<<< HEAD
import {Gebruiker} from './Gebruiker';

export class PlanningCard{
  private id: number;
  private name: string = "";
  private cardDescription: string = "";
  private deadline: Date = new Date();
  private user: Gebruiker;

  constructor(name?: string, cardDescription?: string, deadline?: Date){
    if (name != null)
      this.name = name;
    if (cardDescription != null)
      this.cardDescription = cardDescription;
    if (deadline != null)
      this.deadline = deadline;
  }

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }


=======
import {Coworker} from './Coworker';

export class PlanningCard{
  private id: number;
  private name: string;
  private cardDescription: string;
  private deadline: Date;
  private users: Coworker[];

  constructor(obj){
    if (obj != null){
      for (var prop in obj) this[prop] = obj[prop];
    }
  }

>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getCardDescription(): string {
    return this.cardDescription;
  }

  set setCardDescription(value: string) {
    this.cardDescription = value;
  }

  get getDeadline(): Date {
    return this.deadline;
  }

  set setDeadline(value: Date) {
    this.deadline = value;
  }
<<<<<<< HEAD
=======

  get getUsers(): Coworker[] {
    return this.users;
  }

  set setUsers(value: Coworker[]) {
    this.users = value;
  }
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
}
