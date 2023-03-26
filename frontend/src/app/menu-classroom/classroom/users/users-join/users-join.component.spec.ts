import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClassroomJoinComponent } from './users-join.component';

describe('EditComponent', () => {
  let component: UsersClassroomJoinComponent;
  let fixture: ComponentFixture<UsersClassroomJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersClassroomJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersClassroomJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
