import {Component} from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'tbw-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  userInfo: tbw.IUserInfo;

  constructor(userService: UserService) {
    this.userInfo = userService.getCurrentUser();
  }
}
