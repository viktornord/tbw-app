import { Component } from '@angular/core';
import {UserService} from '../user/user.service';
import {BlockChainService} from '../core/block-chain.service';

@Component({
  selector: 'tbw-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  user: tbw.IUser;

  constructor(userService: UserService, private blockChainService: BlockChainService) {
    this.user = userService.getCurrentUser();
  }

  mineCoins() {
    this.blockChainService.mineCoins().subscribe(() => this.user.balance++);
  }

}
