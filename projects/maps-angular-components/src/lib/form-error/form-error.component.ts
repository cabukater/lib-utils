import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'shared-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  theme = localStorage.getItem('colorSelected') 
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  formSubmitAttempt: any;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  checkValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
   
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.checkValidations(control);
      }
    });

  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) || 
    (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)

    };
  }

 

}
