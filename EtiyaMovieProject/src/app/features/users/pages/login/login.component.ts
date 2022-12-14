import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { AuthService } from './../../../../core/auth/services/auth/auth.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component,  OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;
  loginCount: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
   

  ) { }
  ngOnInit(): void {   
    
    this.createLoginForm();
    this.primengConfig.ripple = true;
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid) {
      console.log("hh")
      this.messageService.add({
        detail: 'Email and password cannot be left blank.',
        key: 'etiya-warn',
      });
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
     
        this.loginCount = 0;
        console.log(response);
        setTimeout(() => {
          this.router.navigateByUrl('homepage');
        }, 1000);
      },
      error: (err) => {
        this.loginCount += 1;
        console.log(this.loginCount);
        if (this.loginCount == 3) {
          this.messageService.add({
            detail: 'The password was entered incorrectly 3 times.',
            key: 'etiya-warn',
          });
        } else {
          this.messageService.add({
            detail: 'Wrong Username or Password.Please try again',
            key: 'etiya-warn',
          });
        }
      },
    });
  }

  IsPropertyInvalid(name: string) {
    return (
      this.loginForm.get(name)?.touched &&
      this.loginForm.get(name)?.hasError('required')
    );
    
  }
}
