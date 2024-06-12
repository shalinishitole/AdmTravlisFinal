import { Component, ElementRef, ViewChild } from '@angular/core';
import { AdmRegistration } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';

import { WebService } from 'src/app/Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp-match',
  templateUrl: './otp-match.component.html',
  styleUrls: ['./otp-match.component.scss']
})
export class OtpMatchComponent {


  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;

  Id: any;
  admRegistration: AdmRegistration;
  AdmRegistrationlist: any[];
  showPassword: boolean;
  mainList: any[];
  searchText: any;
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;
  otp5: any;
  otp6: any;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: WebService) {
    this.admRegistration = new AdmRegistration();
    this.AdmRegistrationlist = [];
    this.mainList = []


    this.route.params.subscribe((params) => {
      this.Id = params['Id'];
      console.log(" this.Id", this.Id)
    });

  }
  moveToNext(currentInput: any, nextInput: any): void {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  OnSubmit1() {

    this.service.GetAdmRegistrationById(this.Id).subscribe((result) => {
      this.AdmRegistrationlist = []
      this.mainList = []

      this.admRegistration = result;
      if (this.admRegistration.OtpNo == this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6) {
        alert("otp Matched")
        this.router.navigateByUrl("/ResetPassword/" + this.Id);

      } else {
        alert("otp not Matched")
      }


    });

  }

}