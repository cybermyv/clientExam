import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVICE } from '../service.config';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(SERVICE.data.path).pipe()
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(SERVICE.data.path, data);
  }

  delete(id: number): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id        
      },
    };
    return this.http.delete<any>(SERVICE.data.path + `/${id}`, options);
  }
}
