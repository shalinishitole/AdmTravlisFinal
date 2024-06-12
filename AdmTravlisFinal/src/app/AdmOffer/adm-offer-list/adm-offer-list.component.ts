import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service'; // Adjust the import paths
import { AdmOffer } from 'src/app/Class';


@Component({
  selector: 'app-adm-offer-list',
  templateUrl: './adm-offer-list.component.html',
  styleUrls: ['./adm-offer-list.component.scss']
})
export class AdmOfferListComponent {
  AdmOfferList: AdmOffer[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {}

  ngOnInit(): void {
    this.GetAllAdmOffer();
  }

  GetAllAdmOffer(): void {
    this.service.GetAllAdmOffer().subscribe(data => {
      this.AdmOfferList = data;
    });
  }

  Edit(AdmAdmOfferId: number): void {
    // Navigate to edit component or open edit dialog
    this.router.navigate(['/UpdateAdmOffer/', AdmAdmOfferId]);
  }

  View(AdmAdmOfferId: number): void {
    // Navigate to view component or open view dialog
    this.router.navigate(['/view-adm-City-master', AdmAdmOfferId]);
  }

  Delete(AdmAdmOfferId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.DeleteAdmOffer(AdmAdmOfferId).subscribe(() => {
        this.GetAllAdmOffer(); // Refresh the list after deletion
      });
    }
  }

}