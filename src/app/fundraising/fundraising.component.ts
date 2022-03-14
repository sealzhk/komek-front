import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundraisingService } from '../service/fundraising.service';

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
  styleUrls: ['./fundraising.component.css']
})
export class FundraisingComponent implements OnInit {
  id = this._route.snapshot.params['id'];
  fundraising:any = {}
  constructor(private _fundraisingService: FundraisingService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(){
    this._fundraisingService.getFundraisingById(this.id)
      .subscribe(
        res => this.fundraising = res,
        err => console.log(err)
      )
    console.log(this.fundraising.title)
  }

}
