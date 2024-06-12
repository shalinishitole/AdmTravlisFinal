import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmActivitiesMaster } from '../../Class'; // Assuming you have a 'AdmActivitiesMaster' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';
@Component({
  selector: 'app-update-adm-activities-master',
  templateUrl: './update-adm-activities-master.component.html',
  styleUrls: ['./update-adm-activities-master.component.scss']
})
export class UpdateAdmActivitiesMasterComponent {
  AdmActivitiesMasterId: any;
  admActivitiesMaster: AdmActivitiesMaster;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admActivitiesMaster = new AdmActivitiesMaster();
    this.route.params.subscribe((params) => {
      this.AdmActivitiesMasterId = params['AdmActivitiesMasterId'];
  
      this.service.GetAdmActivitiesMasterById(this.AdmActivitiesMasterId).subscribe((result) => {
        this.admActivitiesMaster = result;
        console.log("AdmActivitiesMaster", this.admActivitiesMaster);
      });
    });
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admActivitiesMaster.Photo = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admActivitiesMaster);
    this.service.UpdateAdmActivitiesMaster(this.admActivitiesMaster).subscribe((result) => {
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

