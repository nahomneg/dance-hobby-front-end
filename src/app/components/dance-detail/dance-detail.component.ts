import {Component, OnInit, Output} from '@angular/core';
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
  dance!:Dance;
  eventForm!:FormGroup;
  isModalVisible: boolean = false;
  @Output() updatedValue: string = '';
  fieldToBeUpdated: string = 'Name';
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

  onDeleteEvent(eventId:string) {
    this.danceService.deleteEventFromDance(this.dance._id, eventId).subscribe((deletedDance)=>{
      this.getDanceDetails();
    });
  }

  editName() {
    this.isModalVisible = true;
    this.fieldToBeUpdated = 'Name';


  }
  handleCancel(): void {
    this.isModalVisible = false;
  }

  handleOk() {
    this.isModalVisible = false;
    let body = {

    }
    if (this.fieldToBeUpdated == 'Name'){
      // @ts-ignore
      body['name'] = this.updatedValue;
    }
    if (this.fieldToBeUpdated == 'Country'){
      // @ts-ignore
      body['countryOfOrigin'] = this.updatedValue;
    }
    this.danceService.editDance(this.dance._id, body).subscribe((editedDance) => {
      this.dance = editedDance;
    })
  }

  editCountry() {
    this.isModalVisible = true;
    this.fieldToBeUpdated = 'Country';
  }
}

