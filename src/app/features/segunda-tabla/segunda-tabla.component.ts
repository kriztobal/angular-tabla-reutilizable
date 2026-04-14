import { Column } from '../../shared/types/column.type';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Productos } from '../../models/producto.model';
import { ProductosService } from '../../services/productos/productos.service';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-segunda-tabla',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './segunda-tabla.component.html',
  styleUrl: './segunda-tabla.component.css'
})

//export class SegundaTablaComponent<T> {
export class SegundaTablaComponent {

  constructor(private productosService: ProductosService) {}
  
  columnas: Column<Productos>[] = [
    { key: 'producto', label: 'Producto' },
    { key: 'precio', label: 'Precio' },
    { key: 'stock', label: 'Stock' },
    { key: 'categoria', label: 'Categoría' }
  ];
  
  datos: Productos[] = [];

  obtenerProductos() {
    this.productosService.obtenerProductos()
      .subscribe(data => {
        this.datos = data;
      })
  }

  ngOnInit() {
    this.obtenerProductos();
  }
  
}
