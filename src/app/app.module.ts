import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CodigoService } from './codigo.service';


import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CodigoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
