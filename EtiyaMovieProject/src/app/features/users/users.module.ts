import { MessageService } from 'primeng/api';
import { LocalStorageService } from './../../core/storage/services/local-storage/local-storage.service';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { jwtOptionsFactory } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers:[MessageService]
})
export class UsersModule { }
