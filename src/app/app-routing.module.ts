import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RequestConfirmationComponent } from './request-confirmation/request-confirmation.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'signin', component:SigninComponent},
  {path: 'logo', component:LogoComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'main', component:MainComponent},
  {path: 'footer', component:FooterComponent},
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
