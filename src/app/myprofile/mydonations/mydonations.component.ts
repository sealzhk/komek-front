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
  userID: string;
  donation: string;
  private keys: string[];

  constructor(private _authService: AuthService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this._authService.getLoggedUser();
    this._authService.getUserDonations(this.userID)
      .subscribe(
        res => this.donations = res,
        err => console.log(err),
      );
    for (let donation of this.donations) {
      console.log(donation.findraisingid);
    }

  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }
}
