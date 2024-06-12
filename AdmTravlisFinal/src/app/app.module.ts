import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';

import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpMatchComponent } from './otp-match/otp-match.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';



import { AddAdmDestinationsComponent } from './AdmDestinations/add-adm-destinations/add-adm-destinations.component';
import { UpdateAdmDestinationsComponent } from './AdmDestinations/update-adm-destinations/update-adm-destinations.component';


import { AddAdmBlogComponent } from './AdmBlog/add-adm-blog/add-adm-blog.component';

import { UpdateAdmRoleMasterComponent } from './AdmRoleMaster/update-adm-role-master/update-adm-role-master.component';
import { AddAdmRoleMasterComponent } from './AdmRoleMaster/add-adm-role-master/add-adm-role-master.component';
import { AddAdmCityMasterComponent } from './AdmCityMaster/add-adm-city-master/add-adm-city-master.component';
import { UpdateAdmCityMasterComponent } from './AdmCityMaster/update-adm-city-master/update-adm-city-master.component';
import { AddAdmCountryMasterComponent } from './AdmCountryMaster/add-adm-country-master/add-adm-country-master.component';
import { UpdateAdmCountryMasterComponent } from './AdmCountryMaster/update-adm-country-master/update-adm-country-master.component';
import { AddAdmOfferComponent } from './AdmOffer/add-adm-offer/add-adm-offer.component';
import { UpdateAdmOfferComponent } from './AdmOffer/update-adm-offer/update-adm-offer.component';
import { AddAdmRegistrationComponent } from './AdmRegistration/add-adm-registration/add-adm-registration.component';
import { UpdateAdmRegistrationComponent } from './AdmRegistration/update-adm-registration/update-adm-registration.component';
import { AddAdmStateMasterComponent } from './AdmStateMaster/add-adm-state-master/add-adm-state-master.component';
import { UpdateAdmStateMasterComponent } from './AdmStateMaster/update-adm-state-master/update-adm-state-master.component';
import { AddAdmTransTypeComponent } from './AdmTransType/add-adm-trans-type/add-adm-trans-type.component';
import { UpdateAdmTransTypeComponent } from './AdmTransType/update-adm-trans-type/update-adm-trans-type.component';
import { AddAdmTravlisInfoComponent } from './AdmTravlisInfo/add-adm-travlis-info/add-adm-travlis-info.component';
import { UpdateAdmTravlisInfoComponent } from './AdmTravlisInfo/update-adm-travlis-info/update-adm-travlis-info.component';
import { AddAdmVendorComponent } from './AdmVendor/add-adm-vendor/add-adm-vendor.component';

import { UpdateAdmVendorComponent } from './AdmVendor/update-adm-vendor/update-adm-vendor.component';
import { AdmBlogListComponent } from './AdmBlog/adm-blog-list/adm-blog-list.component';
import { AdmCityMasterListComponent } from './AdmCityMaster/adm-city-master-list/adm-city-master-list.component';
import { AdmCountryMasterListComponent } from './AdmCountryMaster/adm-country-master-list/adm-country-master-list.component';
import { AdmOfferListComponent } from './AdmOffer/adm-offer-list/adm-offer-list.component';
import { AdmRegistrationListComponent } from './AdmRegistration/adm-registration-list/adm-registration-list.component';
import { AdmRoleMasterListComponent } from './AdmRoleMaster/adm-role-master-list/adm-role-master-list.component';
import { AdmStateMasterListComponent } from './AdmStateMaster/adm-state-master-list/adm-state-master-list.component';
import { AdmTransTypeListComponent } from './AdmTransType/adm-trans-type-list/adm-trans-type-list.component';
import { AdmTravlisInfoListComponent } from './AdmTravlisInfo/adm-travlis-info-list/adm-travlis-info-list.component';
import { AdmVendorListComponent } from './AdmVendor/adm-vendor-list/adm-vendor-list.component';
import { AdmActivitiesMasterListComponent } from './AdmActivitiesMaster/adm-activities-master-list/adm-activities-master-list.component';
import { AddAdmActivitiesMasterComponent } from './AdmActivitiesMaster/add-adm-activities-master/add-adm-activities-master.component';
import { UpdateAdmActivitiesMasterComponent } from './AdmActivitiesMaster/update-adm-activities-master/update-adm-activities-master.component';
import { AdmDestinationsListComponent } from './AdmDestinations/adm-destinations-list/adm-destinations-list.component';
import { UpdateAdmBlogComponent } from './AdmBlog/update-adm-blog/update-adm-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
  
    FooterComponent,
    FormsComponent,
   
    LoginComponent,
    
    ButtonComponent,
    DropdownComponent,
   
    ForgotPasswordComponent,
    OtpMatchComponent,
    ResetPasswordComponent,

   
       
       AddAdmDestinationsComponent,
       
       UpdateAdmDestinationsComponent,
      
       AddAdmBlogComponent,
      
      
      
       
       UpdateAdmRoleMasterComponent,
       
               AddAdmRoleMasterComponent,
               
               AddAdmCityMasterComponent,
               
               UpdateAdmCityMasterComponent,
               AddAdmCountryMasterComponent,
               UpdateAdmCountryMasterComponent,
               
               AddAdmOfferComponent,
               UpdateAdmOfferComponent,

               AddAdmRegistrationComponent,
               UpdateAdmRegistrationComponent,

              
               AddAdmStateMasterComponent,
               UpdateAdmStateMasterComponent,

               AddAdmTransTypeComponent,
               UpdateAdmTransTypeComponent,

              
               AddAdmTravlisInfoComponent,
               UpdateAdmTravlisInfoComponent,

               AddAdmVendorComponent,
               UpdateAdmVendorComponent,
               
               AdmBlogListComponent,
               AdmCityMasterListComponent,
               AdmCountryMasterListComponent,
               
               AdmOfferListComponent,
               AdmRegistrationListComponent,
               AdmRoleMasterListComponent,
               AdmStateMasterListComponent,
               AdmTransTypeListComponent,
               AdmTravlisInfoListComponent,
               AdmVendorListComponent,
               AdmActivitiesMasterListComponent,
               AddAdmActivitiesMasterComponent,
               UpdateAdmActivitiesMasterComponent,
               AdmDestinationsListComponent,
               UpdateAdmBlogComponent
               
       
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
             // '496925693986-i3markpgj2kk2f6n3rb6k6eviimv6g55.apps.googleusercontent.com'
              '188718229861-5upd898p32a51hjmgsa9etp1usnh0dlb.apps.googleusercontent.com'
              //'256869107176-efrnlcvp8v5q273kq8e3o9is8f59oje0.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
