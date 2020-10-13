import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empleado } from '../interfaces/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getlistaEmpleados():Observable<empleado[]>{
    return this.http.get<empleado[]>(this.url);
  }

  addEmpleado(nuevoEmpleado):Observable<Object>{
    return this.http.post<empleado>(this.url , nuevoEmpleado);
  }

  deleteEmpleado(id: String):Observable<Object>{    
    return this.http.delete(this.url + `/${id}`);
  }
  
}
