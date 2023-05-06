import { PaymentProcessor, User } from "../types";

export class PaypalPaymentProcessor implements PaymentProcessor {
  constructor(private user: User) {}

  pay(amountInDollars: number): string {
    return `${this.user.name} paid ${amountInDollars} USD using Paypal`;
  }
}
