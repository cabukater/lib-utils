import { Component, OnInit } from '@angular/core';
import { ToastService, FormErrorComponent } from 'shared-angular-components';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cpf-cnpj-mask',
  templateUrl: './cpf-cnpj-mask.component.html',
  styleUrls: ['./cpf-cnpj-mask.component.scss']
})
export class CpfCnpjMaskComponent implements OnInit {
  form: FormGroup;
  inputCpfCnpj = `[typeField]="'cpf-cnpj'"`;
  inputCpf = `[typeField]="'cpf'"`;
  inputCnpj = `[typeField]="'cnpj'"`;
  codeModule = `import { CpfCnpjModule } from 'shared-angular-components';`
  codeImportModule = ` imports: [ 
    ...,
    CpfCnpjModule,
    ...] `;
  codeHtmlCpf = `<shared-cpf-cnpj 
   [nameControl]="'cpf'" 
   [group]="form" 
   [typeField]="'cpf'" <= tipos ('cpf' ou 'cnpj' ou 'cpf-cnpj')
ngDefaultControl></shared-cpf-cnpj>`;
  codeHtmlCpfCnpj = `<shared-cpf-cnpj [nameControl]="'cpf'" [group]="form" [typeField]="'cpf'"
ngDefaultControl></shared-cpf-cnpj>`;
  codeHtmlCnpj = `<shared-cpf-cnpj [nameControl]="'cpf'" [group]="form" [typeField]="'cpf-cnpj'"
      ngDefaultControl>
</shared-cpf-cnpj>`;

codeFormGroup = `this.form = new FormGroup({
  cpf: new FormControl( null),
});`;
  cpfCnpjModel: any;

  constructor(
    private formError: FormErrorComponent,
    private formBuilder: FormBuilder,
    private toastServ: ToastService) { }

  ngOnInit() {
    this.formConstr()
  }

  alertCopy() {
    this.toastServ.show({
      text: 'Chave copiada com sucesso',
      type: "success"
    })
  }


  formConstr(){
    this.form = new FormGroup({
      cpfCnpj: new FormControl(),
      cnpj: new FormControl(),
      cpf: new FormControl(),
      });
  }

  sendForm(){
    console.log(this.form.value) 
  }

}
FormGroup