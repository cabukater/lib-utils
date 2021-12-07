import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-cpf-cnpj',
  templateUrl: './cpf-cnpj.component.html',
  styleUrls: ['./cpf-cnpj.component.scss']
})

export class CpfCnpjComponent implements OnInit {
  theme = localStorage.getItem('colorSelected');
  @Input() group: FormGroup;
  cpfMask = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  cnpjMask = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  maskCpfCnpj = this.cnpjMask;
  cpfShow: boolean ;
  cnpjShow: boolean;
  cpfCnpjShow: boolean;
  cpfCnpjModel: any;
  @Input('nameControl') nameControl : FormControl;
  @Input('typeField') typeField: string;
  cpfCnpjField: boolean;
  cnpjField: boolean;
  cpfField: boolean;

  constructor(public el: ElementRef, public renderer: Renderer2) { }
  ngOnInit() {
    this.cnpjShow = false;
    this.cpfCnpjShow = true;
    this.cnpjShow = false;
    this.cnpjField = false;
  
  }

  mask(): any {
    let replaceMask;
    this.cpfCnpjShow = true;
     return {
      mask: (value) => {
        this.cpfCnpjShow = false;
        replaceMask = value.replace(/[^0-9]+/g, '')
        if (replaceMask.length > 0  && replaceMask.length <= 11) {
          this.cpfShow = true;
          this.cnpjShow = false;
          this.cpfCnpjShow = false;
          return this.cpfMask;
         }
        else {
          this.cpfShow = false;
          this.cnpjShow = true;
          this.cpfCnpjShow = false;
          return this.cnpjMask;
        }
      },
      guide: true
    };
  }

 
}
