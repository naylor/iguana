import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesFilesComponent } from './exercises-files.component';

describe('EditComponent', () => {
  let component: ExercisesFilesComponent;
  let fixture: ComponentFixture<ExercisesFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
