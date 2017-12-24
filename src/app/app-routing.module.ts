import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

import {LoginPageComponent} from './login/login-page.component';
import {SharedModule} from './shared/shared.module';
import {DashboardPageComponent} from './dashboard/dashboard-page.component';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {TransactionsPageComponent} from './transactions/transactions-page.component';
import {WalletComponent} from './wallet/wallet.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: DashboardPageComponent, canActivate: [AuthGuard]},
  {path: 'transactions', pathMatch: 'full', component: TransactionsPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    DashboardPageComponent,
    TransactionsPageComponent,
    LoginPageComponent,
    WalletComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
