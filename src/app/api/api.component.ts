import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  name:string = "";
  lastname:string = "";
  url:string = "";
  nameNew:string = "";
  lastnameNew:string = "";
  urlNew:string = "";
  dataSource:any = [];

  user:any = "";

  constructor(private apiServece: ApiService,private authService:AuthService, private auth:AuthService, private router: Router){ }

  ngOnInit()
  {
    this.apiServece.getListLanguges().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, lastname: data[key].lastname, name: data[key].name, url: data[key].url}
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    } )

    this.user = this.auth.getuser()?.displayName;
    if(this.user == null){
      this.user = this.auth.getuser()?.email; 
    }
  }

  save()
  {
    let body = 
    {
      name: this.name,
      lastname: this.lastname,
      url: this.url
    }
    this.apiServece.postLanguage(body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
  }

  borrar(id:string){
    let aux = confirm("Esta Seguro de Borrar")
    if(!aux) return
    this.apiServece.deleteLanguage(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload();
      }
    })
  }

  actualizar(id:string){
    let aux = confirm("Esta Seguro de Actualizar")
    let body = 
    {
      lastname: this.lastnameNew,
      name: this.nameNew,
      url: this.urlNew
    }    
    if(!aux) return
    this.apiServece.updateLanguage(id, body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
  }


  salir(){
    this.auth.logout().then(res=>{
      this.router.navigate(["/"])
    }).catch(error=>{
      console.log(error);
    })
  }
}
