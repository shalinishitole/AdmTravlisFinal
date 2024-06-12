import { Component, OnInit } from '@angular/core';
import { AdmCountryMaster, AdmStateMaster, AdmCityMaster } from '../../Class';
import { ActivatedRoute, Router } from '@angular/router';
// import { DashboardService } from '../DashboardService';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';



@Component({
selector:   'app-add-adm-city-master',
templateUrl:   './add-adm-city-master.component.html',
styleUrls:   ['./add-adm-city-master.component.scss']
})
export class AddAdmCityMasterComponent {
  admCityMaster: AdmCityMaster;
  admCountryMaster: AdmCountryMaster;
  admStateMaster: AdmStateMaster;
  AdmCountryMasterList: any[] = [];
  AdmStateMasterList: any[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebService) {
    this.admCityMaster = new AdmCityMaster();
    this.admCityMaster.admCountryMaster = new AdmCountryMaster();
    this.admCityMaster.admStateMaster = new AdmStateMaster();
    this.admCountryMaster = new AdmCountryMaster(); // Initialize admCountryMaster here
    this.admStateMaster = new AdmStateMaster(); // Initialize admStateMaster here

    
    this.GetAllAdmStateMaster();
  }

  ngOnInit(): void {
    this.GetAllAdmCountryMaster();
    // Additional initialization if needed
  }

  OnSubmit() {
    console.log("admCityMaster", this.admCityMaster);
    this.admCityMaster.Status = "Active";
    this.service.AddAdmCityMaster(this.admCityMaster).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      } else {
        alert("Something went wrong! Please try again.");
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
      console.log(this.admCountryMaster.AdmCountryMasterId);
      let list = tmp.filter(
        (tmp) => tmp.admCountryMaster.AdmCountryMasterId ==this.admCountryMaster.AdmCountryMasterId)
        this.AdmStateMasterList = list;
        console.log(this.AdmStateMasterList);
    });
  }
  
}

