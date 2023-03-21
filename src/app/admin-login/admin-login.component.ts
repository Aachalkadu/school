import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  username: string;
  password: string;
  constructor(public http: HttpClient, public service: ServiceService) { }


  LoginUser() {
    // if (this.username == "Admin" && this.password == "admin123") {
    //   console.log("Welcome");
    // }

    let loginForm = {
      "username": this.username,
      "password": this.password
    }

    this.service.login(loginForm).subscribe(
      value => {
        console.log(value)
      }
    )

  }

}