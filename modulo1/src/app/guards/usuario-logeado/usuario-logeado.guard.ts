import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogeadoGuard implements CanActivate{
  
  constructor(private authService: AuthService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    return isLoggedIn;
  }

}
