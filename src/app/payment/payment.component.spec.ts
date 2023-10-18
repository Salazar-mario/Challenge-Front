import { ComponentFixture, TestBed } from '@angular/core/testing';
import { paymentComponent } from './payment.component';


describe('PaymentComponent', () => {
  let component: paymentComponent;
  let fixture: ComponentFixture<paymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent]
    });
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
