import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { AuthGuard } from './auth.guard'
const routes: Routes = [

  {
    path:'',component:PhoneNumberComponent
  },
  {
    path:'login',component:LoginComponent,canActivate: [AuthGuard],
  },
  {
    path:'phone' ,component:PhoneNumberComponent
  },
  {
    path:'otpverify',component:OtpverifyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


