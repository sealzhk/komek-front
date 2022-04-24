import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  userData: any = [];
  user: any = {};
  userID: string;
  selectedValue = null;
  numGender: string;
  image: File = null;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this._authService.getLoggedUser();
    this._authService.getUserById(this.userID).subscribe(
      user => {
        this.userData = user
        console.log(this.userID)
      }
    )
  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }

  onChangeSelect(newvalue){
    this.numGender = newvalue.target.value;
    if (this.numGender == '1') {
      this.user.gender = 'Male';
      console.log('gender is ' + this.user.gender);
    }
    if (this.numGender == '2') {
      this.user.gender = 'Female';
      console.log('gender is ' + this.user.gender);
    }
  }

  updateProfileData() {
    this._authService.putUserById(this.userID, this.user)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/myprofile', this.userID]);
        },
        err => console.log(err)
      )
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      this.image = <File>event.target.files[0];
    }
  }

}
