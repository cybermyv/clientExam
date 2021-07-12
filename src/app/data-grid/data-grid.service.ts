import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVICE } from '../service.config';
import { Observable } from 'rxjs';
import { IDataRecord } from '../data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<IDataRecord[]> {
    return this.http.get<IDataRecord[]>(SERVICE.data.path).pipe()
  }

  update(data: IDataRecord): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: data.eventId        
      },
    };

    return this.http.put<IDataRecord>(SERVICE.data.path, data, options);
  }

  delete(id: number): Observable<IDataRecord> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id        
      },
    };

    return this.http.delete<IDataRecord>(SERVICE.data.path + `/${id}`, options);
  }

  create(newRecord: IDataRecord): Observable<IDataRecord> {

    return this.http.post<IDataRecord>(SERVICE.data.path, newRecord);
  }
}
