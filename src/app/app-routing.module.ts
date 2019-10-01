import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginUIComponent } from './components/login-ui/login-ui.component';
import { ForgotPasswordUiComponent } from './components/forgot-password-ui/forgot-password-ui.component';
import { NewAccountUiComponent } from './components/new-account-ui/new-account-ui.component';
import { MfaUiComponent } from './components/mfa-ui/mfa-ui.component';
import { MfaOtpUiComponent } from './components/mfa-otp-ui/mfa-otp-ui.component';

const routes: Routes = [
    {
        path: '',
        component: LoginUIComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordUiComponent
    },
    {
        path: 'new-account',
        component: NewAccountUiComponent
    },
    {
        path: 'mfa-email',
        component: MfaUiComponent
    },
    {
        path: 'mfa-otp',
        component: MfaOtpUiComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
