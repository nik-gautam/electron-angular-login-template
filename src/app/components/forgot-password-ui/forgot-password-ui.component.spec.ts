import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordUiComponent } from './forgot-password-ui.component';

describe('ForgotPasswordUiComponent', () => {
  let component: ForgotPasswordUiComponent;
  let fixture: ComponentFixture<ForgotPasswordUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
