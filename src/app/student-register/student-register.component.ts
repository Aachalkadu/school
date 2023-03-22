import { Component } from '@angular/core';
import Swal from 'sweetalert2'

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
  gender: string;

  constructor() { }

  ngOnInit() {

  }

  Register() {

    let studentDetails = {
      "name": this.name,
      "email": this.email,
      "PhnNo": this.PhnNo,
      "password": this.password,
      "confirmpassword": this.confirmpassword,
      "gender": this.gender
    }

    console.log(studentDetails)

    Swal.fire({
      title: 'Welcome ' + this.name,
      text: 'You are Registered successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })

  }

}
