import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmRoleMaster } from 'src/app/Class';

@Component({
  selector: 'app-adm-role-master-list',
  templateUrl: './adm-role-master-list.component.html',
  styleUrls: ['./adm-role-master-list.component.scss']
})
export class AdmRoleMasterListComponent {
  AdmRoleMasterList: AdmRoleMaster[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmRoleMaster();
  }

  GetAllAdmRoleMaster(): void {
    this.service.GetAllAdmRoleMaster().subscribe(data => {
      this.AdmRoleMasterList = data;
    });
  }

  Edit(AdmRoleMasterId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmRoleMaster/', AdmRoleMasterId]);
  }

  View(AdmRoleMasterId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', AdmRoleMasterId]);
  }

  Delete(AdmRoleMasterId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmRoleMaster(AdmRoleMasterId).subscribe(() => {
        this.GetAllAdmRoleMaster(); // Refresh the list after deletion
      });
    }
  }

}
