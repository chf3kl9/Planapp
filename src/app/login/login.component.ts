import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {Coworker} from '../../models/Coworker';
import {DataService} from '../../services/data.service';

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
    this.success(this.restService.login(username, password))
  }

  sendRegister(username: string, password: string){
    //try to register using restService
    //if success, goto PlanningCard and store
    this.success(this.restService.register(username, password));
  }

  success(user: Coworker){
    console.log(user.getId);
    if (user.getId>0) {
      this.data.changeUser(user);
      this.router.navigate(['PlanningCards']);
    }
    else
      this.router.navigate(['Login']);
  }
}
