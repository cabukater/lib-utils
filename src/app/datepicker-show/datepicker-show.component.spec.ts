import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerShowComponent } from './datepicker-show.component';

describe('DatepickerShowComponent', () => {
  let component: DatepickerShowComponent;
  let fixture: ComponentFixture<DatepickerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
