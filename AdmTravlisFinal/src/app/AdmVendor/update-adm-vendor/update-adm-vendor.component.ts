import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmVendor } from '../../Class'; // Assuming you have a 'AdmVendor' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';

@Component({
  selector: 'app-update-adm-vendor',
  templateUrl: './update-adm-vendor.component.html',
  styleUrls: ['./update-adm-vendor.component.scss']
})
export class UpdateAdmVendorComponent {
  AdmVendorId: any;
  admVendor: AdmVendor;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admVendor = new AdmVendor();
    this.route.params.subscribe((params) => {
      this.AdmVendorId = params['AdmVendorId'];
  
      this.service.GetAdmVendorById(this.AdmVendorId).subscribe((result) => {
        this.admVendor = result;
        console.log("AdmVendor", this.admVendor);
      });
    });
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admVendor.Photo = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admVendor);
    this.service.UpdateAdmVendor(this.admVendor).subscribe((result) => {
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
