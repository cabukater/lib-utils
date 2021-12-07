import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl, NgForm, NgControlStatus } from '@angular/forms';
import { FormErrorComponent } from 'shared-angular-components';




@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})


export class FormErrorShowComponent {

  form: FormGroup;
  formSubmitAttempt: boolean;
  @Input() menuOpen: boolean;
  @Output() resMenu = new EventEmitter();
  openMenu: boolean;

  codeValidForm = `
  sendIform(form) {
    if (this.form.valid) {
    console.log('foi')
    } else {
     console.log('não')
     this.formError.checkValidations
    }
  }`;

  codeForm = `
  this.form = this.formBuilder.group({
    nome: this.formBuilder.control(null, [Validators.required]),
    });`;

  codeInput = ` <input class="form-control " id="nome" formControlName="nome" required autofocus
     [ngClass]="{'input-ok ': form.controls.nome.value  != null }">`;

  codeDirective = `
  <shared-form-error [displayError]="isFieldValid('nomeCampo')" errorMsg="nomeCampo está inválido">
  </shared-form-error>`;

  codeValidator = ` isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
     (this.form.get(field).untouched && this.formSubmitAttempt);
  }`;

  codeDisplayCSS = `   displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)

    };
  }`;



  codeFull = `
  import { FormErrorComponent } from 'shared-angular-components';
  import { FormGroup,
     FormArray,
     FormBuilder,
     Validators, 
     FormControl } from '@angular/forms';

  constructor(
    private formError : FormErrorComponent,
     private formBuilder: FormBuilder)
     {
       this.formConstr() 
     }
 
   formConstr() {
     this.form = this.formBuilder.group({
       nome: this.formBuilder.control(null, [Validators.required]),
       });
   }
 
   sendIform(form) {
     if (this.form.valid) {
     console.log('foi')
     } else {
       
      console.log('não')
      this.formError.checkValidations
      
     }
   }
 
 
   isFieldValid(field: string) {
     return (!this.form.get(field).valid && this.form.get(field).touched) || (this.form.get(field).untouched && this.formSubmitAttempt);
   }
 
   displayFieldCss(field: string) {
     return {
       'has-error': this.isFieldValid(field),
       'has-feedback': this.isFieldValid(field)
 
     };
   }
 
   menuStatus(menu: boolean) {
     this.resMenu.emit('menuOpen');
     this.openMenu = menu;
    }`

  constructor(
    private formError: FormErrorComponent,
    private formBuilder: FormBuilder) {
    this.formConstr()
  }

  formConstr() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(null, [Validators.required]),
    });
  }

  sendIform(form) {
    if (this.form.valid) {
      console.log('foi')
    } else {

      console.log('não')
      this.formError.checkValidations

    }
  }


  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) || (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)

    };
  }

  menuStatus(menu: boolean) {
    this.resMenu.emit('menuOpen');
    this.openMenu = menu;
  }

  sendInvestidor(form) {

  }

}
