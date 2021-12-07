import { ModuleWithProviders, NgModule } from '@angular/core'
import { TOAST_CONFIG_TOKEN, defaultToastConfig } from './toast-config';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { ToastComponent } from './toast.component';

@NgModule({
  imports: [OverlayModule, MatIconModule, BrowserModule, CommonModule],
  declarations: [ToastComponent],
  entryComponents: [ToastComponent]
})
export class ToastModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders<ToastModule> {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: config,
                },
            ],
        };
    }
 }