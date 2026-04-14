import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrl);
  }
}
