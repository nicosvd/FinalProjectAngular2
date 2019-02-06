import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userForm: FormGroup;
  private headers: HttpHeaders;
  authenticated: boolean = false;
  private baseUrl = 'http://localhost:8080'
  User1: User = new User();
  

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm=this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }


  login() {
    this.loginService.authenticate(this.User1).subscribe(data => {
      console.log(data);
      if (data)
        this.router.navigate(['user']);
      else
        alert("Authentification non réussie");
    }, 
      error => {
        console.log(error)}
        );
    
  }

  onSubmit() {

    const formValue = this.userForm.value;
    const userMail = formValue['email'];
    const userPassword = formValue['password'];
    this.User1.username=userMail;
    this.User1.password=userPassword;
    this.login();
    
    
    }

}
