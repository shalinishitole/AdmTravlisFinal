import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { AdmBlog, AdmDestinations } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-add-adm-blog',
  templateUrl: './add-adm-blog.component.html',
  styleUrls: ['./add-adm-blog.component.scss']
})
export class AddAdmBlogComponent implements OnInit {
  @ViewChild('AdmBlogForm') form: NgForm;
  admBlog: AdmBlog;
  admDestinations: AdmDestinations;
  admDestinationslist: any[] = [];


  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: WebService) {
    this.admBlog = new AdmBlog();
    this.admBlog.admDestinations = new AdmDestinations();
    this.GetAllAdmDestinations();
    }


 

 


  OnSubmit(): void {
    console.log("admBlog", this.admBlog);
    this.service.AddAdmBlog(this.admBlog).subscribe(result => {
      if (result > 0) {
        const formData = new FormData();
        formData.append('uploadedImage', this.filesToUpload[0], this.filesToUpload[0].name);
        this.service.SaveAdmBlogImage(formData, result).subscribe(data => {
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
      this.admBlog.Photo = this.filesToUpload[i].name;
    }
  }



GetAllAdmDestinations() {
            
  this.service.GetAllAdmDestinations().subscribe((result) => {
               console.log(result);
            for (let data of result) {
           this.admDestinationslist.push(data);
           }
  console.log("GetAllAdmCountryMaster", this.admDestinationslist);
});
}

ngOnInit(): void {

}

}
