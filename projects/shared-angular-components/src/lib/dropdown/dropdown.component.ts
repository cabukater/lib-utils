import { Component, OnInit, Input, ElementRef, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class ItemViewModel {
  public name: string;

  /**Ctor
   * @param name item title/heading content
   */
  constructor(name: string) {
      this.name = name;
  }
}

@Component({
  selector: 'shared-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()  public items: ItemViewModel[];
  click$: Observable<string>;

  @Output() selectValue : EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedOption: string = 'teste';

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private vcr: ViewContainerRef,
  ) { 
    
  }


  ngOnInit() {
    //this.click$ = fromEvent(this.element, 'click').pipe(mapTo());
  }




  changeReference(): void{
   this.selectValue.emit(this.selectedOption);
   console.log()
 
  }




}
