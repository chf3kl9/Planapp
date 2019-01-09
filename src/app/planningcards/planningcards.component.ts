import { Component, OnInit } from '@angular/core';
import {PlanningCard} from '../../models/PlanningCard';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {Gebruiker} from '../../models/Gebruiker';
import {DataService} from '../../services/data.service';
import {DataService} from '../../services/data.service';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {PlanningCard} from '../../models/PlanningCard';
import {HttpErrorResponse} from '@angular/common/http';

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
  }

  editCard(cardId: number){
    this.data.setCard = cardId;
    this.router.navigate(['Card']);
  }

}
