import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './shared/table/table.component';
import { SegundaTablaComponent } from './features/segunda-tabla/segunda-tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,SegundaTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  /* 
   * Columnas de la tabla, cada columna tiene una clave (key) que corresponde 
  a la propiedad del objeto persona y una etiqueta (label) que se muestra en la tabla.
   */
  columnas = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellidos', label: 'Apellidos' },
    { key: 'empleado', label: 'Empleado' }
  ];
  
  /* 
   * Datos de las personas, cada objeto representa una fila en la tabla.
   */
  personas: Persona[] = [
    { nombre: 'Juan', apellidos: 'Pérez López', empleado: true },
    { nombre: 'María', apellidos: 'García Torres', empleado: false },
    { nombre: 'Carlos', apellidos: 'Ramírez Díaz', empleado: true },
    { nombre: 'Ana', apellidos: 'Martínez Ruiz', empleado: true },
    { nombre: 'Luis', apellidos: 'Hernández Cruz', empleado: false },
  ];
}
