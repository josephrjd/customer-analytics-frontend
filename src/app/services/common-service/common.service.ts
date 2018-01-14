import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constant-service/constants.service';
import { Observable } from 'rxjs/Observable';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RequestOptions } from '@angular/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class CommonService {
  authToken = localStorage.getItem('currentUser');
  headers = null;
  options = null;
  httpRequest(method, url, data?) {
    this.spinnerService.show();
    if (localStorage.getItem('currentUser') != null) {
      this.authToken = localStorage.getItem('currentUser');
      console.log(`Bearer ${this.authToken}`);
      // this.headers.append('Authorization', `Bearer ${this.authToken}`);
    }
    this.options = { headers: this.headers };
    switch (method) {
      case 'get':
        this.headers = new Headers({ 'Authorization': `Bearer ${this.authToken}` });
        return this.http.get(this.constants.server + url, this.options).pipe(
          tap(_ => {
            this.spinnerService.hide();
          }),
          catchError(err => {
            this.spinnerService.hide();
            return Observable.of(err);
          })
        );
      case 'post':
        return this.http.post(this.constants.server + url, data, this.options).pipe(
          tap(_ => {
            this.spinnerService.hide();
          }),
          catchError(err => {
            this.spinnerService.hide();
            return Observable.of(err);
          })
        );
    }
  }

  constructor(private http: HttpClient,
              private constants: ConstantsService,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

}
