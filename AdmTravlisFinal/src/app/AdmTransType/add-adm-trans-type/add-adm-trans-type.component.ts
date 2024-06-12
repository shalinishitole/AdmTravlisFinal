import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { AdmTransType } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-add-adm-trans-type',
  templateUrl: './add-adm-trans-type.component.html',
  styleUrls: ['./add-adm-trans-type.component.scss']
})
export class AddAdmTransTypeComponent implements OnInit {
  @ViewChild('AdmTransTypeForm') form: NgForm;
  admTransType: AdmTransType;
  filesToUpload: Array<File> = [];
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: WebService) {
    this.admTransType = new AdmTransType();
    this.route.params.subscribe((params) => {
      // Additional logic if required
    });
  }

  ngOnInit(): void {
    // Initialization logic if required
  }

  OnSubmit(): void {
    console.log("admTransType", this.admTransType);
    this.service.AddAdmTransType(this.admTransType).subscribe(result => {
      if (result > 0) {
        const formData = new FormData();
        formData.append('uploadedImage', this.filesToUpload[0], this.filesToUpload[0].name);
        this.service.SaveAdmTransTypeImage(formData, result).subscribe(data => {
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
      this.admTransType.AdmTransTypeImage = this.filesToUpload[i].name;
    }
  }
}
