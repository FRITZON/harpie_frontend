import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RequestConfirmationComponent } from './request-confirmation/request-confirmation.component';

const routes: Routes = [
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'change-password', component:ChangePasswordComponent},
  {path: 'request-confirmation', component:RequestConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
