import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OtpverifyComponent {otp!: string;
  verify: any;
  constructor(private router: Router, private ngZone: NgZone) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          this.router.navigate(['/login']);
        
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }
}

