import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common-service/common.service';
import { ConstantsService } from '../../services/constant-service/constants.service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = null;
  password = null;
  data = {};
  loginHandler(serverResponse) {
    // checking if token exist
    if (serverResponse.hasOwnProperty('token')) {
      this.toasterService.pop('success', this.constants.loginSuccess, '');
      this.router.navigate(['/home']);
    // else checking the status
    } else if (serverResponse.hasOwnProperty('status')) {
      switch (serverResponse.status) {
        case 400:
          this.toasterService.pop('error', this.constants.loginFailed, '');
          break;
        default:
          this.toasterService.pop('warning', this.constants.serverError, '');
      }
    // Something went wrong
    } else {
      this.toasterService.pop('warning', this.constants.serverError, '');
    }

  }
  login() {
    this.data = {
      'username': this.username,
      'password': this.password
    };
    this.commonService.httpRequest('post', this.constants.loginURL, this.data).subscribe(
      response => this.loginHandler(response));
  }
  constructor(private commonService: CommonService,
              private constants: ConstantsService,
              private toasterService: ToasterService,
              private router: Router) { }

  ngOnInit() {
  }

}
