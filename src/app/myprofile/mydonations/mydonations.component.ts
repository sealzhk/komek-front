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
  donations: any = [];
  fundraisings: any = [];
  needItems: any = [];
  userID: string;
  donation: string;
  fundraising: string;
  private needObject: { fundName: string; donationSum: number };

  constructor(private _authService: AuthService,
              private _fundraisingService: FundraisingService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this._authService.getLoggedUser();
    this._authService.getUserDonations(this.userID)
      .subscribe(
        res => {
          this.donations = res;
          for(let i = 0; i < res.length; i++){
            this._fundraisingService.getFundraisingById(res[i].fundraisingid)
              .subscribe(
                fund => {
                  this.fundraisings[i] = fund;
                  this.needItems[i] = {fundName: this.fundraisings[i].title,
                                       donationSum: this.donations[i].donation};
                }
              );
          }
        },
            err => console.log(err)
      );

  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }
}
