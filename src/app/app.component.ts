import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //atributos
  title = 'appangular';
  titulo: string = 'Aprendiendo TypeScript';
  subtitulo: string;
  estado: boolean;
  persona = {};
  numero: number;

  //constructor
  constructor() {
    this.subtitulo =
      'Typescript maneja tipos de datos, contructores, y metodos.';
    this.estado = true;
    this.persona = { nombre: 'Juan', edad: 40, ci: 123456 };
    this.numero = 7;
    this.incrementarNumero();
  }

  //metodos
  cambiarTitulo() {
    this.titulo = 'Aprendiendo TypeScript junto con Angular';
  }

  incrementarNumero() {
    this.numero++;
  }

  reducirNumero() {
    this.numero--;
  }
}
