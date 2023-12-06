import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { ApiComponent } from './api/api.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LabsComponent } from './labs/labs.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: PaginaComponent },
  { path: '', component: ApiComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: "labs", component:LabsComponent, ...canActivate(()=>redirectUnauthorizedTo(["/"]))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
