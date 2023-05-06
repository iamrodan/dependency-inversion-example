export type User = {
  id: number;
  name: string;
  phone: string;
  age: number;
  address?: string;
};

export interface PaymentProcessor {
  pay(amountInDollars: number): string;
}
