import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundorderComponent } from './refundorder.component';

describe('RefundorderComponent', () => {
  let component: RefundorderComponent;
  let fixture: ComponentFixture<RefundorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
