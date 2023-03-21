import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent {

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
