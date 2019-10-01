import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountUiComponent } from './new-account-ui.component';

describe('NewAccountUiComponent', () => {
  let component: NewAccountUiComponent;
  let fixture: ComponentFixture<NewAccountUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
