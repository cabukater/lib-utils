import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent implements OnInit {
  @Input('textButton') textButton: string;
  @Input('type') type: string;
  @Input('icon') icon: string;
  @Input('size') size: string;
  @Input('outline') outline: boolean;
  @Input('tooltip') tooltip: string;
  @Input('posTooltip') posTooltip: string;
  out: string;
  @Input('fab') fab : string;
  @Input('round') round : string;
  @Input('secondary') secondary: boolean;
  @Input('disabled') disabled: boolean
  secondaryType: string;
  theme = localStorage.getItem('colorSelected');

  constructor() { }

  ngOnInit() {

    this.getSize();
    this.isOutline();
    this.isSecondary();

    }



  isSecondary() {
    if (this.secondary) {
      this.secondaryType = 'secondary'
    } else {
      this.secondaryType = 'action-type'
    } 
  }

  isOutline() {
    if (this.outline) {
      this.out = 'outline'
    } else {
      this.out = 'full'
    }
  }

  getSize() {
    if (this.size === null) {
      this.size = 'btn-md'
    }
    if (this.size === 'md') {
      this.size = 'btn-md'
    } if (this.size === 'sm') {
      this.size = 'btn-sm'
    } if (this.size === 'sm') {
      this.size = 'btn-sm'
    } if (this.size === 'block') {
      this.size = 'btn-block'
    } if (this.size === 'lg') {
      this.size = 'btn-lg'
    }
  }

  
}
