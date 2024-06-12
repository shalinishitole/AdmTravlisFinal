import { Component, OnInit } from        '@angular/core';
import { Injectable } from        '@angular/core';
import { HttpRequest, HttpClient } from        '@angular/common/http';
import { Observable} from        'rxjs';
import { HttpHeaders } from        '@angular/common/http';
import { Registration,UserDetail,UserSocialMedia,EmergencyContact,AdmDestinations,DestinationGallery,AdmActivities,AdmBlog,Trip,TripType,Feedback,Gallery,ServiceTable,AdmVendor,VendorService,Alert,Booking,AdmOffer,AdmTransType,Hotel,AdmRoleMaster,UserRole,AdmRegistration,AdmTravlisInfo,AdmCityMaster,AdmCountryMaster,AdmStateMaster, Login, Loginc } from        './Class';
//add name of class here
import { GlobalVariable } from        './Global';
@Injectable({
providedIn:        'root'
})

export class WebService {
httpOptions = {
 headers: new HttpHeaders({
        'Content-Type':  'application/json',
 "Access-Control-Allow-Headers": "Content-Type",
 "Access-Control-Allow-Methods":        'GET, POST, OPTIONS, DELETE,PUT',
 "Content-Security-Policy":        'upgrade-insecure-requests' 
  })
};
constructor (private http: HttpClient){  }
//Registration
AddRegistration(Registration): Observable<any> {
 return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/AddRegistration",Registration, this.httpOptions);
}
GetAllRegistration()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration", this.httpOptions);
}
DeleteRegistration(RegistrationId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Registration/DeleteRegistration?RegistrationId="+RegistrationId, this.httpOptions);
}
GetRegistrationById(RegistrationId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?RegistrationId="+RegistrationId, this.httpOptions);
}
UpdateRegistration(Registration): Observable<any> {
 return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration",Registration, this.httpOptions);
}
SaveRegistrationImage(formdata,RegistrationId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Registration/SaveRegistrationImage?RegistrationId="+RegistrationId, formdata, null );
return this.http.request(uploadReq);
}










//UserDetail
AddUserDetail(UserDetail): Observable<any> {
 return this.http.post<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/AddUserDetail",UserDetail, this.httpOptions);
}
GetAllUserDetail()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetAllUserDetail", this.httpOptions);
}
DeleteUserDetail(UserDetailsId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/DeleteUserDetail?UserDetailsId="+UserDetailsId, this.httpOptions);
}
GetUserDetailById(UserDetailsId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetUserDetailById?UserDetailsId="+UserDetailsId, this.httpOptions);
}
UpdateUserDetail(UserDetail): Observable<any> {
 return this.http.post<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/UpdateUserDetail",UserDetail, this.httpOptions);
}
SaveUserDetailImage(formdata,UserDetailsId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserDetail/SaveUserDetailImage?UserDetailsId="+UserDetailsId, formdata, null );
return this.http.request(uploadReq);
}
//UserSocialMedia
AddUserSocialMedia(UserSocialMedia): Observable<any> {
 return this.http.post<UserSocialMedia>( GlobalVariable.SERVICE_API_URL +"UserSocialMedia/AddUserSocialMedia",UserSocialMedia, this.httpOptions);
}
GetAllUserSocialMedia()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserSocialMedia/GetAllUserSocialMedia", this.httpOptions);
}
DeleteUserSocialMedia(UserSocialMediaId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserSocialMedia/DeleteUserSocialMedia?UserSocialMediaId="+UserSocialMediaId, this.httpOptions);
}
GetUserSocialMediaById(UserSocialMediaId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserSocialMedia/GetUserSocialMediaById?UserSocialMediaId="+UserSocialMediaId, this.httpOptions);
}
UpdateUserSocialMedia(UserSocialMedia): Observable<any> {
 return this.http.post<UserSocialMedia>( GlobalVariable.SERVICE_API_URL +"UserSocialMedia/UpdateUserSocialMedia",UserSocialMedia, this.httpOptions);
}
SaveUserSocialMediaImage(formdata,UserSocialMediaId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserSocialMedia/SaveUserSocialMediaImage?UserSocialMediaId="+UserSocialMediaId, formdata, null );
return this.http.request(uploadReq);
}
//EmergencyContact
AddEmergencyContact(EmergencyContact): Observable<any> {
 return this.http.post<EmergencyContact>( GlobalVariable.SERVICE_API_URL +"EmergencyContact/AddEmergencyContact",EmergencyContact, this.httpOptions);
}
GetAllEmergencyContact()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"EmergencyContact/GetAllEmergencyContact", this.httpOptions);
}
DeleteEmergencyContact(EmergencyContactId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"EmergencyContact/DeleteEmergencyContact?EmergencyContactId="+EmergencyContactId, this.httpOptions);
}
GetEmergencyContactById(EmergencyContactId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"EmergencyContact/GetEmergencyContactById?EmergencyContactId="+EmergencyContactId, this.httpOptions);
}
UpdateEmergencyContact(EmergencyContact): Observable<any> {
 return this.http.post<EmergencyContact>( GlobalVariable.SERVICE_API_URL +"EmergencyContact/UpdateEmergencyContact",EmergencyContact, this.httpOptions);
}
SaveEmergencyContactImage(formdata,EmergencyContactId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"EmergencyContact/SaveEmergencyContactImage?EmergencyContactId="+EmergencyContactId, formdata, null );
return this.http.request(uploadReq);
}
//AdmDestinations
AddAdmDestinations(AdmDestinations): Observable<any> {
 return this.http.post<AdmDestinations>( GlobalVariable.SERVICE_API_URL +"AdmDestinations/AddAdmDestinations",AdmDestinations, this.httpOptions);
}
GetAllAdmDestinations()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmDestinations/GetAllAdmDestinations", this.httpOptions);
}
DeleteAdmDestinations(AdmDestinationsId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmDestinations/DeleteAdmDestinations?AdmDestinationsId="+AdmDestinationsId, this.httpOptions);
}
GetAdmDestinationsById(AdmDestinationsId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmDestinations/GetAdmDestinationsById?AdmDestinationsId="+AdmDestinationsId, this.httpOptions);
}
UpdateAdmDestinations(AdmDestinations): Observable<any> {
 return this.http.post<AdmDestinations>( GlobalVariable.SERVICE_API_URL +"AdmDestinations/UpdateAdmDestinations",AdmDestinations, this.httpOptions);
}
SaveAdmDestinationsImage(formdata,AdmDestinationsId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmDestinations/SaveAdmDestinationsImage?AdmDestinationsId="+AdmDestinationsId, formdata, null );
return this.http.request(uploadReq);
}
//DestinationGallery
AddDestinationGallery(DestinationGallery): Observable<any> {
 return this.http.post<DestinationGallery>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/AddDestinationGallery",DestinationGallery, this.httpOptions);
}
GetAllDestinationGallery()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/GetAllDestinationGallery", this.httpOptions);
}
DeleteDestinationGallery(DestinationGalleryId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/DeleteDestinationGallery?DestinationGalleryId="+DestinationGalleryId, this.httpOptions);
}
GetDestinationGalleryById(DestinationGalleryId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/GetDestinationGalleryById?DestinationGalleryId="+DestinationGalleryId, this.httpOptions);
}
UpdateDestinationGallery(DestinationGallery): Observable<any> {
 return this.http.post<DestinationGallery>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/UpdateDestinationGallery",DestinationGallery, this.httpOptions);
}
SaveDestinationGalleryImage(formdata,DestinationGalleryId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"DestinationGallery/SaveDestinationGalleryImage?DestinationGalleryId="+DestinationGalleryId, formdata, null );
return this.http.request(uploadReq);
}
//AdmActivities
AddAdmActivities(AdmActivities): Observable<any> {
 return this.http.post<AdmActivities>( GlobalVariable.SERVICE_API_URL +"AdmActivities/AddAdmActivities",AdmActivities, this.httpOptions);
}
GetAllAdmActivities()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmActivities/GetAllAdmActivities", this.httpOptions);
}
DeleteAdmActivities(AdmActivitiesId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmActivities/DeleteAdmActivities?AdmActivitiesId="+AdmActivitiesId, this.httpOptions);
}
GetAdmActivitiesById(AdmActivitiesId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmActivities/GetAdmActivitiesById?AdmActivitiesId="+AdmActivitiesId, this.httpOptions);
}
UpdateAdmActivities(AdmActivities): Observable<any> {
 return this.http.post<AdmActivities>( GlobalVariable.SERVICE_API_URL +"AdmActivities/UpdateAdmActivities",AdmActivities, this.httpOptions);
}
SaveAdmActivitiesImage(formdata,AdmActivitiesId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmActivities/SaveAdmActivitiesImage?AdmActivitiesId="+AdmActivitiesId, formdata, null );
return this.http.request(uploadReq);
}

//AdmActivitiesMaster
AddAdmActivitiesMaster(AdmActivitiesMaster): Observable<any> {
    return this.http.post<AdmActivities>( GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/AddAdmActivitiesMaster",AdmActivitiesMaster, this.httpOptions);
   }
   GetAllAdmActivitiesMaster()  {
       return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/GetAllAdmActivitiesMaster", this.httpOptions);
   }
   DeleteAdmActivitiesMaster(AdmActivitiesMasterId): Observable<any> {
       return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/DeleteAdmActivitiesMaster?AdmActivitiesMasterId="+AdmActivitiesMasterId, this.httpOptions);
   }
   GetAdmActivitiesMasterById(AdmActivitiesMasterId): Observable<any> {
       return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/GetAdmActivitiesMasterById?AdmActivitiesMasterId="+AdmActivitiesMasterId, this.httpOptions);
   }
   
   
   UpdateAdmActivitiesMaster(AdmActivitiesMaster): Observable<any> {
    return this.http.post<AdmActivities>( GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/UpdateAdmActivitiesMaster",AdmActivitiesMaster, this.httpOptions);
   }
   SaveAdmActivitiesMasterImage(formdata,AdmActivitiesMasterId): Observable<any> {
   const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmActivitiesMaster/SaveAdmActivitiesMasterImage?AdmActivitiesMasterId="+AdmActivitiesMasterId, formdata, null );
   return this.http.request(uploadReq);
   }






//AdmBlog
AddAdmBlog(AdmBlog): Observable<any> {
 return this.http.post<AdmBlog>( GlobalVariable.SERVICE_API_URL +"AdmBlog/AddAdmBlog",AdmBlog, this.httpOptions);
}
GetAllAdmBlog()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmBlog/GetAllAdmBlog", this.httpOptions);
}
DeleteAdmBlog(AdmBlogId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmBlog/DeleteAdmBlog?AdmBlogId="+AdmBlogId, this.httpOptions);
}
GetAdmBlogById(AdmBlogId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmBlog/GetAdmBlogById?AdmBlogId="+AdmBlogId, this.httpOptions);
}
UpdateAdmBlog(AdmBlog): Observable<any> {
 return this.http.post<AdmBlog>( GlobalVariable.SERVICE_API_URL +"AdmBlog/UpdateAdmBlog",AdmBlog, this.httpOptions);
}
SaveAdmBlogImage(formdata,AdmBlogId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmBlog/SaveAdmBlogImage?AdmBlogId="+AdmBlogId, formdata, null );
return this.http.request(uploadReq);
}
//Trip
AddTrip(Trip): Observable<any> {
 return this.http.post<Trip>( GlobalVariable.SERVICE_API_URL +"Trip/AddTrip",Trip, this.httpOptions);
}
GetAllTrip()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Trip/GetAllTrip", this.httpOptions);
}
DeleteTrip(TripId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Trip/DeleteTrip?TripId="+TripId, this.httpOptions);
}
GetTripById(TripId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Trip/GetTripById?TripId="+TripId, this.httpOptions);
}
UpdateTrip(Trip): Observable<any> {
 return this.http.post<Trip>( GlobalVariable.SERVICE_API_URL +"Trip/UpdateTrip",Trip, this.httpOptions);
}
SaveTripImage(formdata,TripId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Trip/SaveTripImage?TripId="+TripId, formdata, null );
return this.http.request(uploadReq);
}
//TripType
AddTripType(TripType): Observable<any> {
 return this.http.post<TripType>( GlobalVariable.SERVICE_API_URL +"TripType/AddTripType",TripType, this.httpOptions);
}
GetAllTripType()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"TripType/GetAllTripType", this.httpOptions);
}
DeleteTripType(TripTypeId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"TripType/DeleteTripType?TripTypeId="+TripTypeId, this.httpOptions);
}
GetTripTypeById(TripTypeId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"TripType/GetTripTypeById?TripTypeId="+TripTypeId, this.httpOptions);
}
UpdateTripType(TripType): Observable<any> {
 return this.http.post<TripType>( GlobalVariable.SERVICE_API_URL +"TripType/UpdateTripType",TripType, this.httpOptions);
}
SaveTripTypeImage(formdata,TripTypeId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"TripType/SaveTripTypeImage?TripTypeId="+TripTypeId, formdata, null );
return this.http.request(uploadReq);
}
//Feedback
AddFeedback(Feedback): Observable<any> {
 return this.http.post<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/AddFeedback",Feedback, this.httpOptions);
}
GetAllFeedback()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Feedback/GetAllFeedback", this.httpOptions);
}
DeleteFeedback(FeedbackId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Feedback/DeleteFeedback?FeedbackId="+FeedbackId, this.httpOptions);
}
GetFeedbackById(FeedbackId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Feedback/GetFeedbackById?FeedbackId="+FeedbackId, this.httpOptions);
}
UpdateFeedback(Feedback): Observable<any> {
 return this.http.post<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/UpdateFeedback",Feedback, this.httpOptions);
}
SaveFeedbackImage(formdata,FeedbackId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Feedback/SaveFeedbackImage?FeedbackId="+FeedbackId, formdata, null );
return this.http.request(uploadReq);
}
//Gallery
AddGallery(Gallery): Observable<any> {
 return this.http.post<Gallery>( GlobalVariable.SERVICE_API_URL +"Gallery/AddGallery",Gallery, this.httpOptions);
}
GetAllGallery()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Gallery/GetAllGallery", this.httpOptions);
}
DeleteGallery(GalleryId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Gallery/DeleteGallery?GalleryId="+GalleryId, this.httpOptions);
}
GetGalleryById(GalleryId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Gallery/GetGalleryById?GalleryId="+GalleryId, this.httpOptions);
}
UpdateGallery(Gallery): Observable<any> {
 return this.http.post<Gallery>( GlobalVariable.SERVICE_API_URL +"Gallery/UpdateGallery",Gallery, this.httpOptions);
}
SaveGalleryImage(formdata,GalleryId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Gallery/SaveGalleryImage?GalleryId="+GalleryId, formdata, null );
return this.http.request(uploadReq);
}
//ServiceTable
AddServiceTable(ServiceTable): Observable<any> {
 return this.http.post<ServiceTable>( GlobalVariable.SERVICE_API_URL +"ServiceTable/AddServiceTable",ServiceTable, this.httpOptions);
}
GetAllServiceTable()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ServiceTable/GetAllServiceTable", this.httpOptions);
}
DeleteServiceTable(ServiceTableId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ServiceTable/DeleteServiceTable?ServiceTableId="+ServiceTableId, this.httpOptions);
}
GetServiceTableById(ServiceTableId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ServiceTable/GetServiceTableById?ServiceTableId="+ServiceTableId, this.httpOptions);
}
UpdateServiceTable(ServiceTable): Observable<any> {
 return this.http.post<ServiceTable>( GlobalVariable.SERVICE_API_URL +"ServiceTable/UpdateServiceTable",ServiceTable, this.httpOptions);
}
SaveServiceTableImage(formdata,ServiceTableId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"ServiceTable/SaveServiceTableImage?ServiceTableId="+ServiceTableId, formdata, null );
return this.http.request(uploadReq);
}
//AdmVendor
AddAdmVendor(AdmVendor): Observable<any> {
 return this.http.post<AdmVendor>( GlobalVariable.SERVICE_API_URL +"AdmVendor/AddAdmVendor",AdmVendor, this.httpOptions);
}
GetAllAdmVendor()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmVendor/GetAllAdmVendor", this.httpOptions);
}
DeleteAdmVendor(AdmVendorId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmVendor/DeleteAdmVendor?AdmVendorId="+AdmVendorId, this.httpOptions);
}
GetAdmVendorById(AdmVendorId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmVendor/GetAdmVendorById?AdmVendorId="+AdmVendorId, this.httpOptions);
}
UpdateAdmVendor(AdmVendor): Observable<any> {
 return this.http.post<AdmVendor>( GlobalVariable.SERVICE_API_URL +"AdmVendor/UpdateAdmVendor",AdmVendor, this.httpOptions);
}
SaveAdmVendorImage(formdata,AdmVendorId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmVendor/SaveAdmVendorImage?AdmVendorId="+AdmVendorId, formdata, null );
return this.http.request(uploadReq);
}
//VendorService
AddVendorService(VendorService): Observable<any> {
 return this.http.post<VendorService>( GlobalVariable.SERVICE_API_URL +"VendorService/AddVendorService",VendorService, this.httpOptions);
}
GetAllVendorService()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"VendorService/GetAllVendorService", this.httpOptions);
}
DeleteVendorService(VendorServiceId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"VendorService/DeleteVendorService?VendorServiceId="+VendorServiceId, this.httpOptions);
}
GetVendorServiceById(VendorServiceId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"VendorService/GetVendorServiceById?VendorServiceId="+VendorServiceId, this.httpOptions);
}
UpdateVendorService(VendorService): Observable<any> {
 return this.http.post<VendorService>( GlobalVariable.SERVICE_API_URL +"VendorService/UpdateVendorService",VendorService, this.httpOptions);
}
SaveVendorServiceImage(formdata,VendorServiceId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"VendorService/SaveVendorServiceImage?VendorServiceId="+VendorServiceId, formdata, null );
return this.http.request(uploadReq);
}
//Alert
AddAlert(Alert): Observable<any> {
 return this.http.post<Alert>( GlobalVariable.SERVICE_API_URL +"Alert/AddAlert",Alert, this.httpOptions);
}
GetAllAlert()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Alert/GetAllAlert", this.httpOptions);
}
DeleteAlert(AlertId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Alert/DeleteAlert?AlertId="+AlertId, this.httpOptions);
}
GetAlertById(AlertId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Alert/GetAlertById?AlertId="+AlertId, this.httpOptions);
}
UpdateAlert(Alert): Observable<any> {
 return this.http.post<Alert>( GlobalVariable.SERVICE_API_URL +"Alert/UpdateAlert",Alert, this.httpOptions);
}
SaveAlertImage(formdata,AlertId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Alert/SaveAlertImage?AlertId="+AlertId, formdata, null );
return this.http.request(uploadReq);
}
//Booking
AddBooking(Booking): Observable<any> {
 return this.http.post<Booking>( GlobalVariable.SERVICE_API_URL +"Booking/AddBooking",Booking, this.httpOptions);
}
GetAllBooking()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetAllBooking", this.httpOptions);
}
DeleteBooking(BookingId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Booking/DeleteBooking?BookingId="+BookingId, this.httpOptions);
}
GetBookingById(BookingId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetBookingById?BookingId="+BookingId, this.httpOptions);
}
UpdateBooking(Booking): Observable<any> {
 return this.http.post<Booking>( GlobalVariable.SERVICE_API_URL +"Booking/UpdateBooking",Booking, this.httpOptions);
}
SaveBookingImage(formdata,BookingId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Booking/SaveBookingImage?BookingId="+BookingId, formdata, null );
return this.http.request(uploadReq);
}
//AdmOffer
AddAdmOffer(AdmOffer): Observable<any> {
    debugger
 return this.http.post<AdmOffer>( GlobalVariable.SERVICE_API_URL +"AdmOffer/AddAdmOffer",AdmOffer, this.httpOptions);
}
GetAllAdmOffer()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmOffer/GetAllAdmOffer", this.httpOptions);
}
DeleteAdmOffer(AdmOfferId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmOffer/DeleteAdmOffer?AdmOfferId="+AdmOfferId, this.httpOptions);
}
GetAdmOfferById(AdmOfferId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmOffer/GetAdmOfferById?AdmOfferId="+AdmOfferId, this.httpOptions);
}
UpdateAdmOffer(AdmOffer): Observable<any> {
 return this.http.post<AdmOffer>( GlobalVariable.SERVICE_API_URL +"AdmOffer/UpdateAdmOffer",AdmOffer, this.httpOptions);
}
SaveAdmOfferImage(formdata,AdmOfferId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmOffer/SaveAdmOfferImage?AdmOfferId="+AdmOfferId, formdata, null );
return this.http.request(uploadReq);
}
//AdmTransType
AddAdmTransType(AdmTransType): Observable<any> {
 return this.http.post<AdmTransType>( GlobalVariable.SERVICE_API_URL +"AdmTransType/AddAdmTransType",AdmTransType, this.httpOptions);
}
GetAllAdmTransType()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmTransType/GetAllAdmTransType", this.httpOptions);
}
DeleteAdmTransType(AdmTransTypeId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmTransType/DeleteAdmTransType?AdmTransTypeId="+AdmTransTypeId, this.httpOptions);
}
GetAdmTransTypeById(AdmTransTypeId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmTransType/GetAdmTransTypeById?AdmTransTypeId="+AdmTransTypeId, this.httpOptions);
}
UpdateAdmTransType(AdmTransType): Observable<any> {
 return this.http.post<AdmTransType>( GlobalVariable.SERVICE_API_URL +"AdmTransType/UpdateAdmTransType",AdmTransType, this.httpOptions);
}
SaveAdmTransTypeImage(formdata,AdmTransTypeId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmTransType/SaveAdmTransTypeImage?AdmTransTypeId="+AdmTransTypeId, formdata, null );
return this.http.request(uploadReq);
}
//Hotel
AddHotel(Hotel): Observable<any> {
 return this.http.post<Hotel>( GlobalVariable.SERVICE_API_URL +"Hotel/AddHotel",Hotel, this.httpOptions);
}
GetAllHotel()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Hotel/GetAllHotel", this.httpOptions);
}
DeleteHotel(HotelId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Hotel/DeleteHotel?HotelId="+HotelId, this.httpOptions);
}
GetHotelById(HotelId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Hotel/GetHotelById?HotelId="+HotelId, this.httpOptions);
}
UpdateHotel(Hotel): Observable<any> {
 return this.http.post<Hotel>( GlobalVariable.SERVICE_API_URL +"Hotel/UpdateHotel",Hotel, this.httpOptions);
}
SaveHotelImage(formdata,HotelId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Hotel/SaveHotelImage?HotelId="+HotelId, formdata, null );
return this.http.request(uploadReq);
}
//AdmRoleMaster
AddAdmRoleMaster(AdmRoleMaster): Observable<any> {
 return this.http.post<AdmRoleMaster>( GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/AddAdmRoleMaster",AdmRoleMaster, this.httpOptions);
}
GetAllAdmRoleMaster()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/GetAllAdmRoleMaster", this.httpOptions);
}
DeleteAdmRoleMaster(AdmRoleMasterId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/DeleteAdmRoleMaster?AdmRoleMasterId="+AdmRoleMasterId, this.httpOptions);
}
GetAdmRoleMasterById(AdmRoleMasterId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/GetAdmRoleMasterById?AdmRoleMasterId="+AdmRoleMasterId, this.httpOptions);
}
UpdateAdmRoleMaster(AdmRoleMaster): Observable<any> {
 return this.http.post<AdmRoleMaster>( GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/UpdateAdmRoleMaster",AdmRoleMaster, this.httpOptions);
}
SaveAdmRoleMasterImage(formdata,AdmRoleMasterId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmRoleMaster/SaveAdmRoleMasterImage?AdmRoleMasterId="+AdmRoleMasterId, formdata, null );
return this.http.request(uploadReq);
}
//UserRole
AddUserRole(UserRole): Observable<any> {
 return this.http.post<UserRole>( GlobalVariable.SERVICE_API_URL +"UserRole/AddUserRole",UserRole, this.httpOptions);
}
GetAllUserRole()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserRole/GetAllUserRole", this.httpOptions);
}
DeleteUserRole(UserRoleId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserRole/DeleteUserRole?UserRoleId="+UserRoleId, this.httpOptions);
}
GetUserRoleById(UserRoleId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserRole/GetUserRoleById?UserRoleId="+UserRoleId, this.httpOptions);
}
UpdateUserRole(UserRole): Observable<any> {
 return this.http.post<UserRole>( GlobalVariable.SERVICE_API_URL +"UserRole/UpdateUserRole",UserRole, this.httpOptions);
}
SaveUserRoleImage(formdata,UserRoleId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserRole/SaveUserRoleImage?UserRoleId="+UserRoleId, formdata, null );
return this.http.request(uploadReq);
}
//AdmRegistration
AddAdmRegistration(AdmRegistration): Observable<any> {
 return this.http.post<AdmRegistration>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/AddAdmRegistration",AdmRegistration, this.httpOptions);
}
GetAllAdmRegistration()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/GetAllAdmRegistration", this.httpOptions);
}
DeleteAdmRegistration(AdmRegistrationId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/DeleteAdmRegistration?AdmRegistrationId="+AdmRegistrationId, this.httpOptions);
}
GetAdmRegistrationById(AdmRegistrationId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/GetAdmRegistrationById?AdmRegistrationId="+AdmRegistrationId, this.httpOptions);
}
UpdateAdmRegistration(AdmRegistration): Observable<any> {
 return this.http.post<AdmRegistration>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/UpdateAdmRegistration",AdmRegistration, this.httpOptions);
}
SaveAdmRegistrationImage(formdata,AdmRegistrationId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmRegistration/SaveAdmRegistrationImage?AdmRegistrationId="+AdmRegistrationId, formdata, null );
return this.http.request(uploadReq);
}

SendOTPEmailc(Email){ debugger
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL +"AdmRegistration/SendOTPEmailc?Email="+Email,this.httpOptions);
  }
  
Loginc(Email, Password): Observable<any> {
    debugger
  return this.http.get<Loginc>(GlobalVariable.SERVICE_API_URL+"AdmRegistration/Loginc?Email="+Email+"&Password="+Password);
  }
  
  
  GetAdmRegistrationByEmail(Email){
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmRegistration/GetAdmRegistrationByEmail?Email="+Email,this.httpOptions);
  }






//AdmTravlisInfo
AddAdmTravlisInfo(AdmTravlisInfo): Observable<any> {
 return this.http.post<AdmTravlisInfo>( GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/AddAdmTravlisInfo",AdmTravlisInfo, this.httpOptions);
}
GetAllAdmTravlisInfo()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/GetAllAdmTravlisInfo", this.httpOptions);
}
DeleteAdmTravlisInfo(AdmTravlisInfoId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/DeleteAdmTravlisInfo?AdmTravlisInfoId="+AdmTravlisInfoId, this.httpOptions);
}
GetAdmTravlisInfoById(AdmTravlisInfoId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/GetAdmTravlisInfoById?AdmTravlisInfoId="+AdmTravlisInfoId, this.httpOptions);
}
UpdateAdmTravlisInfo(AdmTravlisInfo): Observable<any> {
 return this.http.post<AdmTravlisInfo>( GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/UpdateAdmTravlisInfo",AdmTravlisInfo, this.httpOptions);
}
SaveAdmTravlisInfoImage(formdata,AdmTravlisInfoId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmTravlisInfo/SaveAdmTravlisInfoImage?AdmTravlisInfoId="+AdmTravlisInfoId, formdata, null );
return this.http.request(uploadReq);
}
//AdmCityMaster
AddAdmCityMaster(AdmCityMaster): Observable<any> {
 return this.http.post<AdmCityMaster>( GlobalVariable.SERVICE_API_URL +"AdmCityMaster/AddAdmCityMaster",AdmCityMaster, this.httpOptions);
}
GetAllAdmCityMaster()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmCityMaster/GetAllAdmCityMaster", this.httpOptions);
}
DeleteAdmCityMaster(AdmCityMasterId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmCityMaster/DeleteAdmCityMaster?AdmCityMasterId="+AdmCityMasterId, this.httpOptions);
}
GetAdmCityMasterById(AdmCityMasterId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmCityMaster/GetAdmCityMasterById?AdmCityMasterId="+AdmCityMasterId, this.httpOptions);
}
UpdateAdmCityMaster(AdmCityMaster): Observable<any> {
 return this.http.post<AdmCityMaster>( GlobalVariable.SERVICE_API_URL +"AdmCityMaster/UpdateAdmCityMaster",AdmCityMaster, this.httpOptions);
}
SaveAdmCityMasterImage(formdata,AdmCityMasterId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmCityMaster/SaveAdmCityMasterImage?AdmCityMasterId="+AdmCityMasterId, formdata, null );
return this.http.request(uploadReq);
}
//AdmCountryMaster
AddAdmCountryMaster(AdmCountryMaster): Observable<any> {
 return this.http.post<AdmCountryMaster>( GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/AddAdmCountryMaster",AdmCountryMaster, this.httpOptions);
}
GetAllAdmCountryMaster()  {
    debugger
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/GetAllAdmCountryMaster", this.httpOptions);
}
DeleteAdmCountryMaster(AdmCountryMasterId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/DeleteAdmCountryMaster?AdmCountryMasterId="+AdmCountryMasterId, this.httpOptions);
}
GetAdmCountryMasterById(AdmCountryMasterId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/GetCountryMasterById?AdmCountryMasterId="+AdmCountryMasterId, this.httpOptions);
}
UpdateAdmCountryMaster(AdmCountryMaster): Observable<any> {
 return this.http.post<AdmCountryMaster>( GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/UpdateAdmCountryMaster",AdmCountryMaster, this.httpOptions);
}
SaveAdmCountryMasterImage(formdata,AdmCountryMasterId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmCountryMaster/SaveAdmCountryMasterImage?AdmCountryMasterId="+AdmCountryMasterId, formdata, null );
return this.http.request(uploadReq);
}
//AdmStateMaster
AddAdmStateMaster(AdmStateMaster): Observable<any> {
 return this.http.post<AdmStateMaster>( GlobalVariable.SERVICE_API_URL +"AdmStateMaster/AddAdmStateMaster",AdmStateMaster, this.httpOptions);
}
GetAllAdmStateMaster()  {
    debugger
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmStateMaster/GetAllAdmStateMaster", this.httpOptions);
}
DeleteAdmStateMaster(AdmStateMasterId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdmStateMaster/DeleteAdmStateMaster?AdmStateMasterId="+AdmStateMasterId, this.httpOptions);
}
GetAdmStateMasterById(AdmStateMasterId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdmStateMaster/GetAdmStateMasterById?AdmStateMasterId="+AdmStateMasterId, this.httpOptions);
}
UpdateAdmStateMaster(AdmStateMaster): Observable<any> {
 return this.http.post<AdmStateMaster>( GlobalVariable.SERVICE_API_URL +"AdmStateMaster/UpdateAdmStateMaster",AdmStateMaster, this.httpOptions);
}
SaveAdmStateMasterImage(formdata,AdmStateMasterId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"AdmStateMaster/SaveAdmStateMasterImage?AdmStateMasterId="+AdmStateMasterId, formdata, null );
return this.http.request(uploadReq);
}
}
