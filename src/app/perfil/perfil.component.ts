import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  user:any = "";
  nombre: string = "";
  apellido: string = "";
  editing: boolean = false;

  constructor(private auth:AuthService, private router: Router){

  }

  ngOnInit() {
    const user = this.auth.getuser();

    if (user) {
      this.user = user.displayName;
      if (this.user == null) {
        // Si el nombre completo no está disponible, intenta dividir el displayName en nombre y apellido
        const displayNameParts = user.displayName?.split(" ");
        if (displayNameParts?.length === 2) {
          this.nombre = displayNameParts[0];
          this.apellido = displayNameParts[1];
        }
        
        // Si no se puede dividir, utiliza el correo electrónico
        if (this.nombre === undefined) {
          this.user = user.email;
        }
      }
    }
  }
  editar() {
    this.editing = true;
  }
  // Nuevo método para guardar los cambios
  guardarCambios() {
    // Actualizar el nombre y apellido en el servicio
    this.auth.actualizarNombreApellido(this.nombre, this.apellido);

    // Desactivar la edición
    this.editing = false;
  }

  salir(){
    this.auth.logout().then(res=>{
      this.router.navigate(["/"])
    }).catch(error=>{
      console.log(error);
    })
  }
}
