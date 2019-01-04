import { Component, OnInit } from '@angular/core';
import {PlanningCard} from '../../models/PlanningCard';
import {HttpErrorResponse} from '@angular/common/http';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Coworker} from '../../models/Coworker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: PlanningCard
  public httpError: HttpErrorResponse = null;

  constructor(private restService: RestService, private router: Router, private data: DataService) {
    if (this.data.getUser() == null)
      this.router.navigate(['Login']);
    else
      this.restService.getPlanningCard(1).subscribe(
        data => {
          console.log(data, "Data");
          this.card = new PlanningCard(data);
          console.log(this.card, 'Card');
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

  toPlanningcards(){
    this.router.navigate(['PlanningCards']);
  }

  remove(coworker: Coworker){

  }

}
