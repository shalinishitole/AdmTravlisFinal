import { Component } from '@angular/core';
// import { DashboardService } from '../DashboardService';
import { AdmBlog } from '../../Class'; // Assuming you have a 'AdmBlog' class similar to the 'Industry' class
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../Service';
@Component({
  selector: 'app-update-adm-Blog',
  templateUrl: './update-adm-Blog.component.html',
  styleUrls: ['./update-adm-Blog.component.scss']
})
export class UpdateAdmBlogComponent {
  AdmBlogId: any;
  admBlog: AdmBlog;
  admDestinationslist: any[] = []
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.admBlog = new AdmBlog();
    this.route.params.subscribe((params) => {
      this.AdmBlogId = params['AdmBlogId'];
      this.GetAllAdmDestinations();

  
      this.service.GetAdmBlogById(this.AdmBlogId).subscribe((result) => {
        this.admBlog = result;
        console.log("AdmBlog", this.admBlog);
      });
    });
  }



  GetAllAdmDestinations() {
    this.service.GetAllAdmDestinations().subscribe((result) => {
      console.log(result);
      for (let data of result) {
        this.admDestinationslist.push(data);
      }
      console.log("GetAllAdmDestinations", this.admDestinationslist);
    });
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.admBlog.Photo = this.filesToUpload[i].name;
    } 
    }

  OnSubmit() {
    console.log(this.admBlog);
    this.service.UpdateAdmBlog(this.admBlog).subscribe((result) => {
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
