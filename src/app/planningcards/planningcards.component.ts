import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    if (this.data.getUser() == null)
      this.router.navigate(['Login']);
  }

  toCoworkers(){
    this.router.navigate(['Coworkers']);
  }

}
