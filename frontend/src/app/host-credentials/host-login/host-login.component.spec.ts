import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLoginComponent } from './host-login.component';

describe('NameFrontendComponent', () => {
  let component: HostLoginComponent;
  let fixture: ComponentFixture<HostLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
