import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClassroomComponent } from './menu-classroom.component';

describe('MenuClassrooomComponent', () => {
  let component: MenuClassroomComponent;
  let fixture: ComponentFixture<MenuClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
