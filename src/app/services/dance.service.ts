import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dance} from "../models/dance";
import {Event} from '../models/event';
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DanceService {
  baseUrl:string = environment.DANCE_BASE_URL;

  constructor(private _http:HttpClient, private authService:AuthService) {

  }

  public getAllDances():Observable<Dance[]>{
    return this._http.get<Dance[]>(this.baseUrl,{headers: {
        'Authorization':environment.BEARER + this.authService.getToken()
      }});
  }
  public getDance( danceId:string ):Observable<Dance>{
    return this._http.get<Dance>(this.baseUrl + danceId,{headers: {
        'Authorization':environment.BEARER + this.authService
      }});
  }
  public addDance(dance: FormData):Observable<Dance>{
    console.log(dance)
    return this._http.post<Dance>(this.baseUrl,dance,{});
  }
  public deleteDance (danceId : string ): Observable<String>{
    return this._http.delete<string>(this.baseUrl + danceId);
  }

  addEventToDance(danceId: any, eventData:Dance):Observable<Event> {
    const eventUrl: string = this.baseUrl + danceId + '/' + environment.events;
    return this._http.post<Event>(eventUrl,eventData);
  }

  deleteEventFromDance(danceId:string, eventId: string) {
    const eventUrl: string = this.baseUrl + danceId + '/' + 'events/' +eventId;
    return this._http.delete(eventUrl);
  }

  editDance(danceId: string, dance: {}):Observable<Dance> {
    return this._http.patch<Dance>(this.baseUrl + danceId, dance);
  }
}
