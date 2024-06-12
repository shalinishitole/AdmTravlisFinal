import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmCountryMaster } from '../../Class'; // Assuming you have a 'AdmCountryMaster' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';

@Component({
  selector: 'app-update-adm-country-master',
  templateUrl: './update-adm-country-master.component.html',
  styleUrls: ['./update-adm-country-master.component.scss']
})
export class UpdateAdmCountryMasterComponent {
  AdmCountryMasterId: any;
  admCountryMaster: AdmCountryMaster;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admCountryMaster = new AdmCountryMaster();
    this.route.params.subscribe((params) => {
      this.AdmCountryMasterId = params['AdmCountryMasterId'];
  
      this.service.GetAdmCountryMasterById(this.AdmCountryMasterId).subscribe((result) => {
        this.admCountryMaster = result;
        console.log("AdmCountryMaster", this.admCountryMaster);
      });
    });
  }

  OnSubmit() {
    console.log(this.admCountryMaster);
    this.service.UpdateAdmCountryMaster(this.admCountryMaster).subscribe((result) => {
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