import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
import {BlockChainService} from '../core/block-chain.service';
import ITransaction = tbw.ITransaction;

@Component({
  selector: 'tbw-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent {
  transactions: ITransaction[];
  filter: string = 'all';
  hideMining: boolean = false;
  user: tbw.IUser;

  constructor(userService: UserService, private blockChainService: BlockChainService) {
    userService.get(userService.getCurrentUser()._id).subscribe(user => this.user = user);
    this.blockChainService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  isFiltered(transaction: ITransaction) {
    if (this.filter === 'outcome') {

      return transaction.isFrom(this.user.account);
    } else if (this.filter === 'income') {

      return transaction.isTo(this.user.account) && (!this.hideMining || !transaction.fromNetwork());
    }

    return !this.hideMining || !transaction.fromNetwork();
  }
}
