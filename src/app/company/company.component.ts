import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[NgbCarouselConfig],
})
export class CompanyComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.wrap = false;
    // config.keyboard = false;
    config.interval = 500;
  }

  ngOnInit() {
  }

}
