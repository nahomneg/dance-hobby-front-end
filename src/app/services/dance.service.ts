import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dance} from "../models/dance";


@Injectable({
  providedIn: 'root'
})
export class DanceService {
  baseUrl:string = 'http://localhost:3000/dances/'

  constructor(private _http:HttpClient) {

  }

  public getAllDances():Observable<Dance[]>{
    return this._http.get<Dance[]>(this.baseUrl);
  }
  public getDance( danceId:string ):Observable<Dance>{
    return this._http.get<Dance>(this.baseUrl + danceId);
  }
  public addDance(dance: Dance):Observable<Dance>{
    return this._http.post<Dance>(this.baseUrl,dance,{});
  }
  public deleteDance (danceId : string ): Observable<String>{
    return this._http.delete<string>(this.baseUrl + danceId);
  }

  addEventToDance(danceId: any, eventData:Dance) {
    const eventUrl: string = this.baseUrl + danceId + '/' + 'events/';
    return this._http.post(eventUrl,eventData);
  }
}
