import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'tbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tbw';

  constructor(private authService: AuthService, private router: Router) {
  }

  isAuthorized(): boolean {

    return this.authService.isAuthorized();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
