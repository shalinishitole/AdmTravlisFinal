import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmTravlisInfo } from '../../Class'; // Assuming you have a 'AdmTravlisInfo' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';
@Component({
  selector: 'app-update-adm-travlis-info',
  templateUrl: './update-adm-travlis-info.component.html',
  styleUrls: ['./update-adm-travlis-info.component.scss']
})
export class UpdateAdmTravlisInfoComponent {
  AdmTravlisInfoId: any;
  admTravlisInfo: AdmTravlisInfo;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admTravlisInfo = new AdmTravlisInfo();
    this.route.params.subscribe((params) => {
      this.AdmTravlisInfoId = params['AdmTravlisInfoId'];
  
      this.service.GetAdmTravlisInfoById(this.AdmTravlisInfoId).subscribe((result) => {
        this.admTravlisInfo = result;
        console.log("AdmTravlisInfo", this.admTravlisInfo);
      });
    });
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admTravlisInfo.Logo = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admTravlisInfo);
    this.service.UpdateAdmTravlisInfo(this.admTravlisInfo).subscribe((result) => {
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

