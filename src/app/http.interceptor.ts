import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVICE } from './service.config';
import * as data from './mock.json';
import { of } from 'rxjs';
import { IDataRecord } from './data.interface';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    private readonly DATA_STORE = 'DATA_STORE';
    public records: IDataRecord[];

    constructor() {
        const dataStore = localStorage.getItem(this.DATA_STORE);
        if (!dataStore) {
            window.localStorage.setItem(this.DATA_STORE, JSON.stringify(data.result));
        }
        this.records = JSON.parse(dataStore);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        if (request.url === SERVICE.data.path) {

            return of(new HttpResponse({ status: 200, body: (this.records as any)}));
        }
  
        if (request.method === 'DELETE') {
            const deletedId = request.body.id;
            const localData = this.records as any;

            const result = localData.find(item => item.eventId === deletedId);
            const idx = localData.findIndex(item => item.eventId === deletedId);
            localData.splice(idx, 1);
            this.setDataToSorage(localData);

            return of(new HttpResponse({ status: 200, body: result }));
        }

        return next.handle(request);
    }

    private setDataToSorage(data: IDataRecord[]): void {
        window.localStorage.setItem(this.DATA_STORE, JSON.stringify(data));
    }

    
}
