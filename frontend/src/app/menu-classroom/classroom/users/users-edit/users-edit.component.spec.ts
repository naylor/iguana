import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClassroomEditComponent } from './users-edit.component';

describe('UsersClassroomEditComponent', () => {
  let component: UsersClassroomEditComponent;
  let fixture: ComponentFixture<UsersClassroomEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersClassroomEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersClassroomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
