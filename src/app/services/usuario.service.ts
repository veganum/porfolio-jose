import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {
      usuario: 'veganum',
      nombre: 'Jose',
      apellido: 'Franco',
      sexo: 'Masculino',
    },
    {
      usuario: 'Anthony',
      nombre: 'Antonio',
      apellido: 'Franco',
      sexo: 'Masculino',
    },
    {
      usuario: 'Bozhi',
      nombre: 'Bozhidara',
      apellido: 'Angelova',
      sexo: 'Femenino',
    },
    {
      usuario: 'veganum',
      nombre: 'Jose',
      apellido: 'Franco',
      sexo: 'Masculino',
    },
    {
      usuario: 'Anthony',
      nombre: 'Antonio',
      apellido: 'Franco',
      sexo: 'Masculino',
    },
    {
      usuario: 'Bozhi',
      nombre: 'Bozhidara',
      apellido: 'Angelova',
      sexo: 'Femenino',
    },
  ];

  constructor() {}

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    //añade al principio del array
    this.listUsuarios.unshift(usuario);

    //añade al final del array
    // this.listUsuarios.push();
  }
}
