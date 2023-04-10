import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankComponent } from './bank.component';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('(Unit) getBalance(): should balance have value', () => {
    expect(component.getBalance).toBeGreaterThan(0);
  });

  it('(Unit) setWithdrawMoney(): should remove value of balance', () => {
    const balanceBefore = component.getBalance;
    const value = "20"
    component.setWithdrawMoney(value);
    expect(component.getBalance).toEqual(balanceBefore - Number(value));
  });

  it('(Unit) setDepositMoney(): should add value to balance', () => {
    const balanceBefore = component.getBalance;
    const value = "50"
    component.setDepositMoney(value);
    expect(component.getBalance).toEqual(balanceBefore + Number(value));
  });
});
