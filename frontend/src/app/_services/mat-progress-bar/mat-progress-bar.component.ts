import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.css']
})
export class MatProgressBarComponent implements OnInit {

  progresValue:number;
  rangeArray:number[];

  constructor() {
    this.progresValue = 0;
    this.rangeArray = new Array(100);
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    var element = document.documentElement,
      body = document.body,
      scrollTop = 'scrollTop',
      scrollHeight = 'scrollHeight';
      this.progresValue =
        (element[scrollTop]||body[scrollTop]) /
        ((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;
  }

}
