import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVICE } from './service.config';
import * as data from './mock.json';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private route: ActivatedRoute) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted request ' + request.url);
        if (request.url === SERVICE.data.path) {
            console.log('Loaded from JSON: ' + request.url);

            return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
        }

  
        if (request.method === 'DELETE') {
            const deletedId = request.body.id;            
            console.log('Delete from JSON: ' + deletedId);
            const result = data.result.find(item => item.eventId === deletedId);
            const idx = data.result.findIndex(item => item.eventId === deletedId);            
            data.result.splice(idx, 1);

            return of(new HttpResponse({ status: 200, body: result}));
        }

        return next.handle(request);
    }

    
}
