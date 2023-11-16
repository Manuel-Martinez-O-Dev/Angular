import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  name:string = "Python";
  abrev:string = "Py";

  dataUsers: any = [];
  dataData: any = [];

  constructor(private apiService: ApiService, private dataService: DataService){}

  ngOnInit()
  {
    this.apiService.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    } );
    
    this.dataService.getData().subscribe( (data) => {
   
      this.dataData = data;
    } );
  }

  save()
  {
    var body = 
    {
      name: this.name,
      abrev: this.abrev
    }
    this.dataService.postData(body).subscribe( (data) => {
      console.log(data)   
    })
  }
}
