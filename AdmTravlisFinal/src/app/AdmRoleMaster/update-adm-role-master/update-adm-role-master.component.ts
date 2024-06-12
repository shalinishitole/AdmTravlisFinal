import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmRoleMaster } from '../../Class'; // Assuming you have a 'AdmRoleMaster' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';
@Component({
  selector: 'app-update-adm-role-master',
  templateUrl: './update-adm-role-master.component.html',
  styleUrls: ['./update-adm-role-master.component.scss']
})
export class UpdateAdmRoleMasterComponent {
  AdmRoleMasterId: any;
  admRoleMaster: AdmRoleMaster;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admRoleMaster = new AdmRoleMaster();
    this.route.params.subscribe((params) => {
      this.AdmRoleMasterId = params['AdmRoleMasterId'];
  
      this.service.GetAdmRoleMasterById(this.AdmRoleMasterId).subscribe((result) => {
        this.admRoleMaster = result;
        console.log("AdmRoleMaster", this.admRoleMaster);
      });
    });
  }
  // fileChangeEvent(fileInput: any){
  //   this.filesToUpload = <Array<File>>fileInput.target.files;
  //   this.selectedFileNames = [];
  //   for (let i = 0; i < this.filesToUpload.length; i++)
  //   {
  //       this.selectedFileNames.push(this.filesToUpload[i].name);
  //       this.admRoleMaster.Photo = this.filesToUpload[i].name;
  //   } 
  //   }

  OnSubmit() {
    console.log(this.admRoleMaster);
    this.service.UpdateAdmRoleMaster(this.admRoleMaster).subscribe((result) => {
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

