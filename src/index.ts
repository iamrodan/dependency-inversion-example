import { PaypalPaymentProcessor } from "./paypal";
import { StripePaymentProcessor } from "./stripe";
import { PaymentProcessor, User } from "./types";

export class Store {
  constructor(private paymentProcessor: PaymentProcessor) {}

  purchaseBike(quantity: number) {
    const singleBikePrice = 200;
    return this.paymentProcessor.pay(singleBikePrice * quantity);
  }

  purchaseHelmet(quantity: number) {
    const singleHelmetPrice = 20;
    return this.paymentProcessor.pay(singleHelmetPrice * quantity);
  }
}

function main() {
  const user: User = {
    id: 35,
    name: "Rodan",
    age: 22,
    phone: "+123",
  };

  const stripe = new StripePaymentProcessor(user);
  const paypal = new PaypalPaymentProcessor(user);

  const buyUsingStripe = new Store(stripe).purchaseBike(5);
  const buyUsingPaypal = new Store(paypal).purchaseBike(2);

  console.log(buyUsingStripe);
  console.log(buyUsingPaypal);
}

main();
