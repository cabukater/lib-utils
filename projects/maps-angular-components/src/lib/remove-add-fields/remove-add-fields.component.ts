import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ValidatorFn, FormControl } from '@angular/forms';
import { ItemViewModel } from '../dropdown/dropdown.component';

@Component({
  selector: 'shared-remove-add-fields',
  templateUrl: './remove-add-fields.component.html',
  styleUrls: ['./remove-add-fields.component.scss']
})
export class RemoveAddFieldsComponent {
  formAddresses: FormGroup;
  formContacts: FormGroup;
  formAccounts: FormGroup;
  theme = localStorage.getItem('colorSelected');
  @Output() sendForm = new EventEmitter();
  visibleAddress = -1;
  visibleAccount = -1;
  visibleContact = -1;
  selectedAddress: any;
  selectedContact: any;
  selectedAccount: any;
  itemSelecionado: string = 'valor Inicial';
  selectedOption: any;
  @Input()  public items: ItemViewModel[];
  address: FormArray;
  contact: FormArray;
  account: FormArray;
  
  control = new FormControl();

  countries: any ;
  items2 = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];
 

  constructor(private fb: FormBuilder) {
    this.formAddresses = this.fb.group({
      addresses: this.fb.array([]),
    });
    this.formContacts = this.fb.group({
      contacts:this.fb.array([])
    });
    this.formAccounts = this.fb.group({
      accounts:this.fb.array([])
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
      estadoEnum: '',
      padrao: false,
    }));
  }

  sendAddress(evt) {
    this.sendForm.emit(this.formAddresses.value)
  }

  sendContact(evt) {
    this.sendForm.emit( this.formContacts.value)
  }

  getControls(frmGrp: FormGroup, key: string) {
    return (<FormArray>frmGrp.controls[key]).controls;
  }


  onChange(addressCount, padrao) {
    this.address.controls.forEach(group => group.get(padrao).setValue(false));
    this.address.controls[addressCount].get('padrao').setValue(true)
    this.selectedAddress = addressCount
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

  changeOption(selectedOption: any): void {
    this.itemSelecionado = selectedOption;
    this.formContacts.controls['inputName'].setValue(selectedOption)
  }

  addContact() {
    this.contact = this.formContacts.controls.contacts as FormArray;
    this.contact.push(this.fb.group({
      email: '',
      telefone: '',
      obeservacao: '',
      padrao: false,
    }));
  }


  onChangeContact(contactCount, padrao) {
    this.contact.controls.forEach(group => group.get(padrao).setValue(false));
    this.contact.controls[contactCount].get('padrao').setValue(true)
    this.selectedContact = contactCount
  }


  showMoreContact(contactCount) {

    if (this.visibleContact === contactCount) {
      this.visibleContact = -1
    } else {
      this.visibleContact = contactCount;
    }
  }

  removeContact(contactCount) {
    this.contact.removeAt(contactCount);
  }

  addAccount() {
    this.account = this.formAccounts.controls.accounts as FormArray;
    this.account.push(this.fb.group({
      banco:  '',
      numero: '',
      dv: '',
      agencia: '',
      dvAgencia: '',
      padrao: false,
    }));
  }

  onChangeAccount(accountCount, padrao) {
    this.account.controls.forEach(group => group.get(padrao).setValue(false));
    this.account.controls[accountCount].get('padrao').setValue(true)
    this.selectedAccount = accountCount
  }

  showMoreAccount(accountCount) {
    if (this.visibleAccount === accountCount) {
      this.visibleAccount = -1
    } else {
      this.visibleAccount = accountCount;
    }
  }

  removeAccount(accountCount) {
    this.account.removeAt(accountCount);

  }

  sendAccount(evt) {
    this.sendForm.emit(this.formAccounts.value)
  }


}
