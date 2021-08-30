import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  reactiveForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  
  createAcc(){
    this.router.navigate(['/register'])
  }
}
