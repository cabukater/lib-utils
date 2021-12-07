import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-datepicker-show',
  templateUrl: './datepicker-show.component.html',
  styleUrls: ['./datepicker-show.component.scss']
})
export class DatepickerShowComponent implements OnInit {
  form: FormGroup;
  dateSelected: any;
  codeModule= `import {  DatepickerModule } from 'shared-angular-components';`;
  codeInstance= `  imports: [
    ...,
    DatepickerModule,
    ...
  ],`;
  codeHtml=` <shared-datepicker
  (sendDate)="receiverDate($event)"
  [nameField]="'Data'" <= nome do campo que será exibido no Label
  [nameControl]="'data'" <= o nome do campo do formulário (valor a ser enviado ao servidor no form)
  ngDefaultControl
  [group]="form"
></shared-datepicker>`

codeForm = `formConstr() {
  this.form = new FormGroup({
    data: new FormControl( this.dateSelected),
   });
}`
codeFunction= `receiverDate(event){
  this.dateSelected = event <= recebe a variavel da lib
   }; `

   codeHtmlFull= `
   <div class="row">
     <div class="col-md-3 m-2 pl-4 ml-5"  [formGroup]="form">
       <shared-datepicker
         (sendDate)="receiverDate($event)"
         [nameField]="'Data'"
         [nameControl]="'data'"
         ngDefaultControl
         [group]="form"
       ></shared-datepicker>
     </div>
   </div>
`

codeTypeFull= `import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-datepicker-show',
  templateUrl: './datepicker-show.component.html',
  styleUrls: ['./datepicker-show.component.scss']
})
export class DatepickerShowComponent implements OnInit {
  form: FormGroup;
  dateSelected: any;
    constructor() { }
  ngOnInit() {
     this.formConstr();
  }
  formConstr() {
    this.form = new FormGroup({
      data: new FormControl( this.dateSelected),
     });
  }
  receiverDate(event){
    this.dateSelected = event
  }
}`

nodeModule= ` "styles": [
   "node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss"
],`

  constructor() { }
  ngOnInit() {
     this.formConstr();
  }
  formConstr() {
    this.form = new FormGroup({
      data: new FormControl( this.dateSelected),
     });
  }
  receiverDate(event){
    this.dateSelected = event
  }
}
