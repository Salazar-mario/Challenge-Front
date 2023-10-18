import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogComponent } from './button-log.component';

describe('ButtonLogComponent', () => {
  let component: ButtonLogComponent;
  let fixture: ComponentFixture<ButtonLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLogComponent]
    });
    fixture = TestBed.createComponent(ButtonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
