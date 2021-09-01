import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({offset:200,easing:'ease-in-sine'});
    AOS.refresh()
  }
  reactiveForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    gender: new FormControl(),
    username: new FormControl(),
    phone_number: new FormControl(),
    date_of_birth: new FormControl()
  });
  login(){
    this.router.navigate(['/login'])
  }
}
