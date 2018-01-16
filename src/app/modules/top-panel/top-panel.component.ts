import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../services/constant-service/constants.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  websiteName = this.contants.websiteName;

  constructor(private contants: ConstantsService) { }

  ngOnInit() {
  }

}
