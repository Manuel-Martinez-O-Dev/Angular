import { Component } from '@angular/core';
import { CodigoService } from '../codigo.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {

  constructor( private _Codigo:CodigoService){

    _Codigo.Carga(["codigo"]);
  }
}
