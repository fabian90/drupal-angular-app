import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DockerService {
  private apiUrl = environment.apiUrl;
  // private apiUrl = 'http://localhost:8888/drupal_project/web/api/docker';

  constructor(private http: HttpClient) {}

  getContainers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/docker/containers`);
  }

  startContainer(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/docker/containers/${id}/start`, {});
  }

  stopContainer(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/docker/containers/${id}/stop`, {});
  }

  removeContainer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/docker/containers/${id}`);
  }

  getLogs(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/docker/containers/${id}/logs`);
  }
}
