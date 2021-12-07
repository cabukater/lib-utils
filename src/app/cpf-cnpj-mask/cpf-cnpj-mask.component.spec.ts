import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfCnpjMaskComponent } from './cpf-cnpj-mask.component';

describe('CpfCnpjMaskComponent', () => {
  let component: CpfCnpjMaskComponent;
  let fixture: ComponentFixture<CpfCnpjMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfCnpjMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfCnpjMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
