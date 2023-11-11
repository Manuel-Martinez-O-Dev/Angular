import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: '', component: PaginaComponent },
  { path: '', component: ApiComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
