import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userID: string;

  constructor(public _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  onSelectProfile() {
    this.userID = this._authService.getLoggedUser();
    this._router.navigate(['/myprofile', this.userID]);
    console.log("Passed id: " + this.userID);
  }

}
