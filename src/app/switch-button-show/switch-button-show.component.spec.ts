import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchButtonShowComponent } from './switch-button-show.component';

describe('SwitchButtonShowComponent', () => {
  let component: SwitchButtonShowComponent;
  let fixture: ComponentFixture<SwitchButtonShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchButtonShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchButtonShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
