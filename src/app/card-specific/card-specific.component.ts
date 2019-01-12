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

  card: PlanningCard;

  constructor(private restService: RestService, private router: Router, private data: DataService) {

  }

  ngOnInit() {
    console.log(this.data.getCard);
    this.card = this.data.getCard;
    if (this.data.getId == null)
      this.router.navigate(['Login']);
  }

  saveCard(name:string, description: string, deadline:string){
    this.restService.editCard(this.data.getCard.getId, name, description, new Date(deadline), this.data.getUser).subscribe(
      card => {
        this.router.navigate(['PlanningCards']);
      }
    )
  }

  removeCard(card: PlanningCard){
    this.restService.removeCard(card);
    this.router.navigate(['PlanningCards']);
  }

}
