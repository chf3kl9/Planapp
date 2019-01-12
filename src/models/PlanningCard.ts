import {Gebruiker} from './Gebruiker';

export class PlanningCard{
  private id: number;
  private name: string = "";
  private cardDescription: string = "";
  private deadline: Date;
  private user: Gebruiker;

  constructor(name?: string, cardDescription?: string, deadline?: Date, user?: Gebruiker){
    if (name != null)
      this.name = name;
    if (cardDescription != null)
      this.cardDescription = cardDescription;
    if (deadline != null)
      this.deadline = deadline;
    if (user != null)
      this.user = user;
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

  get getUser(): Gebruiker {
    return this.user;
  }

  set setUser(value: Gebruiker) {
    this.user = value;
  }
}
