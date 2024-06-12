import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmTransType } from '../../Class'; // Assuming you have a 'AdmTransType' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';


@Component({
  selector: 'app-update-adm-trans-type',
  templateUrl: './update-adm-trans-type.component.html',
  styleUrls: ['./update-adm-trans-type.component.scss']
})
export class UpdateAdmTransTypeComponent {
  AdmTransTypeId: any;
  admTransType: AdmTransType;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admTransType = new AdmTransType();
    this.route.params.subscribe((params) => {
      this.AdmTransTypeId = params['AdmTransTypeId'];
  
      this.service.GetAdmTransTypeById(this.AdmTransTypeId).subscribe((result) => {
        this.admTransType = result;
        console.log("AdmTransType", this.admTransType);
      });
    });
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admTransType.AdmTransTypeImage = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admTransType);
    this.service.UpdateAdmTransType(this.admTransType).subscribe((result) => {
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

