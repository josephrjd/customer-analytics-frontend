import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common-service/common.service';
import { ConstantsService } from './constant-service/constants.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CommonService, ConstantsService],
  declarations: []
})
export class ServicesModule { }
