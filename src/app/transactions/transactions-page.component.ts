import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
import {BlockChainService} from '../core/block-chain.service';

@Component({
  selector: 'tbw-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent {
  transactions: tbw.ITransaction[];

  constructor(userService: UserService, private blockChainService: BlockChainService) {
    this.blockChainService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }


}
