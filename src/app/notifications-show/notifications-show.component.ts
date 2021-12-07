import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notifications-show',
  templateUrl: './notifications-show.component.html',
  styleUrls: ['./notifications-show.component.scss']
})
export class NotificationsShowComponent implements OnInit {
  importModule = `import { NotificationsModule} from 'shared-angular-components',`;
  codeImport = `imports:[...,
  NotificationsModule,
  ...]`;
  codeHtml = `<shared-notifications  [items]="notes.notificacoes" [total]="total" > </shared-notifications>`;
  total = '3';
  notes = {
    "notificacoes": [
      {
        "descricao": "Falha em 04/03/2020",
        "quantidade": 0,
        "tipo": "ERROR",
        "params": {
          "statusId": "ERROR",
          "statusText": "Falha",
          "dataInicial": "2020-03-04",
          "dataFinal": "2020-03-04",
        }
      },
      {
        "descricao": "Falha em 26/02/2020 até 04/03/2020",
        "quantidade": 0,
        "tipo": "WARN",
        "params": {
          "statusId": "ERROR",
          "statusText": "Falha",
          "dataInicial": "2020-02-26",
          "dataFinal": "2020-03-04",
        }
      },
      {
        "descricao": "Total em 04/03/2020",
        "quantidade": 0,
        "tipo": "INFO",
        "params": {
          "dataInicial": "2020-03-04",
          "dataFinal": "2020-03-04",
        }
      }
    ],
    "tipoNotificacaoMaiorPrioridade": "INFO",
  }
  codeFull = `import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notifications-show',
  templateUrl: './notifications-show.component.html',
  styleUrls: ['./notifications-show.component.scss']
})
export class NotificationsShowComponent implements OnInit {
  total = '3';
  notes =  {
    "notificacoes":[
       {
          "descricao":"Falha em 04/03/2020",
          "quantidade":0,
          "tipo":"ERROR",
          "params":{
             "statusId":"ERROR",
             "statusText":"Falha",
             "dataInicial":"2020-03-04",
             "dataFinal":"2020-03-04",
          }
       },
       {
          "descricao":"Falha em 26/02/2020 até 04/03/2020",
          "quantidade":0,
          "tipo":"WARN",
          "params":{
             "statusId":"ERROR",
             "statusText":"Falha",
             "dataInicial":"2020-02-26",
             "dataFinal":"2020-03-04",
          }
       },
       {
          "descricao":"Total em 04/03/2020",
          "quantidade":0,
          "tipo":"INFO",
          "params":{
             "dataInicial":"2020-03-04",
             "dataFinal":"2020-03-04",
          }
       }
    ],
    "tipoNotificacaoMaiorPrioridade":"INFO",
 }
  constructor() { }
  ngOnInit() {
  }
}
`
  constructor() { }
  ngOnInit() {
  }
}
