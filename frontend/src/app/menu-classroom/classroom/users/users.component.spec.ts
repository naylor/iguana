import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClassroomComponent } from './users.component';

describe('UsersClassroomComponent', () => {
  let component: UsersClassroomComponent;
  let fixture: ComponentFixture<UsersClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
