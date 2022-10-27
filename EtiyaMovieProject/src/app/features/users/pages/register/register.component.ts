import { PrimeNGConfig } from 'primeng/api';

import { UserService } from './../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../../models/user';
import RegisterUser from '../../models/registerUser';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup;
  registerUser!:RegisterUser;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastr: ToastrService,
    private router: Router,
    private primengConfig: PrimeNGConfig

  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.primengConfig.ripple = true;
  }
  createRegisterForm(): void{
    this.registerForm = this.formBuilder.group({
      name: [this.registerUser?.name || '',Validators.required],
      lastName: [this.registerUser?.lastname || '',Validators.required],
      email: [this.registerUser?.email || '',Validators.required],
      password: [this.registerUser?.password || '',Validators.required]
    })   
  }

register(){
  if (this.registerForm.invalid) {
    this.toastr.warning("Please fill the required areas!!!","Add")
    return;
  }

  const registerUser:RegisterUser = {
    ...this.registerForm.value,
  }

  this.userService.addRegisterUser(registerUser).subscribe(() =>{
    setTimeout(() => {
      
      this.toastr.success("User succesfully add!","Add")
      this.router.navigateByUrl("/user-dashboard");
    }, 1000);
  })
}
IsPropertyInvalid(name: string) {
  return (
    this.registerForm.get(name)?.touched &&
    this.registerForm.get(name)?.hasError('required')
  );
}

}

