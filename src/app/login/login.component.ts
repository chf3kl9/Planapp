import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {DataService} from '../../services/data.service';
import {Gebruiker} from '../../models/Gebruiker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService: RestService, private router: Router, private data: DataService) {

  }

  ngOnInit() {
  }

  sendLogin(username: string, password: string){
    //try to login using restService
    //if success, goto PlanningCards and store
    this.restService.login(username, password).subscribe(
      gebruiker => {
        let temp = Gebruiker.fromJSON(gebruiker);
        this.data.setId = temp.getId;
        console.log(temp.getId);
        if (temp.getId>0)
          this.router.navigate(['PlanningCards']);
        else
          this.router.navigate(['Login']);
      }
    );
  }

  sendRegister(username: string, password: string){
    //try to register using restService
    //if success, goto PlanningCard and store
    this.restService.register(username, password).subscribe(
      gebruiker => {
        let temp = Gebruiker.fromJSON(gebruiker);
        this.data.setId = temp.getId;
        console.log(temp.getId);
        if (temp.getId>0)
          this.router.navigate(['PlanningCards']);
        else
          this.router.navigate(['Login']);
      }
    );
  }

}
