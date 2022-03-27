import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mydonations',
  templateUrl: './mydonations.component.html',
  styleUrls: ['./mydonations.component.css']
})
export class MydonationsComponent implements OnInit {
  userData: any = []
  userID: string;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }
}
