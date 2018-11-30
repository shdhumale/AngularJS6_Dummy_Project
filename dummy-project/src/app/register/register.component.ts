import { AuthGuard } from './../auth.guard';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  errors = [];

  constructor(private myRouter: Router, private myAuthService: AuthService, private myAuthGuard: AuthGuard) { }

  ngOnInit() {
  }

  goBack() {
    this.myRouter.navigate(['home']);
  }

  registerUser(form: NgForm) {
    // tslint:disable-next-line:max-line-length
    if(form.controls['password'].value !== form.controls['cpassword'].value)
    {
      this.errors.push('Password and Confirm Password did not match');
    }

    if(!(this.errors.length > 0))
    {
      // tslint:disable-next-line:max-line-length
      this.myAuthService.registerUser(form.controls['username'].value, form.controls['password'].value, form.controls['cpassword'].value).subscribe(
        data => {
            console.log('We got data', data[0].status);
            if (data[0].status)
            {
              console.log('successful Registered');
              //this.myAuthGuard.setFlag(true);
              //this.myRouter.navigate(['dashboard']);
              this.myRouter.navigate(['login']);
            } else {
              alert('Registration fail');
              this.errors.push('Registration fail');
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

}
