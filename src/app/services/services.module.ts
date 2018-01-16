import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common-service/common.service';
import { ConstantsService } from './constant-service/constants.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor/http-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    ConstantsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  declarations: []
})
export class ServicesModule { }
