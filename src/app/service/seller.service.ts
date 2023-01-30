import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUP } from '../data-type';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { IData } from './Dummydata';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLogged = new Subject<boolean>();

  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignup(data: SignUP) {
    console.log(data);
    this.http
      .post('http://localhost:3000/Seller', data, { observe: 'response' })
      .subscribe((res) => {
        console.log('res', res.body);
        if (res) {
          localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        }
      });

    this.http
      .get(
        `http://localhost:3000/Seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.body && res.body.length === 1) {
          // localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
  getSeller() {
    return this.http.get(`http://localhost:3000/Seller`);
  }

  userLogin(data: Login) {
    console.log(data);

    this.http
      .get(
        `http://localhost:3000/Seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.body && res.body.length === 1) {
          localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        } else {
          this.isLoginError.emit(true);
          console.warn('login failed');
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogged.next(true);
    }
  }
}
