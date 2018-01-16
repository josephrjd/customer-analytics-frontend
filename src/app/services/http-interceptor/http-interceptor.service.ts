import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  // This interceptor is to add token if exist in header for every request
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('currentUser') != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('currentUser')}`
        }
      });
    }
    return next.handle(request);
  }
  constructor() { }

}
