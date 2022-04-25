import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FundraisingService} from "../../service/fundraising.service";

@Component({
  selector: 'app-mydonations',
  templateUrl: './mydonations.component.html',
  styleUrls: ['./mydonations.component.css']
})
export class MydonationsComponent implements OnInit {
  userData: any = [];
  donations: any = {};
  fundraisings: any = {};

  userID: string;
  donation: string;
  fundraising: string;
  private keys: string[];

  constructor(private _authService: AuthService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this._authService.getLoggedUser();
    this._authService.getUserDonations(this.userID)
      .subscribe(
        res => this.donations = res['donations'],
        err => console.log(err),
      );

    this._authService.getUserDonations(this.userID)
      .subscribe(
        res => this.fundraisings = res['fundraisings'],
        err => console.log(err),
      );

    console.log("tutu" + this.donations)
    console.log("tutu" + this.fundraisings)

  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }
}
