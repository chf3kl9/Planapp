import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {Coworker} from '../../models/Coworker';
import {DataService} from '../../services/data.service';
import {PlanningCard} from '../../models/PlanningCard';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-coworkers',
  templateUrl: './coworkers.component.html',
  styleUrls: ['./coworkers.component.css']
})
export class CoworkersComponent implements OnInit {

  coworkers:Coworker[];
  public httpError: HttpErrorResponse = null;

  constructor(private restService: RestService, private router: Router, private data: DataService) {
    if (this.data.getUser() == null)
      this.router.navigate(['Login']);
    else
      this.restService.getCoworkers(data.getUser().getId).subscribe(
        data => {
          console.log(data, "Data");
          this.coworkers = [];
          for (let row of data) {
            this.coworkers.push(new Coworker(row));
          }
          console.log(this.coworkers, 'Coworkers');
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

  sendAddCoworker(input: string){

  }

  toPlanningCards(){
    this.router.navigate(['PlanningCards']);
  }

  remove(coworker: Coworker){

  }

}
