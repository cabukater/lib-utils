import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[sharedDropdownFor][sharedFor]'
})
export class DropdownDirective {

  @Input()
  set sharedDropdownFor(collection: Array<any>) {
    if (Array.isArray(collection)) {

      collection.forEach((item, index) => {
        this.view.createEmbeddedView(this.template,
          {
            $implicit: item,
            index
          }
        );
        })

  }
}


  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>) { }





}
