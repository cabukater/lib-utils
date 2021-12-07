import { Component, OnInit, Input } from '@angular/core';
import { ItemViewModel } from 'shared-angular-components';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-combobox-show',
  templateUrl: './combobox-show.component.html',
  styleUrls: ['./combobox-show.component.scss']
})
export class ComboboxShowComponent implements OnInit {

codeModule=`import { ComboboxModule} from 'shared-angular-components';`;
importModule= ` imports: [
     ComboboxModule
  ],`
  codeInput =`<shared-combobox [group]="form" [nameControl]="'nome'" [list]="items"
                (shareCheckedList)="shareCheckedList($event)" [nameField]="'numero'"
                (shareIndividualCheckedList)="shareIndividualCheckedList($event)">
               </shared-combobox>`
  
  codeFormGroup= `formConstr() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(''),
    });
  }`;
  codeHtml= `<form (ngSubmit)="send(form)" class="w-100">
            <div class="row  mt-2" [formGroup]="form">
              <div class="col-md-6">
                <shared-combobox [group]="form" [nameControl]="'nome'" [list]="items"
                  (shareCheckedList)="shareCheckedList($event)" [nameField]="'numero'"
                  (shareIndividualCheckedList)="shareIndividualCheckedList($event)">
                </shared-combobox>
             </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <shared-button [textButton]="'Enviar'" [type]="'action'" [size]="'md'" type="submit"
                  [disabled]="!form.valid" >
                </shared-button>
              </div>
            </div>
          </form>`
  codeComponent = `import { Component, OnInit, Input } from '@angular/core';
import { ItemViewModel } from 'shared-angular-components';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-combobox-show',
  templateUrl: './combobox-show.component.html',
  styleUrls: ['./combobox-show.component.scss']
})
export class ComboboxShowComponent implements OnInit {
  list = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];
  form: FormGroup;
  control = new FormControl();
  itemSelecionado: string = 'valor Inicial';
  public items: ItemViewModel[] = this.list;
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.formConstr();
  }
  formConstr() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(''),
    });
  }
  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }
     send(form) {
    if (this.form.valid) {
      console.log('foi')
     } else {        
       console.log('não')
      // this.formError.checkValidations(form)       
     }
  }
}
`        
  list = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];
  form: FormGroup;
  control = new FormControl();
  itemSelecionado: string = 'valor Inicial';
  public items: ItemViewModel[] = this.list;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formConstr();
  }

  formConstr() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(''),
    });
  }

  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }

     send(form) {
    if (this.form.valid) {
      console.log('foi')
     } else {        
       console.log('não')
     }
  }

}