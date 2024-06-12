export class Registration{
    RegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OtpNo: string;
    DefaultRole: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class Login {
        Email: string;
        Password: string;
    }







    export class UserDetail{
    UserDetailsId: number;
    registration: Registration
    RegistrationId: number;
    Contact: string;
    Tagline: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    Gender: string;
    Status: string;
    admCountryMaster: AdmCountryMaster
    AdmCountryMasterId: number;
    admStateMaster: AdmStateMaster
    AdmStateMasterId: number;
    admCityMaster: AdmCityMaster
    AdmCityMasterId: number;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class UserSocialMedia{
    UserSocialMediaId: number;
    registration: Registration
    RegistrationId: number;
    Instagram: string;
    Facebook: string;
    Twiter: string;
    LinkedIn: string;
    YouTube: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class EmergencyContact{
    EmergencyContactId: number;
    registration: Registration
    RegistrationId: number;
    Name: string;
    Relationship: string;
    Contact: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class AdmDestinations{
    AdmDestinationsId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Status: string;
    admCountryMaster: AdmCountryMaster
    AdmCountryMasterId: number;
    admStateMaster: AdmStateMaster
    AdmStateMasterId: number;
    admCityMaster: AdmCityMaster
    AdmCityMasterId: number;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class DestinationGallery{
    DestinationGalleryId: number;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    Title: string;
    SubTitle: string;
    Status: string;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class AdmActivities{
    AdmActivitiesId: number;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    Title: string;
    SubTitle: string;
    Photo: any;
    Description: string;
    Amount: number;
    vendorService: VendorService
    VendorServiceId: number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class AdmBlog{
    AdmBlogId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Content: string;
    Status: string;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class Trip{
    TripId: number;
    registration: Registration
    RegistrationId: number;
    admVendor: AdmVendor
    AdmVendorId: number;
    Source: string;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    Date: string;
    tripType: TripType
    TripTypeId: number;
    Status: string;
    Budget: number;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class TripType{
    TripTypeId: number;
    Title: string;
    SubTitle: string;
    Icon: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class Feedback{
    FeedbackId: number;
    registration: Registration
    RegistrationId: number;
    admVendor: AdmVendor
    AdmVendorId: number;
    FeedbackText: string;
    Rating: number;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class Gallery{
    GalleryId: number;
    Title: string;
    SubTitle: string;
    registration: Registration
    RegistrationId: number;
    trip: Trip
    TripId: number;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class ServiceTable{
    ServiceTableId: number;
    Title: string;
    SubTitle: string;
    vendorService: VendorService
    VendorServiceId: number;
    Photo: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class AdmVendor{
    AdmVendorId: number;
    registration: Registration
    RegistrationId: number;
    Name: string;
    SubTitle: string;
    Description: string;
    Photo: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class VendorService{
    VendorServiceId: number;
    admVendor: AdmVendor
    AdmVendorId: number;
    serviceTable: ServiceTable
    ServiceTableId: number;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    ServiceCost: number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class Alert{
    AlertId: number;
    registration: Registration
    RegistrationId: number;
    admDestinations: AdmDestinations
    AdmDestinationsId: number;
    AlertMessage: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class Booking{
    BookingId: number;
    registration: Registration
    RegistrationId: number;
    vendorService: VendorService
    VendorServiceId: number;
    BookingDate: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class AdmOffer{
    AdmOfferId: number;
    Tittle: string;
    Subtitle: string;
    DiscountInPerecent: number;
    AdmOfferImage: string;
    Status: string;
    StartDate: string;
    EndDate: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class AdmTransType{
    AdmTransTypeId: number;
    Title: string;
    Status: string;
    AdmTransTypeImage: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }
    export class Hotel{
    HotelId: number;
    vendorService: VendorService
    VendorServiceId: number;
    Title: string;
    Address: string;
    ContactNo: string;
    NoOfRoom: string;
    NoOfNight: string;
    CheckIn: string;
    CheckOut: string;
    Amount: number;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class AdmRoleMaster{
    AdmRoleMasterId: number;
    RoleName: string;
    DisplayRole: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    Status: string;
    }
    export class UserRole{
    UserRoleId: number;
    admRoleMaster: AdmRoleMaster
    AdmRoleMasterId: number;
    registration: Registration
    RegistrationId: number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
      
    }
    export class AdmRegistration{
    AdmRegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    DefaultRole: string;
    EmailStatus: string;
    OtpNo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedDate: string;
    UpdatedBy: string;
    }

    export class Loginc {
      Email: string;
      Password: string;
  }
  





    export class AdmTravlisInfo{
    AdmTravlisInfoId: number;
    Address: string;
    Contact: string;
    Email: string;
    SiteName: string;
    WebsitLink: string;
    Logo: string;
    Gmail: string;
    LinkedIn: string;
    Twitter: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
   
    export class AdmActivitiesMaster{
      AdmActivitiesMasterId: number;
      Title: string;
      SubTitle: string;
      Photo: string;
      Description: string;
      Amount: number;
      Status: string;
      CreatedDate: string;
      CreatedBy: string;
      UpdatedDate: string;
      UpdatedBy: string;
        admDestinations: AdmDestinations;
      }




      export class AdmCityMaster{
        AdmCityMasterId: number;
        admStateMaster: AdmStateMaster
        AdmStateMasterId: number;
        admCountryMaster: AdmCountryMaster
        AdmCountryMasterId: number;
        CityDescription: string;
        Status: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string;
        }
        export class AdmCountryMaster{
        AdmCountryMasterId: number;
        CountryDescription: string;
        Status: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string;
        }
        export class AdmStateMaster{
        AdmStateMasterId: number;
        admCountryMaster: AdmCountryMaster
        AdmCountryMasterId: number;
        StateDescription: string;
        Status: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string;
        }
        

  