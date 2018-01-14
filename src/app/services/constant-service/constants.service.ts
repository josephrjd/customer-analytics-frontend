import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  ///////////// Server details //////////////////
  server = 'http://localhost:8081';

  ///////////// Mappings ///////////////////////
  loginURL = '/login';

  ///////////// Constants ///////////////////////
  websiteName = 'Customer analytics';

  ///////////// Messages ////////////////////////
  loginSuccess = 'Welcome to customer analytics';
  loginFailed = 'Your credentials seem to be incorrect';
  serverError = 'Oops we are having a hiccup'
  constructor() { }

}
