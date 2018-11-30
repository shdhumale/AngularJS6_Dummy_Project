import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'logout',
    component: LogoutComponent
  },
  {
    path : 'admin',
    component: AdminComponent
  },
  {
    path : '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
