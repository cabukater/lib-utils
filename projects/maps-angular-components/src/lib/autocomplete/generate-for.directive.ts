import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Directive({
  selector: '[sharedFor][sharedForFrom]'
})


export class GenerateForDirective {

  @Input() set sharedFor(collection: Array<any>){

    if(Array.isArray(collection)){
      collection.forEach((item, index) =>
      this.view.createEmbeddedView(this.template,
        {
          $implicit: item,
          index
        }

      ))
    }
    
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }




}
