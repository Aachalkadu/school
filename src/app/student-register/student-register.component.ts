import { Component } from '@angular/core';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {

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
