import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CodigoService } from './codigo.service';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CodigoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
