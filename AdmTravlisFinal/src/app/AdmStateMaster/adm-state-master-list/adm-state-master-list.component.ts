import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmStateMaster } from 'src/app/Class';

@Component({
  selector: 'app-adm-state-master-list',
  templateUrl: './adm-state-master-list.component.html',
  styleUrls: ['./adm-state-master-list.component.scss']
})
export class AdmStateMasterListComponent {
  AdmStateMasterList: AdmStateMaster[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmStateMaster();
  }

  GetAllAdmStateMaster(): void {
    this.service.GetAllAdmStateMaster().subscribe(data => {
      this.AdmStateMasterList = data;
    });
  }

  Edit(AdmStateMasterId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmStateMaster/', AdmStateMasterId]);
  }

  View(AdmStateMasterId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-state-master', AdmStateMasterId]);
  }

  Delete(AdmStateMasterId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmStateMaster(AdmStateMasterId).subscribe(() => {
        this.GetAllAdmStateMaster(); // Refresh the list after deletion
      });
    }
  }

}
