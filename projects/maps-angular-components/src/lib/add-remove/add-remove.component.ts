import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ItemViewModel } from '../../public-api';
@Component({
  selector: 'shared-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.scss']
})

export class AddRemoveComponent {
  form: FormGroup;
  theme = localStorage.getItem('colorSelected');
  @Output() createNewInput = new EventEmitter();
  @Output() showInputs = new EventEmitter();
  @Input() patternLogical;
  @Input() TitleBox;
  @Input() iCount;
  @Input() visibleData;
  @Input() selectedData;
  @Input() titleBoxName;
  @Input() titleGroup;
  @Input() hideValue;
  @Input() public items: ItemViewModel[];

  constructor(private fb: FormBuilder) {}

  getControls(frmGrp: FormGroup, key: string) {
    return (<FormArray>frmGrp.controls[key]).controls;
  }


  createNew(evt) {
    this.createNewInput.emit(evt)
  }
  showMore(evt) {
    this.showInputs.emit(evt)
  }

}



