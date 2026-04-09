import { NgClass, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  // Recibe los datos a mostrar en la tabla, cada objeto representa una fila
  @Input() data: any[] = [];

  // Recibe las columnas a mostrar en la tabla, con su clave y etiqueta
  @Input() columns: { key: string, label: string }[] = [];

}
