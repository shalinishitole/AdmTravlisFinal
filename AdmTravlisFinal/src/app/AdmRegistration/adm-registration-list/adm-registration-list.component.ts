import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmRegistration } from 'src/app/Class';


@Component({
  selector: 'app-adm-registration-list',
  templateUrl: './adm-registration-list.component.html',
  styleUrls: ['./adm-registration-list.component.scss']
})
export class AdmRegistrationListComponent {
  AdmRegistrationList: AdmRegistration[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmRegistration();
  }

  GetAllAdmRegistration(): void {
    this.service.GetAllAdmRegistration().subscribe(data => {
      this.AdmRegistrationList = data;
    });
  }

  Edit(id: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/edit-adm-City-master', id]);
  }

  View(id: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', id]);
  }

  Delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmRegistration(id).subscribe(() => {
        this.GetAllAdmRegistration(); // Refresh the list after deletion
      });
    }
  }

}

