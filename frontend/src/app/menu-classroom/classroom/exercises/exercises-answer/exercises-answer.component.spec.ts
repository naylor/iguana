import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesAnswerComponent } from './exercises-answer.component';

describe('EditComponent', () => {
  let component: ExercisesAnswerComponent;
  let fixture: ComponentFixture<ExercisesAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
