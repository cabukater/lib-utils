import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveShowComponent } from './add-remove-show.component';

describe('AddRemoveShowComponent', () => {
  let component: AddRemoveShowComponent;
  let fixture: ComponentFixture<AddRemoveShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
