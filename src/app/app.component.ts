import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ColorService } from 'shared-angular-components'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase-components';
  @Input() menuOpen: boolean;
  @Output() resMenu = new EventEmitter();
  openMenu: boolean;
  theme = localStorage.getItem('colorSelected');
  themeColor: any;
  constructor(
    public colorService: ColorService,
  ) {
    this.testeCor();
  }
  menuStatus(menu: boolean) {
    this.resMenu.emit('menuOpen');
    this.openMenu = menu;
  }
  testeCor() {
    this.colorService.negativePositive();
    this.colorService.checkColor();
    if (this.themeColor === 'positive') {
      console.log('oi')
    } else {
      console.log('tchaul')
    }
  }
  selectTheme($event) {
    console.log($event)
  }

  downloadFile(data: Response) {
    const blob = new Blob(['assets/white_label.zip'], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
