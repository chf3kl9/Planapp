import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {PlanningCard} from '../../models/PlanningCard';

@Component({
  selector: 'app-card-specific',
  templateUrl: './card-specific.component.html',
  styleUrls: ['./card-specific.component.css']
})
export class CardSpecificComponent implements OnInit {

  private card: PlanningCard;


  constructor(private restService: RestService, private router: Router, private data: DataService) {

  }

  ngOnInit() {
    console.log(this.data.getCard);
    if (this.data.getCard != 0) {
      this.restService.getCard(this.data.getCard).subscribe(
        card => {
          this.card = PlanningCard.fromJSON(card);
        }
      );
    }
    else
      this.card = new PlanningCard();
    if (this.data.getId == null)
      this.router.navigate(['Login']);
  }

  saveCard(name:string, description: string, deadline:string){
    console.log("REEEEE");
    this.restService.editCard(name, description, new Date()).subscribe(
      card => {
        this.router.navigate(['PlanningCards']);
      }
    )
  }

}
