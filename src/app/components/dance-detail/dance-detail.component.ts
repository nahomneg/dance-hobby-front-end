import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DanceService} from "../../services/dance.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Dance} from "../../models/dance";

@Component({
  selector: 'app-dance-detail',
  templateUrl: './dance-detail.component.html',
  styleUrls: ['./dance-detail.component.css']
})
export class DanceDetailComponent implements OnInit {
  dance:any = {};
  eventForm!:FormGroup;
  constructor(private route:ActivatedRoute, private danceService:DanceService) { }

  ngOnInit(): void {
    this.getDanceDetails();
    this.eventForm = new FormGroup({
      name:new FormControl(),
      date: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl()
    });

  }
  onAddEvent (){
    const danceId = this.route.snapshot.params['danceId'];
    this.danceService.addEventToDance(danceId,this.eventForm.value as Dance).subscribe((dance)=>{
      this.getDanceDetails();

    });
  }

  private getDanceDetails() {
    const danceId = this.route.snapshot.params['danceId'];
    this.danceService.getDance(danceId).subscribe((dance)=>{
      this.dance = dance;
    });
  }
}
