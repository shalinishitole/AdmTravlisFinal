import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmStateMaster } from '../../Class'; // Assuming you have a 'AdmStateMaster' class similar to the 'AdmCountryMaster' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';

@Component({
  selector: 'app-update-adm-state-master',
  templateUrl: './update-adm-state-master.component.html',
  styleUrls: ['./update-adm-state-master.component.scss']
})
export class UpdateAdmStateMasterComponent {
  AdmStateMasterId: any;
  admStateMaster: AdmStateMaster;
  admCountryMasterlist: any[] = []
  
  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admStateMaster = new AdmStateMaster();
    this.route.params.subscribe((params) => {
      this.AdmStateMasterId = params['AdmStateMasterId'];
      this.GetAllAdmCountryMaster();

  
      this.service.GetAdmStateMasterById(this.AdmStateMasterId).subscribe((result) => {
        this.admStateMaster = result;
        console.log("AdmStateMaster", this.admStateMaster);
      });
    });
  }



  GetAllAdmCountryMaster() {
    this.service.GetAllAdmCountryMaster().subscribe((result) => {
      console.log(result);
      for (let data of result) {
        this.admCountryMasterlist.push(data);
      }
      console.log("GetAllAdmCountryMaster", this.admCountryMasterlist);
    });
  }


  OnSubmit() {
    console.log(this.admStateMaster);
    this.service.UpdateAdmStateMaster(this.admStateMaster).subscribe((result) => {
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
