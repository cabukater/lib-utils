import { Component, OnInit } from '@angular/core';
import { ToastService } from 'shared-angular-components'

@Component({
  selector: 'app-toastshow',
  templateUrl: './toastshow.component.html',
  styleUrls: ['./toastshow.component.scss']
})
export class ToastshowComponent implements OnInit {

codeInput=` showToastsuccess() {
  this.toastServ.show({
    text: 'Alteração realizada com sucesso', <= mensagem
    type: "success" <= tipo de toast 
  })
}
showToastWarning() {
  this.toastServ.show({
    text: 'Houve um erro',
    type: "warning"
  })
}
showToastInfo() {
  this.toastServ.show({
    text: 'Alteração realizada com sucesso',
    type: "info"
  })
}`

codeImport= `import { ToastService } from 'shared-angular-components'
`
codeService= `  constructor(
      private toastServ: ToastService
     ) { }'`
codeModule= `  imports: [
     ToastModule.forRoot()
],';`

importModule= `import {  ToastModule } from 'shared-angular-components';
`

codeFull=`import { Component, OnInit } from '@angular/core';
import { ToastService } from 'shared-angular-components'

@Component({
  selector: 'app-toastshow',
  templateUrl: './toastshow.component.html',
  styleUrls: ['./toastshow.component.scss']
})
export class ToastshowComponent implements OnInit {
  constructor(
    private toastServ: ToastService
  ) { }

  ngOnInit() {
  }
  showToastsuccess() {
    this.toastServ.show({
      text: 'Alteração realizada com sucesso',
      type: "success"
    })
  }
  showToastWarning() {
    this.toastServ.show({
      text: 'Houve um erro',
      type: "warning"
    })
  }
  showToastInfo() {
    this.toastServ.show({
      text: 'A data deve ser maior que 30/01/2010',
      type: "info"
    })
  }
}`
  constructor(
    private toastServ: ToastService
  ) { }

  ngOnInit() {
  }
  showToastsuccess() {
    this.toastServ.show({
      text: 'Alteração realizada com sucesso',
      type: "success"
    })
  }
  showToastWarning() {
    this.toastServ.show({
      text: 'Houve um erro',
      type: "warning"
    })
  }
  showToastInfo() {
    this.toastServ.show({
      text: 'A data deve ser maior que 30/01/2010',
      type: "info"
    })
  }

}
