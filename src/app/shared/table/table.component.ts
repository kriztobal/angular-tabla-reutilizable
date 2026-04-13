import { NgClass, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Column } from '../types/column.type';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent<T> {

  // Recibe los datos a mostrar en la tabla, cada objeto representa una fila
  @Input() data: T[] = [];

  // Recibe la configuración de las columnas, cada columna tiene una clave (key)
  //  que corresponde a la propiedad del objeto data y una etiqueta (label) 
  // que se muestra en la tabla. Además, puede tener una función de 
  // formato opcional para personalizar la visualización de los datos.
  @Input() columns: Column<T>[] = [];

  formatValue(value: unknown): string {
    if (typeof value === 'boolean') {
      return value ? 'Sí': 'No';
    }

    if (typeof value === 'number') {
      return new Intl.NumberFormat('es-MX').format(value);
    }

    if (value === null || value === undefined) {
      return '-';
    }

    return String(value);
  }

}
