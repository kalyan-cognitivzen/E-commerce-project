import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignUP } from '../data-type';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  errorMsg = '';
  mailError = '';
  newError = '';
  storedApiData: any;

  signInData: any;
  public_Url = '';
  constructor(private sellerService: SellerService, private http: HttpClient) {}

  ngOnInit() {
    this.sellerService.reloadSeller();
  }

  sign(data: SignUP) {
    console.log('data', data);
    // this.sellerService.getSeller().subscribe((response) => {
    //   this.storedApiData = response;
    //   const dataArray = [];
    //   for (let value of this.storedApiData) {
    //     dataArray.push(value);
    //     console.log('dataString', dataArray);
    //     const checkIndex = dataArray.indexOf(data.email);
    //     console.log('checkIndex', checkIndex);
    //     if (checkIndex !== -1) {
    //       console.log('if', checkIndex !== -1);
    //       this.newError = 'already exist';
    //     } else {
    //       console.log('else');

    this.sellerService.userSignup(data);
  }
  //   }
  //   console.log('stored', this.storedApiData);
  // });
  // }

  login(data: SignUP) {
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.errorMsg = 'Email or Password is not correct';
      }
    });
  }
  openLogin() {
    this.showLogin = true;
  }
  openSIgnup() {
    this.showLogin = false;
  }
}
