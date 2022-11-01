import { AuthService } from './../../../../core/auth/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
 
  @Input() userName!: string;
  constructor(private authService:AuthService) { 
     this.userName=authService.getUser.name+" "+authService.getUser.lastName;}

  ngOnInit(): void {
  }

  logOut(){
   this.authService.logOut()
  }
}
