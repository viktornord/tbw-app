export class Transaction implements tbw.ITransaction {
  from: string;
  to: string;
  amount: number;

  constructor(data?: {}) {
    Object.assign(this, data);
  }

  fromNetwork(): boolean {

    return this.from === 'Network';
  }

  isFrom(account: string): boolean {

    return this.from === account;
  }

  isTo(account: string): boolean {

    return this.to === account;
  }
}
