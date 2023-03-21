import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  usertype:string;
  constructor(public http: HttpClient, public service: ServiceService, public router : Router) { }

  ngOnInit() {
    // this.getname()
  }

  LoginUser() {

    if (this.username == "Admin" && this.password == "admin123" && this.usertype == "admin") {
      console.log("Welcome");

      Swal.fire({
        title: 'Welcome',
        text: 'You are logged in successfully',
        icon: 'success',
        confirmButtonText: 'Thanks'
      })

this.router.navigateByUrl("/student-dashboard")

    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Try again with proper credentials',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

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
