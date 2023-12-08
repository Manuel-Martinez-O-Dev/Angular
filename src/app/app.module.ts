import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CodigoService } from './codigo.service';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';

import { FormsModule } from '@angular/forms';


import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LabsComponent } from './labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';
import { PerfilComponent } from './perfil/perfil.component';

const config = {
  apiKey: "AIzaSyDjQgCF6k_1kpW1-TyOkYlXgIY8KNs9F58",
  authDomain: "practicando-bd.firebaseapp.com",
  databaseURL: "https://practicando-bd-default-rtdb.firebaseio.com",
  projectId: "practicando-bd",
  storageBucket: "practicando-bd.appspot.com",
  messagingSenderId: "968904887752",
  appId: "1:968904887752:web:d56a13cc5250db3e8204fd",
  measurementId: "G-TXQTMNDSPT"
};

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    ApiComponent,
    LoginComponent,
    RegisterComponent,
    LabsComponent,
    HeaderComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
  ],
  providers: [
    CodigoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
