import { DropdownComponent } from './dropdown.component';
import { DropdownDirective } from './dropdown.directive';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DropdownComponent,
        DropdownDirective,
        ItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DropdownComponent,
        ItemComponent,
        DropdownDirective
    ]
})
export class DropdownModule { }