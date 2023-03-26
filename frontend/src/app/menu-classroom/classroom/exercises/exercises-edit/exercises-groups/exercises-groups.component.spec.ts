import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesGroupsComponent } from './exercises-groups.component';

describe('EditComponent', () => {
  let component: ExercisesGroupsComponent;
  let fixture: ComponentFixture<ExercisesGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
