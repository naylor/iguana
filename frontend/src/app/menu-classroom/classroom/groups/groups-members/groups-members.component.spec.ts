import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsMembersComponent } from './groups-members.component';

describe('EditComponent', () => {
  let component: GroupsMembersComponent;
  let fixture: ComponentFixture<GroupsMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
