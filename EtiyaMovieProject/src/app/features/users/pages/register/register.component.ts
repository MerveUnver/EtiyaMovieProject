import { UserService } from './../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../../models/user';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup;
  user!:User
  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  createCustomerForm(): void{
    this.registerForm = this.formBuilder.group({
      name: [this.user?.name || '',Validators.required],
      lastName: [this.user?.lastname || '',Validators.required],
      email: [this.user?.email || '',Validators.required],
      password: [this.user?.password || '',Validators.required]
    })   
  }

save(){
  if (this.registerForm.invalid) {
    this.toastr.warning("Please fill the required areas!!!","Add")
    return;
  }

  const user:User = {
    ...this.registerForm.value,
  }

  this.userService.add(user).subscribe(() =>{
    setTimeout(() => {
      
      this.toastr.success("User succesfully add!","Add")
    }, 1000);
  })
}
}
