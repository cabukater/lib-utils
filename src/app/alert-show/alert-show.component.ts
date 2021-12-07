import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from 'shared-angular-components'

@Component({
  selector: 'app-alert-show',
  templateUrl: './alert-show.component.html',
  styleUrls: ['./alert-show.component.scss']
})
export class AlertShowComponent implements OnInit {
 count: string
  ngOnInit(): void {
     console.log(this.count)
  }
  myCount: number = 10;
  importModule = `import { AlertModule } from 'shared-angular-components';`
  codeModule = `  imports: [
    ..,
     AlertModule,
     ...
  ],`
  codeConstructor= `constructor(
    private alertService: AlertService ) { }`
  importService = `import {AlertService} from  'shared-angular-components' `
  codesuccess = `this.alertService.successAlert()`
  codeError = `this.alertService.errorAlert()`
  codeClose= `this.alertService.close()`
  codeLoading= `this.alertService.loading()`
  codeWarning = `this.alertService.warning()`
  codeFull= `import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { AlertService } from 'shared-angular-components'
  
  @Component({
    selector: 'app-alert-show',
    templateUrl: './alert-show.component.html',
    styleUrls: ['./alert-show.component.scss']
  })
  export class AlertShowComponent implements OnInit {
    constructor(
      private alertService: AlertService
    ) { }
    openAlertError() {
      this.alertService.errorAlert()
    }
    openAlertSuccess() {
      this.alertService.successAlert()
    }
    openAlertWarning() {
      this.alertService.warningAlert()
    }
    closeAlert(){
      this.alertService.close()
    }
    openAlertLoading() {
      this.alertService.loadingAlert();
      setTimeout(() => {this.close()}, 1000 )git 
    }
   }`
  constructor(
    private alertService: AlertService ) { }
    
  openAlertError() {
    this.alertService.errorAlert()
  }

  openAlertSuccess() {
    this.alertService.successAlert()
  }

  openAlertWarning() {
    this.alertService.warningAlert();
 }

 close(){ 
   this.alertService.closeAlert()
 }

 openAlertLoading() {
    this.alertService.loadingAlert();
    setTimeout(() => {this.close()}, 1000 )
  }
}
