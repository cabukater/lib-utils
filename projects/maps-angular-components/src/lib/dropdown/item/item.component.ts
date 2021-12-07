import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'shared-item',
  templateUrl: './item.component.html',

})
export class ItemComponent implements OnInit {
  @Input() value: string;
  click$: Observable<string>;


  constructor( private host: ElementRef) {
  }

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }


  get element() {
    return this.host.nativeElement;
  }


  

}
