import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginService} from '../login/login.service';

@Injectable()
export class PermissionGuard implements CanActivate {

  constructor( private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const permissions = route.data.permissions;

    for (const permission of permissions) {
      if ( this.loginService.getPermission() === permission) {
        return true;
      }
    }
    return false;
  }
}
