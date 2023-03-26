import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomManagerComponent } from './manager-classroom.component';

describe('ManagerClassroomComponent', () => {
  let component: ClassroomManagerComponent;
  let fixture: ComponentFixture<ClassroomManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
