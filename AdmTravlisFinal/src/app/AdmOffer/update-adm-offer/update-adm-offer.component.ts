import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmOffer } from '../../Class'; // Assuming you have a 'AdmOffer' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';

@Component({
  selector: 'app-update-adm-offer',
  templateUrl: './update-adm-offer.component.html',
  styleUrls: ['./update-adm-offer.component.scss']
})
export class UpdateAdmOfferComponent {
  AdmOfferId: any;
  admOffer: AdmOffer;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admOffer = new AdmOffer();
    this.route.params.subscribe((params) => {
      this.AdmOfferId = params['AdmOfferId'];
  
      this.service.GetAdmOfferById(this.AdmOfferId).subscribe((result) => {
        this.admOffer = result;
        console.log("AdmOffer", this.admOffer);
      });
    });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admOffer.AdmOfferImage = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admOffer);
    this.service.UpdateAdmOffer(this.admOffer).subscribe((result) => {
      console.log(result);
      if (result == 0) {
        alert("Something went wrong! Please try again.");
      } else {
        alert('Saved Successfully.');
      }
    });
  }

  ngOnInit(): void {
    // this.dashboardService.initDashboardFeatures();
  }
}

