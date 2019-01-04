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

  get getUsers(): Coworker[] {
    return this.users;
  }

  set setUsers(value: Coworker[]) {
    this.users = value;
  }
}
