import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './shared/table/table.component';
import { SegundaTablaComponent } from './features/segunda-tabla/segunda-tabla.component';

interface Persona {
  nombre: string;
  apellidos: string;
  empleado: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,SegundaTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  columnas = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellidos', label: 'Apellidos' },
    { key: 'empleado', label: 'Empleado' }
  ];
  
  // Datos dummy (simulados)
  personas = [
    { nombre: 'Juan', apellidos: 'Pérez López', empleado: 'Sí' },
    { nombre: 'María', apellidos: 'García Torres', empleado: 'No' },
    { nombre: 'Carlos', apellidos: 'Ramírez Díaz', empleado: 'Sí' },
    { nombre: 'Ana', apellidos: 'Martínez Ruiz', empleado: 'Sí' },
    { nombre: 'Luis', apellidos: 'Hernández Cruz', empleado: 'No' },
  ];
}
