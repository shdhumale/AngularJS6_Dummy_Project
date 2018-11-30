import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    flag: boolean;

    constructor(private myrouter: Router)
    {

    }

  setFlag(value: boolean)
  {
    this.flag = value;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!(this.flag))
      {
        this.myrouter.navigate(['home']);
      }else {
        return this.flag;
      }
    
  }
}
