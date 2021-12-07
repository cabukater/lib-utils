

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutocompleteService } from './autocomplete.service';
import { FilterPipe } from 'projects/shared-angular-components/src/lib/autocomplete/filter.pipe';

@Component({
  selector: 'app-autocomplete-doc',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers:[AutocompleteService]
})
export class AutocompleteDocComponent  implements OnInit{
  countries: any ;
  sizeLg;
  value;
  
  codeInput=`<input class="form-control" placeholder="Search..." 
       [formControl]="control" 
       [appAutocomplete]="autocomplete">
  ` ;
codeAutoComplete = `<app-autocomplete #autocomplete="appAutocomplete"> 
  <ng-template appAutocompleteContent>
    <ng-container *ngIf="(items | filter: control.value) as result">
      <app-option *ngFor="let option of result" [value]="option.name">
      {{ option.name }}
      </app-option>
      <app-option class="no-result" *ngIf="!result.length">No result...</app-option>
    </ng-container>
  </ng-template>
</app-autocomplete>`

codeModule= `imports: [
  ..., AutocompleteModule,]`;
  importModule=`import { AutocompleteModule } from 'shared-angular-components'`;

codeFull = this.codeInput + this.codeAutoComplete;
OverlayModule

moduleAddict=`imports: [
    ..., 
    AutocompleteModule,
    FormsModule ,  <= módulo NECESSÁRIO PARA O FUNCIONAMENTO         

]`;


importsModulesAdd= `import { FormControlDirective, FormGroupDirective } from '@angular/forms';`


codeComponentFull= `
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutocompleteService } from './autocomplete.service';
import { FilterPipe } from 'projects/shared-angular-components/src/lib/autocomplete/filter.pipe';

@Component({
  selector: 'app-autocomplete-doc',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [AutocompleteService, FilterPipe]
})
export class AutocompleteDocComponent implements OnInit {
  items: any;


  constructor(
    private service: AutocompleteService
  ) {
//OBTENDO OS DADOS DO ENDPOINT (Via HTTP)
    this.service.getItems().subscribe(
      (data) => (
        this.items = data));

    console.log(this.items)
  }

  control = new FormControl(); <= Nome do Input
   ngOnInit() {
  }

  ou

  //OBTENDO OS DADOS  (Via input dads)

  items = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];

}`;


items = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' }
];

  constructor(
    private service:AutocompleteService
  ){

  }
  

  control = new FormControl();


  
  ngOnInit() {


  }

}