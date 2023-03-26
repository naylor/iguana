import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesAnswerEditComponent } from './exercises-answer-edit.component';

describe('ExercisesComponent', () => {
  let component: ExercisesAnswerEditComponent;
  let fixture: ComponentFixture<ExercisesAnswerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesAnswerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesAnswerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
