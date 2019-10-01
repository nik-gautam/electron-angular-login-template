import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaUiComponent } from './mfa-ui.component';

describe('MfaUiComponent', () => {
  let component: MfaUiComponent;
  let fixture: ComponentFixture<MfaUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
