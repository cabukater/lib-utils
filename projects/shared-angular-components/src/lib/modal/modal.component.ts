import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/fontawesome-free';
enum DialogType {
    delete = 'delete',
    error = 'error',
    message = 'message'
  }
@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styles: [
    `.modal {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.85);
    }
    `],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent {

  theme = localStorage.getItem('colorSelected');


  
    @Input() showDialog: boolean;
    @Input() title: string;
    @Input() content: any;
    @Input() type: DialogType;
    @Input() disableCancel: boolean;
    @Output() dialogChange: EventEmitter<string> = new EventEmitter();
    icon = {
      alert: faExclamationTriangle,
      error: faExclamationTriangle,
      info: faInfoCircle,
      close: faTimes,
    };

    constructor() {}
  
    ngOnInit() {}
  
    click(value: string) {
      this.dialogChange.emit(value);
   }
}