import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gebruiker} from '../models/Gebruiker';
import {PlanningCard} from '../models/PlanningCard';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected url: string;

  protected readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8094/planning/';
  }

  login(username: string, password: string): Observable<Gebruiker> {
    let gebruiker = new Gebruiker(username, password);
    return this.http.post<Gebruiker>(this.url + 'login/', gebruiker, this.httpOptions);
  }

  register(username: string, password: string): Observable<Gebruiker> {
    let gebruiker = new Gebruiker(username, password);
    return this.http.post<Gebruiker>(this.url + 'register/', gebruiker, this.httpOptions);
  }

  getCards(userId: number): Observable<PlanningCard[]> {
    return this.http.get<PlanningCard[]>(this.url + 'getCards/' + userId);
  }

  editCard(cardId: number, name: string, cardDescription: string, deadline: Date, user: Gebruiker): Observable<PlanningCard> {
    let card = new PlanningCard(name, cardDescription, deadline, user);
    if (cardId != 0)
      card.setId = cardId;
    if (deadline != null)
      card.setDeadline = deadline;
    return this.http.post<PlanningCard>(this.url + 'editCard/', card, this.httpOptions);
  }

  getCard(cardId: number): Observable<PlanningCard> {
    return this.http.get<PlanningCard>(this.url + 'getCard/' + cardId, this.httpOptions);
  }

  removeCard(card: PlanningCard){
    this.http.post<PlanningCard>(this.url + 'deleteCard/', card, this.httpOptions);
  }
}
