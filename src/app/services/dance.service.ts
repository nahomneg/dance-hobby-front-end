import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DanceService {
  baseUrl:string = 'http://localhost:3000/dances/'

  constructor(private _http:HttpClient) {

  }

  public getAllDances():Observable<any>{
    return this._http.get(this.baseUrl);
  }
  public getDance( danceId:string ):Observable<any>{
    return this._http.get(this.baseUrl + danceId);
  }
}
