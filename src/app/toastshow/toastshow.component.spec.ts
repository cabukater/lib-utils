import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastshowComponent } from './toastshow.component';

describe('ToastshowComponent', () => {
  let component: ToastshowComponent;
  let fixture: ComponentFixture<ToastshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
