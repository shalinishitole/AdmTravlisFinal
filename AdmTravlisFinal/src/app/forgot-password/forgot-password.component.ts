import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdmRegistration } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {


  admRegistrationlist: any[]
  mainlist: any[]
  mainlist1:any[]
  admRegistration: AdmRegistration;
  Id:any

  constructor(private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admRegistration = new AdmRegistration();
    this.admRegistrationlist = []
    this.mainlist = []
    this.mainlist1=[]
   
  }
  OnSubmit() {
    this.admRegistrationlist = []
    this.service.GetAllAdmRegistration().subscribe((result) => {
      console.log(result);
      debugger
      for (let data of result) {
        this.admRegistrationlist.push(data);
      }
      console.log("admRegistration", this.admRegistrationlist); //Email

      this.mainlist = this.admRegistrationlist.filter(x => x.Email == this.admRegistration.Email);
      console.log("e1", this.mainlist);

      if (this.mainlist.length == 1) {
        // alert('Email Id Existed');
        this.SendOTPEmailc()
      }

      else {
        alert("Invalid Email Id");

      }
    });

  }


  SendOTPEmailc() {
    this.admRegistrationlist = []
    this.mainlist = []
    this.mainlist1=[]
    this.service.SendOTPEmailc(this.admRegistration.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")

        console.log('Email sent successfully:', response);
       
        this.admRegistration.OtpNo = response.otp;
        console.log('Received OTP:', this.admRegistration.OtpNo);
       
        this.service.GetAllAdmRegistration().subscribe((result) => {
          this.admRegistrationlist = result;
          this.mainlist1 = this.admRegistrationlist.filter(x => x.Email == this.admRegistration.Email);

          for (let data1 of this.mainlist1) {
            this.Id = data1.RegistrationId;
       
          }
          debugger
          this.service.GetAdmRegistrationById(this.Id).subscribe((result) => {
            this.admRegistration = result;
            console.log("fun", this.admRegistration);

          
            this.admRegistration.OtpNo = response.otp;
            this.service.UpdateAdmRegistration(this.admRegistration).subscribe((result) => {
              if (result == 0) {
                alert('Not updated!');

              } else {
                // alert('updated successfully');
                this.router.navigateByUrl("/OtpMatch/" + this.Id);

                
              }
            });
          });
        });
      }
    });
  }



}
