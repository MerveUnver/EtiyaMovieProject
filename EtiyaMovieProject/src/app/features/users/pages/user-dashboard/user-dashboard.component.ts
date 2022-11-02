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
    var user= this.waitingUserList.filter(f=>f.id==id)[0];
   
    if(confirm("Are you sure want to delete?")){
      this.userService.deleteWaitingusers(id).subscribe(()=>{
        setTimeout(() => {
          this.getWaitingUsers();
        }, 1000);
      })
    } 
  }

  acceptWaitingUser(id:number){
    var user= this.waitingUserList.filter(f=>f.id==id)[0];
    this.userService.add(user).subscribe();
    this.userService.deleteWaitingusers(id).subscribe()
   }
  updateUserRole(id:number,roleName:string){
   
 var user= this.waitingUserList.filter(f=>f.id==id);
 if(user){
  var selectedUser=user[0]
  selectedUser.roleName= "role-" + roleName
 }
  }
 
 
}
