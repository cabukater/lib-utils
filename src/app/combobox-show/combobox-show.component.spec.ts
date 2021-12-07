import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxShowComponent } from './combobox-show.component';

describe('ComboboxShowComponent', () => {
  let component: ComboboxShowComponent;
  let fixture: ComponentFixture<ComboboxShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
