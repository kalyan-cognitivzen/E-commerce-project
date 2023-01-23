import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUP } from '../data-type';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { IData } from './Dummydata';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  public dataService: any;
  isSellerLogged = new Subject<boolean>();
  public public_URL: string = 'http://localhost:3000/Seller';

  constructor(private http: HttpClient) {}

  //  getData():Observable<IData>[]>{
  //     return this.http.get<IData[]>(this.public_URL)
  //  }

  userSignup(data: SignUP) {
    console.log(data);
    this.http
      .post('http://localhost:3000/Seller', data, { observe: 'response' })
      .subscribe((res) => {
        console.log('res', res.body);
        this.dataService = res;
        if (res) {
          localStorage.setItem('seller', JSON.stringify(res.body));
          // this.router.navigate(['seller-home']);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogged.next(true);
    }
  }
}
