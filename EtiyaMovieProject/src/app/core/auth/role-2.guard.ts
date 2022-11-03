import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Role2Guard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private toastrService:ToastrService
    ){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
        var userRoleId =this.authService.getUser.roleId
      if (userRoleId!=2&&userRoleId!=3) {
        this.router.navigateByUrl('homepage')
        this.toastrService.warning('err')
        return false;
      }
  
      return true 
    }
  
}
