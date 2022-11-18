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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";

registerLocaleData(en);


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
                component: AddDanceComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                component: DanceListComponent
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzCardModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
