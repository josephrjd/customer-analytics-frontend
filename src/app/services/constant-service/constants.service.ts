import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  ///////////// Server details //////////////////
  server = 'http://10.1.182.88:8081';

  ///////////// Constants ///////////////////////
  loginURL = '/login';

  ///////////// Messages ////////////////////////
  loginSuccess = 'Welcome to customer analytics';
  loginFailed = 'Your credentials seem to be incorrect';
  serverError = 'Oops we are having a hiccup'
  constructor() { }

}
