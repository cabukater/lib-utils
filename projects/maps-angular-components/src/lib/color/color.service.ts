import { Injectable, Output, EventEmitter, Input } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  isPositive = true;
  @Output() resMenu = new EventEmitter();
  @Input('colorTheme') colorTheme: string;
  @Output() themeColor = new EventEmitter();
  theme: boolean;
  texAlertCustom: string;




  constructor(
   private alertService: AlertService
  ) { }

  negativePositive() {
    this.isPositive = !this.isPositive;

  }

  colorStatus(positive: boolean) {
    this.resMenu.emit('colorSystem');
    this.isPositive = positive;
    this.checkColor();

  }

  checkColor() {
    let colorTheme: string
    if (this.isPositive === null || this.isPositive === true) {
      colorTheme = 'positive';

    } else {
      colorTheme = 'negative';


    }
  }

  changeThemePositive() {
      this.themeColor.emit('positive');
      localStorage.setItem('colorSelected', 'positive');
      this.openAlertSuccess()
      window.location.reload()
    
  }

  changeThemeNegative() {
        this.themeColor.emit('negative');
      localStorage.setItem('colorSelected', 'negative')
      this.openAlertSuccess()

       window.location.reload()



  }
  openAlertSuccess() {
    this.texAlertCustom = `Alterado para tema ${this.theme}`
    this.alertService.successAlertCustom()
  }
}
