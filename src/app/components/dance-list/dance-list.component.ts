import { Component, OnInit } from '@angular/core';
import {DanceService} from "../../services/dance.service";

@Component({
  selector: 'app-dance-list',
  templateUrl: './dance-list.component.html',
  styleUrls: ['./dance-list.component.css']
})
export class DanceListComponent implements OnInit {
  games:any[] = [];

  constructor(private _danceService:DanceService) {

  }

  ngOnInit(): void {
    this._danceService.getAllDances().subscribe((games)=>{
      this.games = games;
    });
  }

}
