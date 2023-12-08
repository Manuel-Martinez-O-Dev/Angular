import { Injectable } from '@angular/core';
import {
  updateProfile,
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  getuser(){
    return this.auth.currentUser;
  }

  register(email:string, pass:string, nombre:string, apellido:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;

      return updateProfile(user, {
        displayName: `${nombre} ${apellido}`
      });
    })
    .catch((error) => {
      throw error;
    });
  }

  loginwithcredentials(user:string, pass:string){
    return signInWithEmailAndPassword(this.auth, user, pass);
  }

  loginwithgoogle()
  {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }


  actualizarNombreApellido(nombre: string, apellido: string) {
    const user = this.auth.currentUser;

    if (user) {
      // Actualizar el perfil del usuario con el nuevo nombre y apellido
      return updateProfile(user, { displayName: `${nombre} ${apellido}` })
        .then(() => {
          // Actualización exitosa
          console.log('Nombre y apellido actualizados correctamente.');
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error al actualizar nombre y apellido:', error);
          throw error;
        });
    } else {
      // El usuario no está autenticado
      console.error('El usuario no está autenticado.');
      throw new Error('El usuario no está autenticado.');
    }
  }


  actualizarPerfil(nombre: string, apellido: string, fotoPerfil: string) {
    const user = this.auth.currentUser;

    if (user) {
      // Actualizar el perfil del usuario con el nuevo nombre, apellido y foto de perfil
      return updateProfile(user, {
        displayName: `${nombre} ${apellido}`,
        photoURL: fotoPerfil,
      });
    } else {
      // El usuario no está autenticado
      console.error('El usuario no está autenticado.');
      throw new Error('El usuario no está autenticado.');
    }
  }
}