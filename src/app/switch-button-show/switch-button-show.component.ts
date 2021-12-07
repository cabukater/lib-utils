import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-switch-button-show",
  templateUrl: "./switch-button-show.component.html",
  styleUrls: ["./switch-button-show.component.scss"]
})
export class SwitchButtonShowComponent implements OnInit {
  form: FormGroup;
  directive = `
   <shared-switch-button
       name="padrao" 
       nameControl="padrao"
       [group]="form"
       [nameField]="'Padrão'"
       (sendCheck)="receiverCheck($event)"
        ngDefaultControl>
   </shared-switch-button>`;
  moduleInsert = `import {  SwitchButtonModule  } from 'shared-angular-components'`;
  moduleImport = ` 
  imports: [
    ...,
    SwitchButtonModule,
    ...
  ],`;

  codeFunction = `
  receiverCheck(event) {
    this.checkSelected = event;
    console.log(this.checkSelected);
  }`;
  codeForm = `
  formConstr() {
    this.form = new FormGroup({
      padrão: new FormControl(null) <= o nome do campo
    });
  }`;

  codeComponent = `import { FormBuilder } from "@angular/forms";
  import { Component, OnInit } from "@angular/core";
  
  @Component({
  selector: "app-switch-button-show",
  templateUrl: "./switch-button-show.component.html",
  styleUrls: ["./switch-button-show.component.scss"]
})
export class SwitchButtonShowComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  receiverCheck(event) {
    this.checkSelected = event;
    console.log(this.checkSelected);
  }

  ngOnInit() {
    this.formConstr();
  }

  formConstr() {
    this.form = new FormGroup({
      padrão: new FormControl(null)
    });
  }
}`;
  checkSelected: any;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.formConstr();
  }
   receiverCheck(event) {
    this.checkSelected = event;
    console.log(this.checkSelected);
  }

  formConstr() {
    this.form = new FormGroup({
      padrão: new FormControl(null)
    });
  }
}
