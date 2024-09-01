
// src/app/infrastructure/services/drupal-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';


interface DataRecord {
  apellido: string;
  nombre: string;
  tipo_documento: string;
  numero_documento: string;
  correo: string;
  telefono: string;
  pais: string;
}

@Injectable({
  providedIn: 'root',
})
export class DrupalApiService {
    private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}

  getData(): Observable<DataRecord[]> {
    console.log('API URL:', `${this.apiUrl}/formulario`);
    return this.http.get<DataRecord[]>(`${this.apiUrl}/formulario`);
  }
}
