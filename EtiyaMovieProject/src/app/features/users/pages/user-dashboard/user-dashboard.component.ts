import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import User from '../../models/user';
import { getCurrencySymbol } from '@angular/common';
import RegisterUser from '../../models/registerUser';

@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userList!:User[];
  waitingUserList!:RegisterUser[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getWaitingUsers();
  }
  getUsers(){
    this.userService.getList().subscribe((response) =>{
      console.log("users : ", response)
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

  ////////denemee
  getWaitingUsers(){
    this.userService.getRegisterList().subscribe((response) =>{
      console.log("waiting users : ", response)
      this.waitingUserList = response;
    })
  }
  deleteWaitingUser(id:number){
    if(confirm("Are you sure want to delete?")){
      this.userService.deleteWaitingusers(id).subscribe(()=>{
        setTimeout(() => {
          this.getWaitingUsers();
        }, 1000);
      })
    } 
  }

 
}
