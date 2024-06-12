import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmCityMaster, AdmCountryMaster, AdmStateMaster } from '../../Class'; // Assuming you have a 'AdmCityMaster' class similar to the 'AdmCountryMaster' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';

@Component({
  selector: 'app-update-adm-city-master',
  templateUrl: './update-adm-city-master.component.html',
  styleUrls: ['./update-adm-city-master.component.scss']
})

  
  export class UpdateAdmCityMasterComponent {
    admCityMaster: AdmCityMaster
    admCountryMaster: AdmCountryMaster
    admStateMaster: AdmStateMaster
    AdmCountryMasterList: any[]=[]
    AdmStateMasterList: any[]=[]
    
    selectedFileNames: string[] = [];
    AdmCityMasterId:any
  
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: WebService) {
      this.admCityMaster = new AdmCityMaster();
      this.admCityMaster.admCountryMaster = new AdmCountryMaster();
      this.admCityMaster.admStateMaster = new AdmStateMaster();
      this.route.params.subscribe((params) => {
        this.AdmCityMasterId = params['AdmCityMasterId'];
        this.GetAllAdmCountryMaster();
      this.GetAllAdmStateMaster();
        // this.aboutlist = [];
  
        this.service.GetAdmCityMasterById(this.AdmCityMasterId).subscribe((result) => {
  
          this.admCityMaster = result;
          console.log("admCityMaster", this.admCityMaster);
  
        });
      });
  
    }
    OnSubmit() {
      this.service.UpdateAdmCityMaster(this.admCityMaster).subscribe((result) => {
        console.log("hhh", result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        }
        else {
  
          alert('Saved Successfully.');
  
        }
  
      });
    }
  
    GetAllAdmCountryMaster() {
      this.service.GetAllAdmCountryMaster().subscribe((result) => {
        this.AdmCountryMasterList = result;
        console.log("AdmCountryMasterList", this.AdmCountryMasterList);
      });
    }
  
    AdmCountryMasterChange(event) {
      debugger
      console.log('UserIdr:', event.target.value);
      this.admCountryMaster.AdmCountryMasterId = event.target.value;
      this.GetAllAdmStateMaster();
    
    }
    
  
    GetAllAdmStateMaster() {
      debugger
      let tmp = [];
      this.service.GetAllAdmStateMaster().subscribe((result) => {
        for(let data of result) {
          tmp.push(data);
        }      
        console.log('state:',tmp);
         console.log( 'Country recode',this.admCountryMaster.AdmCountryMasterId);
        let list = tmp.filter(
          (tmp) => tmp.admCountryMaster.AdmCountryMasterId ==this.admCountryMaster.AdmCountryMasterId)
          this.AdmStateMasterList = list;
          console.log(this.AdmStateMasterList);
      });
    }
    
  }
  