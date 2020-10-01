import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  categorias: string[] = [];
  productos: Producto[] = [];
  carrito: any[] = [];

  constructor() {
    this.categorias.push('ROPA');
    this.categorias.push('MUEBLES');
    this.categorias.push('ELECTRONICOS');
    //cargando datos de Prodcutos
    this.productos.push({
      nombre: 'Chamarra',
      precio: 400,
      cantidad: 6,
      detalle: '',
    });

    this.productos.push({
      nombre: 'Mesas de Oficina',
      precio: 600,
      cantidad: 6,
      detalle: '',
    });
    this.productos.push({
      nombre: 'Sillas',
      precio: 200,
      cantidad: 6,
      detalle: 'Sillas de madera',
    });
  }

  ngOnInit(): void {}

  addCarrito(prod) {
    this.carrito.push(prod);
  }
}
