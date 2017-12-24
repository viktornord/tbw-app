declare namespace tbw {
  interface ITransaction {
    from: string;
    to: string,
    amount: number;
    fromNetwork(): boolean;
    isFrom(account: string): boolean;
    isTo(account: string): boolean
  }
}
