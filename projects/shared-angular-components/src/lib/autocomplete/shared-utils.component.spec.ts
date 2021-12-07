import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SharedAngularComponentsComponent } from './shared-angular-.component';

describe('SharedAngularComponentsComponent', () => {
  let component: SharedAngularComponentsComponent;
  let fixture: ComponentFixture<SharedAngularComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedAngularComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
