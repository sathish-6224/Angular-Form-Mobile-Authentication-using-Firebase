import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
    });
  }
}