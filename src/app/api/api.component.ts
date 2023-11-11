import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  data: any[] = [];

  imagen: String = '';

  constructor(private apiServece: ApiService){ }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiServece.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
