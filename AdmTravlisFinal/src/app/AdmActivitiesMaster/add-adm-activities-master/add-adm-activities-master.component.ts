
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { AdmActivitiesMaster, AdmDestinations } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-add-adm-activities-master',
  templateUrl: './add-adm-activities-master.component.html',
  styleUrls: ['./add-adm-activities-master.component.scss']
})
export class AddAdmActivitiesMasterComponent implements OnInit {
  @ViewChild('AdmActivitiesMasterForm') form: NgForm;
  admActivitiesMaster: AdmActivitiesMaster;
  // destinations: AdmDestinations[] = [];
  AId: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: WebService) {
    this.admActivitiesMaster = new AdmActivitiesMaster();
    this.admActivitiesMaster.admDestinations = new AdmDestinations();
    this.route.params.subscribe((params) => {
      this.AId = JSON.parse(sessionStorage.getItem('SID'));
    });
  }

   ngOnInit(): void {
  //   this.getDestinations();
  }

  // getDestinations(): void {
  //   this.service.GetAllAdmDestinations().subscribe(data => {
  //     this.destinations = data;
  //   });
  // }

  OnSubmit(): void {
    console.log("admActivitiesMaster", this.admActivitiesMaster);
    this.service.AddAdmActivitiesMaster(this.admActivitiesMaster).subscribe(result => {
      if (result > 0) {
        const formData = new FormData();
        formData.append('uploadedImage', this.filesToUpload[0], this.filesToUpload[0].name);
        this.service.SaveAdmActivitiesMasterImage(formData, result).subscribe(data => {
          alert('Saved Successfully.');
          this.router.navigateByUrl('/Dashboard');
        });
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++) {
      this.selectedFileNames.push(this.filesToUpload[i].name);
      this.admActivitiesMaster.Photo = this.filesToUpload[i].name;
    }
  }
}