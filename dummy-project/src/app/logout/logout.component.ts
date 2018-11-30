import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myRouter: Router) { }

  ngOnInit() {
    localStorage.setItem('flag', 'false');
    this.myRouter.navigate(['home']);
  
  }

 /*  logOut()
  {
    //this.myAuthGuard.setFlag(false);
    localStorage.setItem('flag', 'false');
    this.myRouter.navigate(['home']);
  } */

}
