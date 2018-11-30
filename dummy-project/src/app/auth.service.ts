import { logInUserData } from './logInUserData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUserData } from './registerUserData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myhttpClient: HttpClient) { }

  registerUser(username: string, password: string, cpassword: string) : Observable<any>
  {
    return this.myhttpClient.post<registerUserData>('/registerapi', [username, password, cpassword]);
  }

  logInUser(usrename : string, password : string) {
    return this.myhttpClient.post<logInUserData>('/loginapi',[usrename,password ]);
  }
}
