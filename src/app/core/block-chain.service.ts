import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class BlockChainService {
  constructor(private http: HttpClient) {
  }

  mineCoins(): Observable<{}> {

    return this.http.get('/block-chain/mine');
  }
}
