import { Component } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  private balance: number = 50;

  get getBalance(): number {
    return this.balance
  }

  public setWithdrawMoney(amount: string): number | undefined {
    const amountNumber: number = Number(amount)
    if (isNaN(amountNumber) || this.balance < amountNumber) {
      alert("Invalid Value")
      return
    }
    this.balance -= amountNumber
    return amountNumber
  }

  public setDepositMoney(amount: string): number | undefined {
    const amountNumber: number = Number(amount)
    if (isNaN(amountNumber)) {
      alert("Invalid Value")
      return
    }
    this.balance += amountNumber
    return amountNumber
  }

}
