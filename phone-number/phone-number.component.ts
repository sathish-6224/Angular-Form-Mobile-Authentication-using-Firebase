import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
})
export class PhoneNumberComponent implements OnInit {
  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router, private ngZone: NgZone,
    
    private fb:FormBuilder,) {}

  ngOnInit() {}

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );
        this.ngZone.run(() => {
          this.router.navigate(['/otpverify']);
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }
  public loginForm = this.fb.group({

    phoneNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
    

  });
}