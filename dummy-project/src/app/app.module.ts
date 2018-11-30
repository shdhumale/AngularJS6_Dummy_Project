import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';
import { DashboardService } from './dashboard.service';
import { AdminService } from './admin.service';
import { HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ChangePipe } from './change.pipe';
import { SiddhucustomeDirective } from './siddhucustome.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    LogoutComponent,
    ChangePipe,
    SiddhucustomeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    AuthService,
    DashboardService,
    AdminService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
