//ng g c AdmDestinations-list
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { GlobalVariable } from 'src/app/Global';
import { AdmDestinations } from 'src/app/Class';
@Component({
  selector: 'app-adm-destinations-list',
  templateUrl: './adm-destinations-list.component.html',
  styleUrls: ['./adm-destinations-list.component.scss']
})
export class AdmDestinationsListComponent {
  AdmDestinationsList: AdmDestinations[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.getAdmDestinations();
  }

  getAdmDestinations(): void {
    this.service.GetAllAdmDestinations().subscribe(data => {
      this.AdmDestinationsList = data;
    });
  }

  Edit(AdmDestinationsId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmDestinations/',AdmDestinationsId]);
  }

  View(AdmDestinationsId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-country-master',AdmDestinationsId]);
  }

  Delete(AdmDestinationsId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmDestinations(AdmDestinationsId).subscribe(() => {
        this.getAdmDestinations(); // Refresh the list after deletion
      });
    }
  }

}

