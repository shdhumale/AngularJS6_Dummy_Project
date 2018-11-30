import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors= [];

  constructor(private myRouter: Router, private myService: AuthService) { }

  ngOnInit() {
  }

  logInUser(form : NgForm)
  {

    if((form.controls['username'].value === '') || (form.controls['password'].value === '')  )
    {
        this.errors.push("Enter data in UserName or Password field");
    }
    if(!(this.errors.length > 0))
    {
      this.myService.logInUser(form.controls['username'].value, form.controls['password'].value).subscribe(
        data => {
          console.log('We got login data', data);
          if (form.controls['username'].value === data[0].username && form.controls['password'].value === data[0].password)
          {
            console.log('successful logged in');
            this.myRouter.navigate(['dashboard']);
          } else {
            alert('Logged in fail');
            this.errors.push('Logged in fail');
            this.myRouter.navigate(['home']);
          }
      },
      err => console.log(err), // error
      () => console.log('getData Complete') // complete
      );
    }else{
      alert (this.errors);
      this.errors = [];
    }
    
  }

  goBack()
  {
    this.myRouter.navigate(['home']);
  }

}
