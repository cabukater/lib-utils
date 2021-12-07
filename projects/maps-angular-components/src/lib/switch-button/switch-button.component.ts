import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {
  theme = localStorage.getItem('colorSelected');
  @Input() group: FormGroup;
  @Input('nameControl') nameControl : FormControl;
  @Input('typeForm') typeForm : string;
  @Input('nameField') nameField : string;
  @Output() sendCheck = new EventEmitter();
   checkbox: boolean;
  constructor() { }

  ngOnInit() {
  }

 changed(evt){
   this.checkbox = evt.target.checked;
    this.sendCheck.emit(this.checkbox)
  }
}
