import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import { DanceListComponent } from './components/dance-list/dance-list.component';
import { DanceDetailComponent } from './components/dance-detail/dance-detail.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DanceListComponent,
    DanceDetailComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {
            path:'',
            component:DanceListComponent
          },
          {
            path:'dances/:danceId',
            component:DanceDetailComponent
          }
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
