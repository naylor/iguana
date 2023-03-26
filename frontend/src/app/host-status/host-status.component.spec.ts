import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStatusComponent } from './host-status.component';

describe('HostStatusComponent', () => {
  let component: HostStatusComponent;
  let fixture: ComponentFixture<HostStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
