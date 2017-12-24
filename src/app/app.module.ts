import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AppInterceptor} from './app.interceptor';
import {AuthTokenService} from './auth/auth-token.service';
import {UserModule} from './user/user.module';
import {BlockChainService} from './core/block-chain.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [
    AuthService,
    AuthTokenService,
    AuthGuard,
    BlockChainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
