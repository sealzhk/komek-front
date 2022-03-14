import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FundraisingService {

  private _fundraisingUrl = "http://localhost:3000/fundraising/";
  constructor(private http: HttpClient) { }

  getFundraisings() {
    return this.http.get<any>(this._fundraisingUrl)
  }

  getFundraisingById(id: String){
    console.log('id passed ' + this._fundraisingUrl + id)
    return this.http.get<any>(this._fundraisingUrl + id)
  }
}
