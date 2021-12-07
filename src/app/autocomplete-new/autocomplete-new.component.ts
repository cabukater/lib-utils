
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { AutocompleteService } from './autocomplete-new.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, startWith, delay, tap, switchMap } from 'rxjs/operators';


import { swCharacters } from './data';

@Component({
  selector: 'app-autocomplete-new-doc',
  templateUrl: './autocomplete-new.component.html',
  styleUrls: ['./autocomplete-new.component.scss'],
  providers: [AutocompleteService]
})
export class AutocompleteNewDocComponent implements OnInit {

  selectedItem;
  
//INCIO DOCUMENTAÇAO


codeAutoComplete = ` <shared-input-autocomplete formControlName="nome"
placeholder="ex: ana"
[nameField] ="'Nome'"
[options]="nomesAuto$ | async"> 
</shared-input-autocomplete>`

 codeModule = `imports: [
  ..., AutocompleteModule,]`;
importModule = `import { AutocompleteModule } from 'shared-angular-components'`;


importsModulesAdd = `import { FormControlDirective, FormGroupDirective } from '@angular/forms';`

codeComponentFull = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { AutocompleteService } from './autocomplete-new.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, startWith, delay, tap, switchMap } from 'rxjs/operators';


import { swCharacters } from './data';

@Component({
  selector: 'app-autocomplete-new-doc',
  templateUrl: './autocomplete-new.component.html',
  styleUrls: ['./autocomplete-new.component.scss'],
  providers: [AutocompleteService]
})
export class AutocompleteNewDocComponent implements OnInit {
  countries: any;
  showResult = false;


  form = new FormGroup({
    nome: new FormControl(),
    swCharacter: new FormControl()
  });


  items = [
    { id: 1, label: 'Ana Maria' },
    { id: 2, label: 'Lucas Silva' },
    { id: 3, label: 'Jessica' },
    { id: 4, label: 'Ana Claudia' },
    { id: 5, label: 'Lucas Silva' },
    { id: 6, label: 'Jessica' },
    { id: 7, label: 'raiva' },
    { id: 8, label: 'Teresa' },
    { id: 9, label: 'Aline' }
  ];

  constructor() { }
  

  //ESSE CÓDIGO ABAIXO FAZ FUNCIONAR O COMPONENTE
  nomesAuto$ = this.form.get('nome').valueChanges
    .pipe(
      startWith(null),
      switchMap(name => {
        if (typeof name === 'string') {
          return of(this.items)
            .pipe(
              delay(800),
              map(response => response.filter(
                p => p.label.toUpperCase().includes(name))),
            );
        }
        return of([]);
      })
    );

  control = new FormControl();
  ngOnInit() {
  }

  submit() {
    console.log(this.form.value.nome.label);
    this.showResult = true;
  }
}`;


  //FIM DOC
  countries: any;
  showResult = false;
  form = new FormGroup({
    nome: new FormControl(),
    swCharacter: new FormControl()
  });


  items = [
    { id: 1, label: 'Ana Maria' },
    { id: 2, label: 'Lucas Silva' },
    { id: 3, label: 'Jessica' },
    { id: 4, label: 'Ana Claudia' },
    { id: 5, label: 'Lucas Silva' },
    { id: 6, label: 'Jessica' },
    { id: 7, label: 'raiva' },
    { id: 8, label: 'Teresa' },
    { id: 9, label: 'Aline' }
  ];

  constructor() { }
  
  nomesAuto$ = this.form.get('nome').valueChanges
    .pipe(
      startWith(null),
      switchMap(name => {
        if (typeof name === 'string') {
          return of(this.items)
            .pipe(
              delay(800),
              map(response => response.filter(
                p => p.label.toUpperCase().includes(name))),
            );
        }
        return of([]);
      })
    );

  control = new FormControl();
  ngOnInit() {
  }

  submitForm() {
    console.log(this.form.value.nome.label);
    this.showResult = true;
  }

  submit() {

  }
}