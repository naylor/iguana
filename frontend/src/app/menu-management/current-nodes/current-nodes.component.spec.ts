import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNodesComponent } from './current-nodes.component';

describe('CurrentNodesComponent', () => {
  let component: CurrentNodesComponent;
  let fixture: ComponentFixture<CurrentNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
