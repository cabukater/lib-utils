import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatepickersharedComponent } from './datepicker-shared.component';

describe('DatepickersharedComponent', () => {
  let component: DatepickersharedComponent;
  let fixture: ComponentFixture<DatepickersharedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickersharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickersharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
