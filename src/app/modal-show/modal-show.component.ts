import { Component, OnInit, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'shared-angular-components'


@Component({
  selector: 'app-modal-show',
  templateUrl: './modal-show.component.html',
  styleUrls: ['./modal-show.component.scss']
})
export class ModalShowComponent {
  isOpen = false;

  VarDeclare = `  isOpen = false;`
  codeInsert = `<shared-modal
    type="message"
    [showDialog]="isOpen"
    [disableCancel]="true"
    [title]="title"
    [content]="content"
    (dialogChange)="close()"
    ></shared-modal> `;
  importModule = `import { ModalModuleLib } from 'shared-angular-components';`
  codeModule = ` imports: [ ..
      ModalModuleLib
    ],`
  codeVar = `
 isOpen = false; <= instancie essa variavel para abrir o modal
 title: string; <= instancie para modificar o titulo do modal
 content: any; <= e para fgerar o conteudo do modal `;
  codeCall = `open() {
    this.isOpen = true <= abre o modal; 
    this.title = 'titulo modal 1'; <= Texto instaciado ao modal
    this.content = "modal1" <= conteudo do modal
}`
  closeModal = `close() {
    this.isOpen = false   <= somente instaciar essa variavel como False;
}`

codeFull= `import { Component, OnInit} from '@angular/core';
import { ModalComponent } from 'shared-angular-components'

@Component({
  selector: 'app-modal-show',
  templateUrl: './modal-show.component.html',
  styleUrls: ['./modal-show.component.scss']
})

export class ModalShowComponent {
  isOpen = false;
  title: string;
  content: any;

  constructor() { }

  open() {
    this.isOpen = true;
    this.title = 'titulo modal 1';
    this.content = "modal1"
  }

  open2() {
    this.isOpen = true;
    this.title = 'titulo modal 2';
    this.content = 'modal2'
  }

  close() {
    this.isOpen = false;
  }
}
`
  title: string;
  content: any;

  constructor() { }

  open() {
    this.isOpen = true;
    this.title = 'titulo modal 1';
    this.content = "modal1"
  }

  open2() {
    this.isOpen = true;
    this.title = 'titulo modal 2';
    this.content = 'modal2'
  }

  close() {
    this.isOpen = false;
  }
}
