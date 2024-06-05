import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  logindata: any;
  email: any;
  password: any;

  constructor(private router: Router) { }



  ngOnInit(): void {
    this.logindata = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  login(data: any) {
    if (data.email == "admin" && data.password == "123") {
      Swal.fire({
        title: 'Login Succsessfully',
        icon: 'success'
      })
      this.router.navigate(['/admin/dashboard']);
    }
    else {
      Swal.fire({
        title: 'Invalid Credentials',
        icon: 'error'
      })
      this.logindata.reset();
    }

  }


}
