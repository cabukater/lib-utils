import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RemoveAddFieldsComponent } from './remove-add-fields.component';

describe('RemoveAddFieldsComponent', () => {
  let component: RemoveAddFieldsComponent;
  let fixture: ComponentFixture<RemoveAddFieldsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAddFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAddFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
