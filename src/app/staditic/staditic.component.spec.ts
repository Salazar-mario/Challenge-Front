import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaditicComponent } from './staditic.component';

describe('StaditicComponent', () => {
  let component: StaditicComponent;
  let fixture: ComponentFixture<StaditicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaditicComponent]
    });
    fixture = TestBed.createComponent(StaditicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
