import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-warning-banner',
  templateUrl: './warning-banner.component.html',
  styleUrls: ['./warning-banner.component.css']
})
export class WarningBannerComponent implements OnInit {

  isShow = true;

  featureHide() {
   this.isShow= false;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
