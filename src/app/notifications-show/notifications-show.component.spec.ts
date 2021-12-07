import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsShowComponent } from './notifications-show.component';

describe('NotificationsShowComponent', () => {
  let component: NotificationsShowComponent;
  let fixture: ComponentFixture<NotificationsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
