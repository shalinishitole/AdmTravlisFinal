import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmCountryMaster } from 'src/app/Class';

@Component({
  selector: 'app-adm-country-master-list',
  templateUrl: './adm-country-master-list.component.html',
  styleUrls: ['./adm-country-master-list.component.scss']
})
export class AdmCountryMasterListComponent {
  AdmCountryMasterList: AdmCountryMaster[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.getAdmCountryMasters();
  }

  getAdmCountryMasters(): void {
    this.service.GetAllAdmCountryMaster().subscribe(data => {
      this.AdmCountryMasterList = data;
    });
  }

  Edit(AdmCountryMasterId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmCountryMaster/', AdmCountryMasterId]);
  }

  View(AdmCountryMasterId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-country-master', AdmCountryMasterId]);
  }

  Delete(AdmCountryMasterId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmCountryMaster(AdmCountryMasterId).subscribe(() => {
        this.getAdmCountryMasters(); // Refresh the list after deletion
      });
    }
  }

}
