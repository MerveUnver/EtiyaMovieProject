import { IsRole3Guard } from 'src/app/core/auth/role-3.guard';
import { Role2Guard } from 'src/app/core/auth/role-2.guard';
import { Router } from '@angular/router';
import { AuthService } from './../../../../core/auth/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
 
  @Input() userName!: string;
  @Input() roleId!:number;
  constructor(private authService:AuthService,
    private router: Router) { 
     this.userName=authService.getUser.name+" "+authService.getUser.lastName;
    this.roleId = authService.getUser.roleId ?? 1;
    }

  ngOnInit(): void {
  }

  logOut(){
   this.authService.logOut()
  }
  goToMyContent(){
    this.router.navigateByUrl('/my-content')
  }
  goToUserDashboard(){
    this.router.navigateByUrl('/user-dashboard')
  }
  goToContent(){
    this.router.navigateByUrl('/content')
  }
}
