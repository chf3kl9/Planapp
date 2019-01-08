import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
<<<<<<< HEAD
import {DataService} from '../../services/data.service';
import {Gebruiker} from '../../models/Gebruiker';
=======
import {Coworker} from '../../models/Coworker';
import {DataService} from '../../services/data.service';
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09

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
<<<<<<< HEAD
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
=======
    this.success(this.restService.login(username, password))
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
  }

  sendRegister(username: string, password: string){
    //try to register using restService
    //if success, goto PlanningCard and store
<<<<<<< HEAD
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
=======
    this.success(this.restService.register(username, password));
>>>>>>> 949ebfdd9b028b7dc785570b05079263a0cd2c09
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
