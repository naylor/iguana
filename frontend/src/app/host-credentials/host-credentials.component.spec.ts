import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCredentialsComponent } from './host-credentials.component';

describe('NameFrontendComponent', () => {
  let component: HostCredentialsComponent;
  let fixture: ComponentFixture<HostCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
