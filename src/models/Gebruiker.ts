import {PlanningCard} from './PlanningCard';

export class Gebruiker{
  private id: number;
  private name: string = "";
  private password: string = "";


  constructor(username?:string, password?:string) {
    if (username != null)
      this.name = username;
    if (password != null)
      this.password = password;
  }

  static fromJSON(data: any) {
    return Object.assign(new this, data);
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

  get getPassword(): string {
    return this.password;
  }

  set setPassword(value: string) {
    this.password = value;
  }
}
