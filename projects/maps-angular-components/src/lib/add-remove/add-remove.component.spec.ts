import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddRemoveComponent } from './add-remove.component';

describe('AddRemoveComponent', () => {
  let component: AddRemoveComponent;
  let fixture: ComponentFixture<AddRemoveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
