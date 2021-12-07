import { Component,  Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  theme = localStorage.getItem('colorSelected') 
  @Input() group: FormGroup;
  @Input('nameControl') nameControl : FormControl;
  @Input('typeForm') typeForm : string
  @Input('nameField') nameField : string

  constructor() { }

  ngOnInit() {}

}
