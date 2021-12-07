import { Component, OnInit, Input } from '@angular/core';
import { ItemViewModel } from 'shared-angular-components';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dropdown-show',
  templateUrl: './dropdown-show.component.html',
  styleUrls: ['./dropdown-show.component.scss']
})


export class DropdownShowComponent implements OnInit {
  value;
  selectedOption;
  codeInput = `
  <shared-dropdown  
  [items]="items"
  [selectedOption]="selectedOption"
  (selectValue)="changeOption($event)" name="inputName">  
  </shared-dropdown >
`
  codeFormGroup = `[formGroup]="form"`

  codeHtml = ` <div class="col-md-12 m-2" [formGroup]="form">
  <shared-dropdown  
    [items]="items"
    [selectedOption]="selectedOption"
    (selectValue)="changeOption($event)" name="inputName">  
  </shared-dropdown >
</div>`

  addictedModules = `import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
 import { ItemViewModel } from 'shared-angular-components';`

  codeControl = `
formConstr() {
 this.form = this.formBuilder.group({
   inputName: this.formBuilder.control(''), 
 });`

  codeVar = `this.itemSelecionado = selectedOption;`

  codeSelect = `
 changeOption(selectedOption: any) : void{
  this.itemSelecionado = selectedOption;
  this.form.controls['inputName'].setValue(selectedOption)
 }`

  getListCode = `public items: ItemViewModel[] = this.list;`

  startCode = `ngOnInit() {
       this. formConstr();
 }`

  codeFull = `import { Component, OnInit, Input } from '@angular/core';
 import { ItemViewModel } from 'shared-angular-components';
 import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
 
 
 @Component({
   selector: 'app-dropdown',
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.scss']
 })
 
 
 export class DropdownComponent implements OnInit {
  
   list = [
     { id: 1, name: 'One' },
     { id: 2, name: 'Two' },
     { id: 3, name: 'Three' }
   ];
   
   form: FormGroup;
 
   itemSelecionado : string = 'valor Inicial';
   public items: ItemViewModel[] = this.list;
 
 
   constructor(
     private formBuilder: FormBuilder,
   ) { 
  }
   control = new FormControl();
   ngOnInit() {
     this. formConstr();
    }
 
    formConstr() {
     this.form = this.formBuilder.group({
       inputName: this.formBuilder.control(''), 
     });
   }
 
 
   changeOption(selectedOption: any) : void{
     this.itemSelecionado = selectedOption;
     this.form.controls['inputName'].setValue(selectedOption)
    }

 }
 `
  listShowCode = `  list = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' }
]; //ou obtenha via serviço de get
public items: ItemViewModel[] = this.list; <= necessario para o funcionamento
`
codeModule= `imports: [
  ..., DropdownModule,]`;
  codeImportModule=`import { DropdownModule } from 'shared-angular-components'`;
  list = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];

  form: FormGroup;

  itemSelecionado: string = 'valor Inicial';
  public items: ItemViewModel[] = this.list;


  constructor(
    private formBuilder: FormBuilder,
  ) {

  }
  control = new FormControl();
  ngOnInit() {
    this.formConstr();
  }

  formConstr() {
    this.form = this.formBuilder.group({
      inputName: this.formBuilder.control(''),
    });
  }

  changeOption(selectedOption: any): void {
    this.itemSelecionado = selectedOption;
    this.form.controls['inputName'].setValue(selectedOption)
  }

}
