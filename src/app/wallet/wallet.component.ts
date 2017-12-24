import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from '../user/user.service';
import {BlockChainService} from '../core/block-chain.service';

@Component({
  selector: 'tbw-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  private transferFormVisible = false;

  @Input() userId: string;

  user: tbw.IUser;
  form: FormGroup;

  constructor(private userService: UserService, private blockChainService: BlockChainService) {
  }

  ngOnInit(): void {
    this.userService.get(this.userId).subscribe(user => this.user = user);
    this.form = new FormGroup({
      receiver: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required)
    });
  }

  mineCoins(): void {
    this.blockChainService.mineCoins().subscribe(() => this.user.balance++);
  }

  isTransferFormVisible(): boolean {

    return this.transferFormVisible;
  }

  toggleTransferForm(value: boolean = !this.transferFormVisible): void {
    this.transferFormVisible = value;
  }

  submitTransfer(): void {
    const {receiver, amount} = this.form.getRawValue();
    this.blockChainService.transfer(receiver, amount).subscribe(() => {
      this.form.reset();
      this.toggleTransferForm(false);
    });
  }

  cancelTransfer() {
    this.form.patchValue({amount: 0});
    this.toggleTransferForm(false);
  }

}
