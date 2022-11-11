import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import { DanceListComponent } from './components/dance-list/dance-list.component';
import { DanceDetailComponent } from './components/dance-detail/dance-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {AddDanceComponent} from "./components/add-dance/add-dance.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddDanceComponent,
    DanceListComponent,
    DanceDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DanceListComponent
      },
      {
        path: 'dances/:danceId',
        component: DanceDetailComponent
      },
      {
        path: 'adddance',
        component : AddDanceComponent
      },
      {
        path: 'login',
        component :LoginComponent
      },
      {
        path:'**',
        component: DanceListComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
