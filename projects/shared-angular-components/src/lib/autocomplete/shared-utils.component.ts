import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-shared-angular-components',
  template: `
    <p>
      shared-angular-components works!
    </p>
  `,
  styleUrls: ['./shared-angular-components-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedAngularComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
