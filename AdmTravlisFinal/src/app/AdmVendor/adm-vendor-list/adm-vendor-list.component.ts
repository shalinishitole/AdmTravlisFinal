import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { AdmVendor } from 'src/app/Class';

@Component({
  selector: 'app-adm-vendor-list',
  templateUrl: './adm-vendor-list.component.html',
  styleUrls: ['./adm-vendor-list.component.scss']
})
export class AdmVendorListComponent implements OnInit {
  admVendors: AdmVendor[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.getAllAdmVendors();
  }

  getAllAdmVendors(): void {
    this.service.GetAllAdmVendor().subscribe(data => {
      this.admVendors = data;
    });
  }

  editAdmVendor(AdmVendorId: number): void {
    this.router.navigate(['/UpdateAdmVendor', AdmVendorId]);
  }

  viewAdmVendor(AdmVendorId: number): void {
    this.router.navigate(['/view-adm-vendor', AdmVendorId]);
  }

  deleteAdmVendor(AdmVendorId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmVendor(AdmVendorId).subscribe(() => {
        this.getAllAdmVendors();
      });
    }
  }
}
