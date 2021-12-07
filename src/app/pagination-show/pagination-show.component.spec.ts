import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationShowComponent } from './pagination-show.component';

describe('PaginationShowComponent', () => {
  let component: PaginationShowComponent;
  let fixture: ComponentFixture<PaginationShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
