import { Component, OnInit } from '@angular/core';
import { AdmCountryMaster, AdmStateMaster, AdmCityMaster, AdmDestinations } from '../../Class';
import { ActivatedRoute, Router } from '@angular/router';
// import { DashboardService } from '../DashboardService';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';
@Component({
  selector: 'app-update-adm-destinations',
  templateUrl: './update-adm-destinations.component.html',
  styleUrls: ['./update-adm-destinations.component.scss']
})
export class UpdateAdmDestinationsComponent {
  admDestinations: AdmDestinations
  admCityMaster: AdmCityMaster
  admCountryMaster: AdmCountryMaster
  admStateMaster: AdmStateMaster
  AdmCountryMasterList: any[]=[]
  AdmCityMasterList: any[]=[]
  AdmStateMasterList: any[]=[]
  selectedFileNames: string[] = [];
  AdmDestinationsId:any
  uploadResult: any;
  filesToUpload: Array<File>;

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admDestinations = new AdmDestinations();
    this.admDestinations.admCountryMaster = new AdmCountryMaster();
    this.admDestinations.admStateMaster = new AdmStateMaster();
    this.route.params.subscribe((params) => {
      this.AdmDestinationsId = params['AdmCityMasterId'];
      this.GetAllAdmCountryMaster();
      

      this.service.GetAdmDestinationsById(this.AdmDestinationsId).subscribe((result) => {

        this.admCityMaster = result;
        console.log("admCityMaster", this.admCityMaster);

      });
    });

  }

  OnSubmit() {
    this.service.UpdateAdmDestinations(this.admDestinations).subscribe((result) => {
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
      console.log(this.admCountryMaster.AdmCountryMasterId);
      let list = tmp.filter(
        (tmp) => tmp.admCountryMaster.AdmCountryMasterId ==this.admCountryMaster.AdmCountryMasterId)
        this.AdmStateMasterList = list;
        console.log(this.AdmStateMasterList);
    });
  }
  


  AdmStateMasterChange(event) {
    debugger
    console.log('UserIdr:', event.target.value);
    this.admStateMaster.AdmStateMasterId = event.target.value;
    this.GetAllAdmCityMaster();
  
  }


  GetAllAdmCityMaster() {
    debugger
    let tmp = [];
    this.service.GetAllAdmCityMaster().subscribe((result) => {
      for(let data of result) {
        tmp.push(data);
      }      
      console.log('City:',tmp);
      console.log(this.admStateMaster.AdmStateMasterId);
      let list = tmp.filter(
        (tmp) => tmp.admStateMaster.AdmStateMasterId ==this.admStateMaster.AdmStateMasterId)
        this.AdmCityMasterList = list;
        console.log(this.AdmCityMasterList);
    });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admDestinations.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
    
  }

}















