// perfil.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any = "";
  nombre: string = "";
  apellido: string = "";
  userPhoto: string = "";
  editing: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    const user = this.auth.getuser();

    if (user) {
      this.user = user.displayName;
      if (this.user == null) {
        const displayNameParts = user.displayName?.split(" ");
        if (displayNameParts?.length === 2) {
          this.nombre = displayNameParts[0];
          this.apellido = displayNameParts[1];
        }
        if (this.nombre === undefined) {
          this.user = user.email;
        }
      }

      // Asignar la foto de perfil si está disponible
      this.userPhoto = user.photoURL || '';
    }
  }

  editar() {
    this.editing = true;
  }

  guardarCambios() {
    // Actualizar el nombre, apellido y la foto de perfil en el servicio
    this.auth.actualizarPerfil(this.nombre, this.apellido, this.userPhoto);

    // Desactivar la edición
    this.editing = false;
  }

  salir() {
    this.auth.logout().then(res => {
      this.router.navigate(["/"]);
    }).catch(error => {
      console.log(error);
    });
  }
}
