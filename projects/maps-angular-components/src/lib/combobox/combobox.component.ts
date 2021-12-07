import {FormGroup, FormControl} from '@angular/forms';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "shared-combobox",
  templateUrl: "./combobox.component.html",
  styleUrls: ["./combobox.component.scss"]
})
export class ComboboxComponent {
  theme = localStorage.getItem("colorSelected");
  @Input() list: any[];
   @Input() group: FormGroup;
  @Input('nameControl') nameControl : FormControl;
  showDropDown: boolean;
  @Input ('nameField') nameField : string;
  @Output() shareCheckedList = new EventEmitter();
  @Output() shareIndividualCheckedList = new EventEmitter();
  checkedList: any[];
  currentSelected: {};
  @Input() select : string = 'select';

  constructor() {
    this.checkedList = [];
  }
  getSelectedValue(status: Boolean, value: String) {
    if (status) {
      this.checkedList.push(value);
    } else {
      var index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };
    this.shareCheckedlist();
    this.shareIndividualStatus();
  }
  shareCheckedlist() {
    this.shareCheckedList.emit(this.checkedList);
  }
  shareIndividualStatus() {
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }
}