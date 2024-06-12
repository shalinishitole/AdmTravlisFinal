//ng g c VendorService-list
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../Service';
import { GlobalVariable } from 'src/app/Global';
@Component({
selector:   'app-vendor-service-list
templateUrl:   './vendor-service-listcomponent.html'
styleUrls:   ['./vendor-service-list.component.scss']
})
export class VendorServiceListComponent {
vendorServiceList: any[];
constructor(private router: Router, private http: HttpClient, private service: WebService) {
this.vendorServiceList = []
this.GetAllvendorService(); }
Delete() {
let confirmAction = confirm("Are you sure you want to delete?+com+);
if (confirmAction) {
this.service.DeleteVendorService().subscribe(result => {
if (result == "Success") {
this.vendorServiceList = this.vendorServiceList.filter(
(item) => item.!= );
alert("Deleted Successfully");
this.GetAllVendorService();
}
  });
  } else {
alert("Action canceled");
}
}
