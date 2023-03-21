import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent {


  username: string;
  password: string;
  constructor(public http: HttpClient, public service: ServiceService) { }

  ngOnInit() {
    this.getname()
  }

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

  getname() {
    this.http.get("https://jsonplaceholder.typicode.com/todos/2").subscribe
      (result => {
        console.log(result)
      })
  }

}
