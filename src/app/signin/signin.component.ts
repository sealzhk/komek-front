import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    emailRef: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    passRef: new FormControl('',
      Validators.compose([Validators.required,
        CustomValidators.patternValidator(/\d/, {
          hasNumber: true
        }),
        CustomValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true
        }),
        CustomValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true
        }),
        CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
            hasSpecialCharacters: true
          }
        ),
        Validators.minLength(8)
      ])
    ),
  })

  loginUserData:any = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res.token),
            localStorage.setItem('user_id', res.user_id),
            this._router.navigate(['/'])
        },
        err => console.log(err)
      )
  }

}
