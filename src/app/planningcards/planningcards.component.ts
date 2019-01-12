import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {PlanningCard} from '../../models/PlanningCard';

@Component({
  selector: 'app-planningcards',
  templateUrl: './planningcards.component.html',
  styleUrls: ['./planningcards.component.css']
})
export class PlanningcardsComponent implements OnInit {

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

  ngOnInit() {
    if (this.data.getId == null)
      this.router.navigate(['Login']);
  }

  editCard(card: PlanningCard){
    this.data.setCard = card;
    this.router.navigate(['Card']);
  }

  createCard(){
    this.restService.editCard(0, "new card", "New Card", new Date(), this.data.getUser).subscribe(
      card => {
        this.data.setCard = PlanningCard.fromJSON(card);
        this.router.navigate(['Card']);
      }
    );
  }

}
