import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmTravlisInfo } from 'src/app/Class';

@Component({
  selector: 'app-adm-travlis-info-list',
  templateUrl: './adm-travlis-info-list.component.html',
  styleUrls: ['./adm-travlis-info-list.component.scss']
})
export class AdmTravlisInfoListComponent {
  AdmTravlisInfoList: AdmTravlisInfo[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmTravlisInfo();
  }

  GetAllAdmTravlisInfo(): void {
    this.service.GetAllAdmTravlisInfo().subscribe(data => {
      this.AdmTravlisInfoList = data;
    });
  }

  Edit(AdmTravlisInfoId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmTravlisInfo/', AdmTravlisInfoId]);
  }

  View(AdmTravlisInfoId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', AdmTravlisInfoId]);
  }

  Delete(AdmTravlisInfoId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmTravlisInfo(AdmTravlisInfoId).subscribe(() => {
        this.GetAllAdmTravlisInfo(); // Refresh the list after deletion
      });
    }
  }

}




