//ng g c AddAdmDestinations
import { HttpClient } from '@angular/common/http';
import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { NgForm } from '@angular/forms';
import { AdmCountryMaster,AdmStateMaster,AdmDestinations, AdmCityMaster } from '../../Class';

@Component({
  selector: 'app-add-adm-destinations',
  templateUrl: './add-adm-destinations.component.html',
  styleUrls: ['./add-adm-destinations.component.scss']
})
export class AddAdmDestinationsComponent {
  @ViewChild('AdmDestinationsForm') form: NgForm;
  // admDestinations = new   AdmDestinations();
  
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  admDestinations: AdmDestinations;
  admCountryMaster: AdmCountryMaster;
  admStateMaster: AdmStateMaster;
  AdmCountryMasterList: any[] = [];
  AdmStateMasterList: any[] = [];
  AdmCityMasterList: any[] = [];


  constructor(private router: Router,
  private http: HttpClient,
  private service: WebService) {
  this.admDestinations = new AdmDestinations();
  this.admDestinations.admCountryMaster = new AdmCountryMaster();
  this.admDestinations.admStateMaster = new AdmStateMaster();
   this.admDestinations.admCityMaster = new AdmCityMaster();


  this.admCountryMaster = new AdmCountryMaster(); // Initialize admCountryMaster here
    this.admStateMaster = new AdmStateMaster(); // Initialize admStateMaster here

  this.GetAllAdmCountryMaster();
    this.GetAllAdmStateMaster();
    this.GetAllAdmCityMaster();
  }
  ngOnInit(): void {
    // Additional initialization if needed
  }

  OnSubmit() {
    console.log("admDestinations", this.admDestinations);
    this.admDestinations.Status = "Active";
    this.service.AddAdmDestinations(this.admDestinations).subscribe((result) => {
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
}

