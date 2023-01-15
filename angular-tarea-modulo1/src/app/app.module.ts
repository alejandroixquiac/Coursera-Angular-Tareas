import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tarea1Component } from './tarea1/tarea1.component';
import { PuntoEvaluarComponent } from './punto-evaluar/punto-evaluar.component';

@NgModule({
  declarations: [
    AppComponent,
    Tarea1Component,
    PuntoEvaluarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
