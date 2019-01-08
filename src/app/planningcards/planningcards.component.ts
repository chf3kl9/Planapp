import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {PlanningCard} from '../../models/PlanningCard';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {Gebruiker} from '../../models/Gebruiker';
import {DataService} from '../../services/data.service';
=======
import {DataService} from '../../services/data.service';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {PlanningCard} from '../../models/PlanningCard';
import {HttpErrorResponse} from '@angular/common/http';
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09

@Component({
  selector: 'app-planningcards',
  templateUrl: './planningcards.component.html',
  styleUrls: ['./planningcards.component.css']
})
export class PlanningcardsComponent implements OnInit {

<<<<<<< HEAD
  planningCards: PlanningCard[];

  constructor(private restService: RestService, private router: Router, private data: DataService) {
    this.restService.getCards(data.getId).subscribe(
      cards => {
        this.planningCards = [];
        for (let row of cards){
          this.planningCards.push(PlanningCard.fromJSON(row));
        }
      }
    );
  }

=======
  cards: PlanningCard[];
  public httpError: HttpErrorResponse = null;

  constructor(private restService: RestService, private router: Router, private data: DataService) {
    if (this.data.getUser() == null)
      this.router.navigate(['Login']);
    else
      this.restService.getPlanningCards(data.getUser().getId).subscribe(
        data => {
          console.log(data, "Data");
          this.cards = [];
          for (let row of data) {
            this.cards.push(new PlanningCard(row));
          }
          console.log(this.cards, 'Cards');
        }, error => {
          this.httpError = error;
          console.error('Couldn\'t connect to the rest server', error);
        }
      )
  }
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09

  ngOnInit() {
    if (this.data.getUser() == null)
      this.router.navigate(['Login']);
  }

  toCoworkers(){
    this.router.navigate(['Coworkers']);
  }

  editCard(cardId: number){
    this.data.setCard = cardId;
    this.router.navigate(['Card']);
  }

}
