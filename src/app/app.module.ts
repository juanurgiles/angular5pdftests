import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularJasperModule } from 'angularjasper2';
const jasperConfig = {
  server: 'http://build-master.jaspersoft.com:5980/jrs-pro-trunk',
  login: 'superuser',
  password: 'superuser'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularJasperModule.initializeApp(jasperConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
