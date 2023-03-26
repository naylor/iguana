import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterAvailableComponent } from './cluster-available.component';

describe('ClusterAvailableComponent', () => {
  let component: ClusterAvailableComponent;
  let fixture: ComponentFixture<ClusterAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
