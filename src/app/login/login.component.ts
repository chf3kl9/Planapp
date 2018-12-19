import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService: RestService, private router: Router) {

  }

  ngOnInit() {
  }

  sendLogin(username: string, password: string){
    //try to login using restService
    //if success, goto PlanningCards and store
    this.restService.login(username, password).subscribe(
      id => {
        console.log(id);
        if (id>0)
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
      id => {
        console.log(id);
        if (id>0)
          this.router.navigate(['PlanningCards']);
        else
          this.router.navigate(['Login']);
      }
    );
  }

}
