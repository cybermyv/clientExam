import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVICE } from './service.config';
import * as data from './mock.json';
import { of } from 'rxjs';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted request ' + request.url);
        if (request.url === SERVICE.data.path) {
            console.log('Loaded from JSON: ' + request.url);
            return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
        }
        return next.handle(request);
    }
}