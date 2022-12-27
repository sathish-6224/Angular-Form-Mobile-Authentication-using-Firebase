import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { NgOtpInputModule } from  'ng-otp-input';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import {MatSelectModule} from '@angular/material/select'

import { environment } from '../environments/environment';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import firebase from 'firebase/compat/app';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhoneNumberComponent,
    OtpverifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    NgOtpInputModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFirestoreModule,
    MatSelectModule

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
