import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminMovieComponentComponent } from './admin-movie-component/admin-movie-component.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modal',component:AuthenticationComponent},
  { path: 'userPage', component: UserDashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data:{roles: ['Admin']} },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'user', component: UserDashboardComponent , canActivate: [AuthGuard], data:{roles: ['User']}},
  { path: 'login', component: LoginComponent },
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
