import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOtpUiComponent } from './mfa-otp-ui.component';

describe('MfaOtpUiComponent', () => {
  let component: MfaOtpUiComponent;
  let fixture: ComponentFixture<MfaOtpUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaOtpUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaOtpUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
