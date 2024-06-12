import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

// import { CareerPathListComponent } from './career-path-list/career-path-list.component';
// import { AddCareerPathComponent } from './add-career-path/add-career-path.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpMatchComponent } from './otp-match/otp-match.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { SidebarComponent } from './sidebar/sidebar.component';
import { AddAdmTravlisInfoComponent } from './AdmTravlisInfo/add-adm-travlis-info/add-adm-travlis-info.component';
// import { AdmTravlisInfoListComponent } from './AdmTravlisInfo/adm-travlis-info-list/adm-travlis-info-list.component';
import { UpdateAdmTravlisInfoComponent } from './AdmTravlisInfo/update-adm-travlis-info/update-adm-travlis-info.component';
import { AddAdmDestinationsComponent } from './AdmDestinations/add-adm-destinations/add-adm-destinations.component';
// import { AdmDestinationsListComponent } from './AdmDestinations/adm-destinations-list/adm-destinations-list.component';
import { UpdateAdmDestinationsComponent } from './AdmDestinations/update-adm-destinations/update-adm-destinations.component';
import { AddAdmBlogComponent } from './AdmBlog/add-adm-blog/add-adm-blog.component';
// import { AdmBlogListComponent } from './AdmBlog/adm-blog-list/adm-blog-list.component';
// import { UpdateAdmBlogComponent } from './AdmBlog/update-adm-blog/update-adm-blog.component';
import { AddAdmTransTypeComponent } from './AdmTransType/add-adm-trans-type/add-adm-trans-type.component';
import { UpdateAdmTransTypeComponent } from './AdmTransType/update-adm-trans-type/update-adm-trans-type.component';
// import { AdmTransTypeListComponent } from './AdmTransType/adm-trans-type-list/adm-trans-type-list.component';
// import { AdmActivitiesListComponent } from './AdmActivities/adm-activities-list/adm-activities-list.component';
import { AddAdmVendorComponent } from './AdmVendor/add-adm-vendor/add-adm-vendor.component';
// import { AdmVendorListComponent } from './AdmVendor/adm-vendor-list/adm-vendor-list.component';
import { UpdateAdmVendorComponent } from './AdmVendor/update-adm-vendor/update-adm-vendor.component';
import { AddAdmOfferComponent } from './AdmOffer/add-adm-offer/add-adm-offer.component';
// import { AdmOfferListComponent } from './AdmOffer/adm-offer-list/adm-offer-list.component';
import { UpdateAdmOfferComponent } from './AdmOffer/update-adm-offer/update-adm-offer.component';
import { AddAdmRoleMasterComponent } from './AdmRoleMaster/add-adm-role-master/add-adm-role-master.component';
// import { AdmRoleMasterListComponent } from './AdmRoleMaster/adm-role-master-list/adm-role-master-list.component';
import { UpdateAdmRoleMasterComponent } from './AdmRoleMaster/update-adm-role-master/update-adm-role-master.component';
import { AddAdmCityMasterComponent } from './AdmCityMaster/add-adm-city-master/add-adm-city-master.component';
// import { AdmCityMasterListComponent } from './AdmCityMaster/adm-city-master-list/adm-city-master-list.component';
import { UpdateAdmCityMasterComponent } from './AdmCityMaster/update-adm-city-master/update-adm-city-master.component';
import { AddAdmStateMasterComponent } from './AdmStateMaster/add-adm-state-master/add-adm-state-master.component';
// import { AdmStateMasterListComponent } from './AdmStateMaster/adm-state-master-list/adm-state-master-list.component';
import { UpdateAdmStateMasterComponent } from './AdmStateMaster/update-adm-state-master/update-adm-state-master.component';
import { AddAdmCountryMasterComponent } from './AdmCountryMaster/add-adm-country-master/add-adm-country-master.component';
import { UpdateAdmCountryMasterComponent } from './AdmCountryMaster/update-adm-country-master/update-adm-country-master.component';
// import { AdmCountryMasterListComponent } from './AdmCountryMaster/adm-country-master-list/adm-country-master-list.component';
import { AddAdmRegistrationComponent } from './AdmRegistration/add-adm-registration/add-adm-registration.component';
// import { AdmRegistrationListComponent } from './AdmRegistration/adm-registration-list/adm-registration-list.component';
import { UpdateAdmRegistrationComponent } from './AdmRegistration/update-adm-registration/update-adm-registration.component';
import { AdmRegistrationListComponent } from './AdmRegistration/adm-registration-list/adm-registration-list.component';
import { AdmCountryMasterListComponent } from './AdmCountryMaster/adm-country-master-list/adm-country-master-list.component';
import { AdmStateMasterListComponent } from './AdmStateMaster/adm-state-master-list/adm-state-master-list.component';
import { AdmRoleMasterListComponent } from './AdmRoleMaster/adm-role-master-list/adm-role-master-list.component';
import { AdmCityMasterListComponent } from './AdmCityMaster/adm-city-master-list/adm-city-master-list.component';
import { AdmOfferListComponent } from './AdmOffer/adm-offer-list/adm-offer-list.component';
import { AdmVendorListComponent } from './AdmVendor/adm-vendor-list/adm-vendor-list.component';
import { AdmTransTypeListComponent } from './AdmTransType/adm-trans-type-list/adm-trans-type-list.component';
import { AdmBlogListComponent } from './AdmBlog/adm-blog-list/adm-blog-list.component';
import { AdmTravlisInfoListComponent } from './AdmTravlisInfo/adm-travlis-info-list/adm-travlis-info-list.component';

import { AuthGuard } from './auth-guard.service';
import { AdmActivitiesMasterListComponent } from './AdmActivitiesMaster/adm-activities-master-list/adm-activities-master-list.component';
import { AddAdmActivitiesMasterComponent } from './AdmActivitiesMaster/add-adm-activities-master/add-adm-activities-master.component';
import { UpdateAdmActivitiesMasterComponent } from './AdmActivitiesMaster/update-adm-activities-master/update-adm-activities-master.component';
import { AdmDestinationsListComponent } from './AdmDestinations/adm-destinations-list/adm-destinations-list.component';
import { UpdateAdmBlogComponent } from './AdmBlog/update-adm-blog/update-adm-blog.component';


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'Dashboard', component: DashboardComponent },
  { path: 'Forms', component: FormsComponent },
  { path: 'Login', component: LoginComponent },
  // { path: 'Registration', component: RegistrationComponent },

  { path: 'AddAdmTravlisInfo', component: AddAdmTravlisInfoComponent },
   { path: 'AdmTravlisInfoList', component: AdmTravlisInfoListComponent },
  { path: 'UpdateAdmTravlisInfo/:AdmTravlisInfoId', component: UpdateAdmTravlisInfoComponent },

  { path: 'AddAdmDestinations', component: AddAdmDestinationsComponent },
   { path: 'AdmDestinationsList', component: AdmDestinationsListComponent },
  { path: 'UpdateAdmDestinations/:AdmDestinationsId', component: UpdateAdmDestinationsComponent },

  { path: 'AddAdmBlog', component: AddAdmBlogComponent },
   { path: 'AdmBlogList', component: AdmBlogListComponent },
  { path: 'UpdateAdmBlog/:AdmBlogId', component: UpdateAdmBlogComponent },

  { path: 'AddAdmTransType', component: AddAdmTransTypeComponent },
   { path: 'AdmTransTypeList', component: AdmTransTypeListComponent },
  { path: 'UpdateAdmTransType/:AdmTransTypeId', component: UpdateAdmTransTypeComponent },


    { path: 'AdmActivitiesMasterList', component: AdmActivitiesMasterListComponent },
  { path: 'AddAdmActivitiesMaster', component: AddAdmActivitiesMasterComponent },
  { path: 'UpdateAdmActivitiesMaster/:AdmActivitiesMasterId', component: UpdateAdmActivitiesMasterComponent },

  { path: 'AddAdmVendor', component: AddAdmVendorComponent },
   { path: 'AdmVendorList', component: AdmVendorListComponent },
  { path: 'UpdateAdmVendor/:AdmVendorId', component: UpdateAdmVendorComponent },

  { path: 'AddAdmOffer', component: AddAdmOfferComponent },
   { path: 'AdmOfferList', component: AdmOfferListComponent },
  { path: 'UpdateAdmOffer/:AdmOfferId', component: UpdateAdmOfferComponent },

  { path: 'AddAdmCityMaster', component: AddAdmCityMasterComponent },
  { path: 'AdmCityMasterList', component: AdmCityMasterListComponent },
  { path: 'UpdateAdmCityMaster/:AdmCityMasterId', component: UpdateAdmCityMasterComponent },

  { path: 'AddAdmRoleMaster', component: AddAdmRoleMasterComponent },
  { path: 'AdmRoleMasterList', component: AdmRoleMasterListComponent },
  { path: 'UpdateAdmRoleMaster/:AdmRoleMasterId', component: UpdateAdmRoleMasterComponent },

 { path: 'AddAdmStateMaster', component: AddAdmStateMasterComponent },
   { path: 'AdmStateMasterList', component: AdmStateMasterListComponent },
  { path: 'UpdateAdmStateMaster/:AdmStateMasterId', component: UpdateAdmStateMasterComponent },

  { path: 'AddAdmCountryMaster', component: AddAdmCountryMasterComponent },
   { path: 'AdmCountryMasterList', component: AdmCountryMasterListComponent },
  { path: 'UpdateAdmCountryMaster/:AdmCountryMasterId', component: UpdateAdmCountryMasterComponent },

  {path: 'AdmRegistration', component: AddAdmRegistrationComponent },
  { path: 'AdmRegistrationList', component: AdmRegistrationListComponent },
  { path: 'UpdateAdmRegistration', component: UpdateAdmRegistrationComponent },




  //  { path: 'Tables', component: TablesComponent },
    { path: 'Button', component: ButtonComponent },
   { path: 'Dropdown', component: DropdownComponent },


  //  toptrain Menu start



  // { path: 'AddCareerPath', component: AddCareerPathComponent, canActivate: [AuthGuard] },
  // { path: 'CareerPathList', component: CareerPathListComponent, canActivate: [AuthGuard] },

  { path: 'ForgotPassword', component: ForgotPasswordComponent , canActivate: [AuthGuard]},
  { path: 'OtpMatch/:Id', component: OtpMatchComponent , canActivate: [AuthGuard]},
  { path: 'ResetPassword/:Id', component: ResetPasswordComponent, canActivate: [AuthGuard]},
  
  
  
  
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
