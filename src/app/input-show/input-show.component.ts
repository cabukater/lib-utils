import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormErrorComponent } from 'shared-angular-components';
@Component({
  selector: 'app-input-show',
  templateUrl: './input-show.component.html',
  styleUrls: ['./input-show.component.scss']
})

export class InputShowComponent implements OnInit {
  form: FormGroup;
  formSubmitAttempt: boolean;
  codeComponentFull = `import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
  import { FormErrorComponent } from 'shared-angular-components';
  
  @Component({
    selector: 'app-input-show',
    templateUrl: './input-show.component.html',
    styleUrls: ['./input-show.component.scss']
  })
  export class InputShowComponent implements OnInit {
    form: FormGroup;
    formSubmitAttempt: boolean;
  
    constructor( 
      private formError : FormErrorComponent,
         private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.formConstr() 
    }
    formConstr() {    <= logica criando o formulário
      this.form = new FormGroup({   
        nome: new FormControl( null, [Validators.required]),
        numero: new FormControl()
     });
    }
    send(form) {
      if (this.form.valid) {
        console.log('foi')
        } else {
          
         console.log('não') 
         this.formError.checkValidations(form) <= logica chamando o componente de erro
      }
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
  }`;
  codeInput= ` <shared-input 
    [typeForm]="'text'"     <= tipo do campo (text, number, email)
    required                <= Caso o campo seja obrigatório
    [nameControl]="'nome'" 
    [group]="form"
    name="nome" 
    [nameField]="'Nome'" <= Nome do campo (ele se reflete também na mensagem de erro, caso necessário)
    ngDefaultControl>
  </shared-input>`;
  codeInputError=`<shared-form-error [displayError]="isFieldValid('nome')" errorMsg="nome"> </shared-form-error>`;
  codeModule= `import { InputModule } from 'shared-angular-components';`;
  codeImport= ` imports: [..,
    InputModule,
  ...] `;
  codeFormGroup = `this.form = new FormGroup({
    nome: new FormControl( null, [Validators.required]),
    numero: new FormControl()
 });`;

 codeHtml= `<form (ngSubmit)="send(form)" class="w-100">
 <div class="row  mt-2" [formGroup]="form">
     <div class="col-md-6">
         <shared-input [typeForm]="'text'" required [nameControl]="'nome'" [group]="form" 
           name="nome" [nameField]="'Nome'" ngDefaultControl></shared-input>
         <shared-form-error [displayError]="isFieldValid('nome')" errorMsg="nome">
         </shared-form-error>
     </div>
     <div class="col-md-6">
         <shared-input [typeForm]="'number'" [nameControl]="'numero'" [group]="form" 
         [nameField]="'numero'" ngDefaultControl></shared-input>
     </div>
 </div>
 <div class="row">
     <div class="col-md-6">
         <shared-button [textButton]="'Enviar'" [type]="'action'" [size]="'md'" type="submit" 
         [disabled]="!form.valid" >
         </shared-button>
     </div>
 </div>
</form>`;
  constructor( 
    private formError : FormErrorComponent,
       private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formConstr()
  }
  formConstr() {
    this.form = new FormGroup({
      nome: new FormControl( null, [Validators.required]),
      numero: new FormControl()
   });
  }

  send(form) {
    if (this.form.valid) {
      console.log('foi')
     } else {        
       console.log('não')
       this.formError.checkValidations(form)       
     }
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
