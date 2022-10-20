import { StorageService } from './../storage/services/local-storage/storageService';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducers';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

/* export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:52849'],
  };
} */

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
/* 
JwtModule.forRoot({
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: ["example.com"],
    disallowedRoutes: ["http://example.com/examplebadroute/"],
  },
}),

JwtModule.forRoot({
  jwtOptionsProvider: {
    provide: JWT_OPTIONS,
    useFactory: jwtOptionsFactory,
    deps: [LocalStorageService],
  },
}), */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(authReducers),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:52849"]
      },
    }),
  ],
})
export class AuthModule {}
