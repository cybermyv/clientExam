import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICE } from '../service.config';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(SERVICE.data.path).pipe(tap( data => {
      console.log(data);
    }))
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(SERVICE.data.path, data);
  }
}
