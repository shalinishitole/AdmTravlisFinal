import { Component } from '@angular/core';
import { AdmRegistration } from '../Class';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  searchText1: any
  searchText2: any
  userid:any
  admRegistration:AdmRegistration

  constructor( private router: Router,private http: HttpClient,private service: WebService) {
    this.admRegistration = new AdmRegistration();
    }


    OnSubmit() {
      debugger
      this.service.Loginc(this.searchText1, this.searchText2).subscribe((result) => {
        debugger
        sessionStorage.setItem('SID', result.AdmRegistrationId);
        this.userid = JSON.parse(sessionStorage.getItem('SID'));

        console.log("userid", this.userid);
        if (this.userid == 0) {
          // alert("Invalid Email and Password.")
          alert('Invalid Email or Password.');
        }
        else {
          alert("Login Successfully");
          this.router.navigateByUrl("/Dashboard") ;
        }
      })


    }
}

    

