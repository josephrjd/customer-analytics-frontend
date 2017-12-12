import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constant-service/constants.service';
import { Observable } from 'rxjs/Observable';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class CommonService {

  httpRequest(method, url, data?) {
    this.spinnerService.show();
    switch (method) {
      case 'get':
        return this.http.get(this.constants.server + url).pipe(
          tap(_ => {
            this.spinnerService.hide();
          }),
          catchError(err => {
            this.spinnerService.hide();
            return Observable.of(err);
          })
        );
      case 'post':
        return this.http.post(this.constants.server + url, data).pipe(
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
