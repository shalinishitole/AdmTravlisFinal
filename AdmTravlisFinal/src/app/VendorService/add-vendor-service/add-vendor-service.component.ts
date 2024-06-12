//ng g c AddVendorService
import { HttpClient } from '@angular/common/http';
import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { NgForm } from '@angular/forms';
import { AdmVendor,ServiceTable,AdmDestinations,VendorService } from '../../Class';
@Component({
selector:   'app-add-vendor-service',
templateUrl:   './add-vendor-service.component.html',
styleUrls:   ['./add-vendor-service.component.scss']
})
export class AddVendorServiceComponent {
@ViewChild('VendorServiceForm') form: NgForm;
vendorService = new   VendorService();
admVendor = new AdmVendor();
serviceTable = new ServiceTable();
admDestinations = new AdmDestinations();
constructor(private router: Router,
private http: HttpClient,
private service: WebService) {
this.vendorService = new VendorService();
this.vendorService.admVendor = new AdmVendor();
this.vendorService.serviceTable = new ServiceTable();
this.vendorService.admDestinations = new AdmDestinations();
}
OnSubmit() {
console.log("vendorService",this.vendorService);
this.service.AddVendorService(this.vendorService).subscribe((result) => {
if (result > 0) {
alert('Saved Successfully.');
}
else {
alert ('Something went wrong! Please try again.')
}
});
this.form.resetForm();
}
}
