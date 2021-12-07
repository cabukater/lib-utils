import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pagination-show',
  templateUrl: './pagination-show.component.html',
  styleUrls: ['./pagination-show.component.scss']
})
export class PaginationShowComponent implements OnInit {
  selectPage: any;
  itemsShow = 900;
  codeInsert = ` <shared-pagination  [items]="itemsShow"  (pageSend)="receiverPage($event)" ></shared-pagination>`
  codeImport = `imports:[ ...,
    PaginationsharedModule,
    ...]`;
    importModule = `import { PaginationsharedModule } from 'shared-angular-components';`
    codeFull = ` 
     @Component({
      selector: 'app-pagination-show',
      templateUrl: './pagination-show.component.html',
      styleUrls: ['./pagination-show.component.scss']
    })
    export class PaginationShowComponent implements OnInit {
      selectPage: any;
      itemsShow = 900;
      constructor() { }
      ngOnInit() {
      }
      receiverPage(event){
         console.log(event) <= RECEBE A PAGINA CLICADA
      }
    }
    `
  constructor() { }
  ngOnInit() {
  }
  receiverPage(event){
     console.log(event)
  }
}
