import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);
@Component({
  selector: 'shared-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickersharedComponent {
  locale = 'pt-br';
  theme = localStorage.getItem('colorSelected');
  @Input() group: FormGroup;
  @Input('nameControl') nameControl: string;
  @Input('nameField') nameField: string;
  @Input('date') date: string;
  bsValue = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  selectDate: string;
  @Output() sendDate = new EventEmitter();
  constructor(
    private datePipe: DatePipe,
    private localeService: BsLocaleService,
    private cdr: ChangeDetectorRef
  ) {
    this.bsConfig = Object.assign({}, {
      containerClass: this.theme,
      showWeekNumbers: false,
      customTodayClass: this.theme
    });
    localeService.use('pt-br');
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    setTimeout(() => {
      pop.show();
    });
  }
  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
  //SEta a data conforme o datepicker
  onValueChange(value: Date): void {
    this.selectDate = this.datePipe.transform(value, 'yyyy-MM-dd');
    this.sendDate.emit(this.selectDate)
  }

 changeMask(value){
     console.log(value)
  }
}
