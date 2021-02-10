import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import { PalmeirasComponent } from './teams/palmeiras/palmeiras.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHomeComponent,
    PalmeirasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
