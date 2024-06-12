import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmCityMaster } from 'src/app/Class';

@Component({
  selector: 'app-adm-city-master-list',
  templateUrl: './adm-city-master-list.component.html',
  styleUrls: ['./adm-city-master-list.component.scss']
})
export class AdmCityMasterListComponent {
  AdmCityMasterList: AdmCityMaster[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmCityMaster();
  }

  GetAllAdmCityMaster(): void {
    this.service.GetAllAdmCityMaster().subscribe(data => {
      this.AdmCityMasterList = data;
    });
  }

  Edit(AdmCityMasterId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmCityMaster/', AdmCityMasterId]);
  }

  View(AdmCityMasterId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', AdmCityMasterId]);
  }

  Delete(AdmCityMasterId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmCityMaster(AdmCityMasterId).subscribe(() => {
        this.GetAllAdmCityMaster(); // Refresh the list after deletion
      });
    }
  }

}


