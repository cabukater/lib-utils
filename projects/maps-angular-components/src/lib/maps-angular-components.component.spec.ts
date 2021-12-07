import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { sharedAngularComponentsComponent } from './shared-angular-components.component';

describe('sharedAngularComponentsComponent', () => {
  let component: sharedAngularComponentsComponent;
  let fixture: ComponentFixture<sharedAngularComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ sharedAngularComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sharedAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
