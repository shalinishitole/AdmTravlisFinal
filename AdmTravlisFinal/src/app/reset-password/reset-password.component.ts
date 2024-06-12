import { Component } from '@angular/core';
import { AdmRegistration } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

    admRegistration: AdmRegistration;
  
    mainList: any;
    demo: any;
    Id: any;
    confirmPassword: any
    newPassword:any
  
  
    constructor(private router: Router, private http: HttpClient,
      private service: WebService, private route: ActivatedRoute,) {
  
      this.admRegistration = new AdmRegistration();
  
      this.mainList = [];
      this.demo = 0;
      
  
      this.route.params.subscribe((params) => {
        debugger
        this.Id = params['Id'];
        console.log("addclient", this.Id)
  
        this.service.GetRegistrationById(this.Id).subscribe((result) => {
  
          this.admRegistration = result;
          console.log("this.admRegistration", this.admRegistration);
  
        });
  
      });
  
    }
  
    OnSubmit() {
      console.log(this.newPassword, "this.newPassword")
      console.log(this.confirmPassword, "this.confirmPassword")
      if (this.newPassword == this.confirmPassword) {
        console.log("final", this.admRegistration)
        this.admRegistration.Password=this.newPassword
        this.service.UpdateRegistration(this.admRegistration).subscribe((result) => {
          console.log("hhh", result);
          if (result == 0) {
            alert("Something went wrong! Please try again.");
          } else {
            alert('Saved Successfully.');
            this.router.navigate(['/Login']);
          }
        });
      } else {
        alert("password not match")
      }
  
    }
  
  }