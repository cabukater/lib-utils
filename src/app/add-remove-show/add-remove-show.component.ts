import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
export function ThingFormGroup(formBuilder: FormBuilder){
  return formBuilder.group({
    nome:[],
    logradouro:[],
    estado:[],
    numero:[],
    bairro:[]
  });
}

@Component({
  selector: 'app-add-remove-show',
  templateUrl: './add-remove-show.component.html',
  styleUrls: ['./add-remove-show.component.scss']
})
export class AddRemoveShowComponent  {
  visibleData;
  addressCount;
  visibleAddress = -1;
  formAddresses: FormGroup;
  selectedOption: any;
  selectedAddress: any;
  address: FormArray;
  title= 'contatos'
  nameTitle="Nome do campo input"
  typeForm = "contato"

  importModule= `import { AddRemoveContactsModule} from 'shared-angular-components';`
  codeImport= `imports:[..., AddRemoveContactsModule, ...]`
  codeHtml= ` <form [formGroup]="formAddresses"> <-INICIE ANTES O FORMULÁRIO
                <shared-add-remove
                  (createNewInput)="receiverInput($event)"
                  (showInputs)="receiverShow($event)"
                  [addressCount]="addressCount"
                  [visibleData]="visibleData"
                  [hideValue]="true"
                  (patternLogical)="logicalPatternRec($event)"
                >
                  <div formBody> <- COLOQUE O FORMULARIO AQUI
                    <div formArrayName="addresses"
                      *ngFor="
                        let address of getControls(formAddresses, 'addresses');
                        let addressCount = index " class="container" >
                      <ng-container [formGroupName]="addressCount">
                        <div class="row p-2 pb-0">
                          <div class="col-12">
                            <h2
                              (click)="showMoreAddress(addressCount)"
                              class="title-secondary thin  cursor-pointer"
                            >
                              <i
                                [ngClass]="{
                                  'fas fa-chevron-right':
                                    visibleAddress != addressCount,
                                  'fa fa-chevron-down':
                                    visibleAddress === addressCount
                                }"
                                class="btn-show-hide"
                              >
                              </i>
                              <span [hidden]="!address.get('logradouro').value">
                                {{ address.get("logradouro").value }}</span
                              >
                              <span [hidden]="address.get('logradouro').value">
                                Novo Endereço</span
                              >
                              <div
                                class="float-right text-capitalize small pattern-info"
                                *ngIf="selectedAddress === addressCount"
                              >
                                <i class="far fa-check-circle"></i> Padrão
                              </div>
                            </h2>
                            <hr
                              *ngIf="visibleAddress == addressCount"
                              class="mb-0"
                            />
                          </div>
                        </div>
                        <div
                          class="form-row pl-3 pr-3"
                          *ngIf="visibleAddress == addressCount"
                        >
                          <div
                            class="card bg-2 toggle-box padrao-box"
                            [hidden]="selectedAddress === addressCount"
                          >
                            <p class="">
                              Padrão:
                            </p>
                            <label class="switch">
                              <input
                                type="radio"
                                (change)="onChange(addressCount, 'padrao')"
                                name="padrao"
                                [value]="true"
                                formControlName="padrao"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>
                          <div class="form-group col-md-6">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'logradouro'"
                              name="logradouro"
                              [group]="address"
                              [nameField]="'logradouro'"
                              ngDefaultControl
                            ></shared-input>
                          </div>
                          <div class="form-group col-md-2">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'numero'"
                              name="numero"
                              [group]="address"
                              [nameField]="'número'"
                              ngDefaultControl
                            ></shared-input>
                          </div>
                          <div class="form-group col-md-4 mb-0">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'complemento'"
                              name="complemento"
                              [group]="address"
                              [nameField]="'Complemento'"
                              ngDefaultControl
                            ></shared-input>
                          </div>
                          <div class="form-group  col-md-3 mb-0">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'bairro'"
                              name="bairro"
                              [group]="address"
                              [nameField]="'Bairro'"
                              ngDefaultControl
                            ></shared-input>
                          </div>

                          <div class="form-group col-md-4 mb-0">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'cep'"
                              name="cep"
                              [group]="address"
                              [nameField]="'CEP'"
                              ngDefaultControl
                            ></shared-input>
                          </div>
                          <div class="form-group col-md-3 mb-0">
                            <shared-input
                              [typeForm]="'text'"
                              required
                              [nameControl]="'cidade'"
                              name="cidade"
                              [group]="address"
                              [nameField]="'Cidade'"
                              ngDefaultControl
                            ></shared-input>
                          </div>
                          <div class="form-group col-md-2 mb-0">
                            <label class="control-label">Estado</label>
                            <shared-dropdown
                              [items]="items"
                              [selectedOption]="selectedOption"
                              (selectValue)="changeOption($event, addressCount)"
                              name="estadoEnum"
                            >
                            </shared-dropdown>
                          </div>
                          <div class="form-group col-md-1 mt-4 float-right">
                            <div class="row">
                              <div class="col-md-12 text-right mt-1">
                                <shared-button
                                  class="float-right"
                                  [tooltip]="'Remover'"
                                  [posTooltip]="'top'"
                                  
                                  [size]="'sm'"
                                  [type]="'remove'"
                                  (click)="removeAddress(addressCount)"
                                >
                                </shared-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ng-container>
                    </div>
                  </div>
                </shared-add-remove>
              </form>     
`
  codeFull=`import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
  export function ThingFormGroup(formBuilder: FormBuilder){
    return formBuilder.group({
    nome:[],
    logradouro:[],
    estado:[],
    numero:[],
    bairro:[]
  });
}

@Component({
  selector: 'app-add-remove-show',
  templateUrl: './add-remove-show.component.html',
  styleUrls: ['./add-remove-show.component.scss']
})
export class AddRemoveShowComponent  {
  visibleAddress = -1;
  formAddresses: FormGroup;
  selectedOption: any;
  selectedAddress: any;
  address: FormArray;
  title= 'contatos'
  nameTitle="Nome do campo input"
  typeForm = "contato"


receiverInput($event){
  this.addAddress()
}


receiverShow($event){

}
logicalPatternRec($event){
  console.log($event);

}


constructor(private fb: FormBuilder) {
  this.formAddresses = this.fb.group({
    addresses: this.fb.array([]),
  });
}

addAddress() {
  this.address = this.formAddresses.controls.addresses as FormArray;
  this.address.push(this.fb.group({
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    padrao: false,
  }));
}
getControls(frmGrp: FormGroup, key: string) {
return (<FormArray>frmGrp.controls[key]).controls;
}

onChange(iCount, padrao) {
  this.address.controls.forEach(group => group.get(padrao).setValue(false));
  this.address.controls[iCount].get('padrao').setValue(true)
  this.selectedAddress = iCount
}

showMoreAddress(addressCount) {
  if (this.visibleAddress === addressCount) {
    this.visibleAddress = -1
  } else {
    this.visibleAddress = addressCount;
  }
}

removeAddress(addressCount) {
  this.address.removeAt(addressCount);
}
}

`

receiverInput($event){
  this.addAddress()
}


receiverShow($event){

}
logicalPatternRec($event){
  console.log($event);

}


constructor(private fb: FormBuilder) {
  this.formAddresses = this.fb.group({
    addresses: this.fb.array([]),
  });
}

addAddress() {
  this.address = this.formAddresses.controls.addresses as FormArray;
  this.address.push(this.fb.group({
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    padrao: false,
  }));
}
getControls(frmGrp: FormGroup, key: string) {
return (<FormArray>frmGrp.controls[key]).controls;
}

onChange(iCount, padrao) {
  this.address.controls.forEach(group => group.get(padrao).setValue(false));
  this.address.controls[iCount].get('padrao').setValue(true)
  this.selectedAddress = iCount
}

showMoreAddress(addressCount) {
  if (this.visibleAddress === addressCount) {
    this.visibleAddress = -1
  } else {
    this.visibleAddress = addressCount;
  }
}

removeAddress(addressCount) {
  this.address.removeAt(addressCount);
}





}
