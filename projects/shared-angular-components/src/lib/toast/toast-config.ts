import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType;
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type ToastType = 'warning' | 'info' | 'success';

export interface ToastConfig {
    position?: {
        top: number;
        right: number

    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
}

export const defaultToastConfig: ToastConfig = {
    position: {
        top: 20,
        right: 50
        },
    animation: {
        fadeOut: 2000,

        fadeIn: 300,
    },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken<string>('toast-config');