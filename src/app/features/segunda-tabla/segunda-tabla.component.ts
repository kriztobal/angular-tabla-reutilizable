import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-segunda-tabla',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './segunda-tabla.component.html',
  styleUrl: './segunda-tabla.component.css'
})
export class SegundaTablaComponent {

  columnas = [
    { key: 'producto', label: 'Producto' },
    { key: 'precio', label: 'Precio' },
    { key: 'stock', label: 'Stock' },
    { key: 'categoria', label: 'Categoría' }
  ];

  datos = [
    { producto: 'Laptop', precio: 15000, stock: 10, categoria: 'Electrónica' },
    { producto: 'Mouse', precio: 300, stock: 50, categoria: 'Accesorios' },
    { producto: 'Teclado', precio: 800, stock: 20, categoria: 'Accesorios' }
  ];

}
