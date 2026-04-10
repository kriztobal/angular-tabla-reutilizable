import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Column {
  key: string;
  label: string;
  format?: (value: any) => string;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  // Recibe los datos a mostrar en la tabla, cada objeto representa una fila
  @Input() data: any[] = [];

  // Recibe la configuración de las columnas, cada columna tiene una clave (key)
  //  que corresponde a la propiedad del objeto data y una etiqueta (label) 
  // que se muestra en la tabla. Además, puede tener una función de 
  // formato opcional para personalizar la visualización de los datos.
  @Input() columns: Column[] = [];

}
