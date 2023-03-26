import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomManagerEditComponent } from './classroom-manager-edit.component';

describe('ManagerClassroomEditComponent', () => {
  let component: ClassroomManagerEditComponent;
  let fixture: ComponentFixture<ClassroomManagerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomManagerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
