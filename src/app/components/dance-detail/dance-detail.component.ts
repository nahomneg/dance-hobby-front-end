import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DanceService} from "../../services/dance.service";

@Component({
  selector: 'app-dance-detail',
  templateUrl: './dance-detail.component.html',
  styleUrls: ['./dance-detail.component.css']
})
export class DanceDetailComponent implements OnInit {
  dance:any = {};
  constructor(private route:ActivatedRoute, private danceService:DanceService) { }

  ngOnInit(): void {
    const danceId = this.route.snapshot.params['danceId'];
    this.danceService.getDance(danceId).subscribe((dance)=>{
      this.dance = dance;
    });
  }

}
