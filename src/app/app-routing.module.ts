import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

import {LoginPageComponent} from './login/login-page.component';
import {SharedModule} from './shared/shared.module';
import {DashboardPageComponent} from './dashboard/dashboard-page.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: DashboardPageComponent, canActivate: []},
  {path: 'login', component: LoginPageComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    LoginPageComponent
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
