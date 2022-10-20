import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import User from '../../models/user';

@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userList!:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getUsers(){
    this.userService.getList().subscribe((response) =>{
      this.userList = response;
    })
  }
  deleteUser(id:number){
    if(confirm("Are you sure want to delete?")){
      this.userService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getUsers();
        }, 1000);
      })
    } 
  }
}
