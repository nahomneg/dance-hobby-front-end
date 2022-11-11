import { Component, OnInit } from '@angular/core';
import {DanceService} from "../../services/dance.service";

@Component({
  selector: 'app-dance-list',
  templateUrl: './dance-list.component.html',
  styleUrls: ['./dance-list.component.css']
})
export class DanceListComponent implements OnInit {
  dances:any[] = [];

  constructor(private _danceService:DanceService) {

  }

  ngOnInit(): void {
    this.getAllDances()
  }

  getAllDances():void{
    this._danceService.getAllDances().subscribe((dances)=>{
      this.dances = dances;
    });
  }

  onDeleteDance(danceId: string,event:Event){
    event.stopPropagation();
    this._danceService.deleteDance(danceId).subscribe((dance)=>{
      this.getAllDances();
    });
  }
}
