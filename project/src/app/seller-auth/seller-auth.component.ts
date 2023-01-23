import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUP } from '../data-type';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  errorMail: string = '';

  storingValue: any;

  constructor(private sellerService: SellerService) {}

  ngOnInit() {
    this.sellerService.reloadSeller();
  }

  sign(data: SignUP) {
    console.log('datas', data);
    this.storingValue = this.sellerService.dataService;
    console.log('storingValue', this.sellerService.dataService);

    // let storable = data.email;
    // console.log('storable', storable);

    // let storedArray = storable;
    // console.log('storedAarry', storedArray);

    // let emailstore = storable.includes(storedArray);
    // console.log('emailstore', emailstore);
    // if (emailstore !== -1) {
    //   console.log('if', emailstore !== -1);
    //   this.errorMail = 'alredy exist';
    // } else if (emailstore == -1) {
    //   console.log('else', emailstore !== -1);
    //   this.sellerService.userSignup(data);
    //   this.errorMail = '';
    // }
    // if (emailstore) {
    //   // this.errorMail = 'alredy exist';
    //   this.sellerService.userSignup(data);
    // } else if (!emailstore) {
    //   this.errorMail = '';
    //   this.errorMail = 'alredy exist';
    // }
  }
  // this.sellerService.userSignup(data);

  openLogin() {
    this.showLogin = true;
  }
  openSIgnup() {
    this.showLogin = false;
  }
  login(data: SignUP) {
    console.warn(data);
  }
}
