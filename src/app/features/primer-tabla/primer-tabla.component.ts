import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Persona } from '../../models/persona.model';
import { TableComponent } from '../../shared/table/table.component';
import { Column } from '../../shared/types/column.type'; 
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-primer-tabla',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './primer-tabla.component.html',
  styleUrl: './primer-tabla.component.css'
})
export class PrimerTablaComponent {

  constructor(private empleadosService: EmpleadosService) {}
  
  /* 
  * Columnas de la tabla, cada columna tiene una clave (key) que corresponde 
  a la propiedad del objeto persona y una etiqueta (label) que se muestra en la tabla.
  */
 columnas: Column<Persona>[] = [
   { key: 'nombre', label: 'Nombre' },
   { key: 'apellidos', label: 'Apellidos' },
   { 
     key: 'empleado', 
      label: 'Empleado',
      format: (value) => value ? 'Sí' : 'No' 
    }
  ];
  
  /* 
   * Datos de las personas, cada objeto representa una fila en la tabla.
   */
  personas: Persona[] = [];

  obtenerEmpleados() {
    this.empleadosService.obtenerEmpleados()
      .subscribe(data => {
        this.personas = data;
      });
  }
  
  ngOnInit() {
    this.obtenerEmpleados();
  }
}
