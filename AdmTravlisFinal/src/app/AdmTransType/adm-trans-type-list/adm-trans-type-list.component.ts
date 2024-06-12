import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmTransType } from 'src/app/Class';


@Component({
  selector: 'app-adm-trans-type-list',
  templateUrl: './adm-trans-type-list.component.html',
  styleUrls: ['./adm-trans-type-list.component.scss']
})
export class AdmTransTypeListComponent {
  AdmTransTypeList: AdmTransType[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmTransType();
  }

  GetAllAdmTransType(): void {
    this.service.GetAllAdmTransType().subscribe(data => {
      this.AdmTransTypeList = data;
    });
  }

  Edit(AdmTransTypeId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmTransType/', AdmTransTypeId]);
  }

  View(AdmTransTypeId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', AdmTransTypeId]);
  }

  Delete(AdmTransTypeId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmTransType(AdmTransTypeId).subscribe(() => {
        this.GetAllAdmTransType(); // Refresh the list after deletion
      });
    }
  }

}

