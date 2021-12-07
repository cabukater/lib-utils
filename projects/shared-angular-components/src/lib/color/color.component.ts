import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'shared-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() name: string;
  @Output() themeColor = new EventEmitter<string>();
  theme = localStorage.getItem('colorSelected');

  constructor(
    private colorServ: ColorService
  ) {
    this.startElement();
  }

  ngOnInit() { }

  startElement() {
    if (localStorage.getItem('colorSelected') === null) {
      this.theme = 'positive';
      localStorage.setItem('colorSelected', 'positive')
    } else {

    }
  }

  changeThemePos() {
    this.colorServ.changeThemePositive();
  }

  changeThemeNeg() {
    this.colorServ.changeThemeNegative();
  }
}
