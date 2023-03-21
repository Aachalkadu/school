import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  PhnNo: string;
  password: string;
  confirmpassword: string;


  constructor() { }

  ngOnInit() {

  }

  Register() {
    if (this.name == "Admin" && this.email == 'admin@123' && this.password == "123") {
      console.log(" ");
    }
  }

}
