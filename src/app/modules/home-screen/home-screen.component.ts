import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common-service/common.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.httpRequest('get', '/someAPI').subscribe(
      response => console.log('here')
    );
  }

}
