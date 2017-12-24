import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

import ITransaction = tbw.ITransaction;

@Injectable()
export class BlockChainService {
  constructor(private http: HttpClient) {
  }

  mineCoins(): Observable<{}> {

    return this.http.get('/block-chain/mine');
  }

  transfer(receiver: string, amount: number): Observable<ITransaction> {

    return this.http.post<ITransaction>('/transactions', {
      to: receiver,
      amount
    });
  }

  getTransactions(): Observable<ITransaction[]> {

    return this.http.get<ITransaction[]>('/transactions');
  }
}
