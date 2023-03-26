import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryCodeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: TryCodeComponent;
  let fixture: ComponentFixture<TryCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
