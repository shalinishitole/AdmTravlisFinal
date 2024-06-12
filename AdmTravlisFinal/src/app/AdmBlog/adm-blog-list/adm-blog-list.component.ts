import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-adm-blog-list',
  templateUrl: './adm-blog-list.component.html',
  styleUrls: ['./adm-blog-list.component.scss']
})
export class AdmBlogListComponent {
  AdmBlogList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(private router: Router,  private http: HttpClient, private service: WebService) {
    this.AdmBlogList=[]
   }

   Delete(AdmBlogId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteAdmBlog(AdmBlogId).subscribe(result => {
      if (result == "Success") {
      this.AdmBlogList = this.AdmBlogList.filter(
        (item) => item.Id != AdmBlogId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(AdmBlogId): void{
    try {
      this.router.navigateByUrl("/UpdateAdmBlog/" + AdmBlogId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(AdmBlogId): void{
    try {
      this.router.navigateByUrl("/ViewBlog/" + AdmBlogId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllAdmBlog().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.AdmBlogList.push(data);   
      }     
           console.log(this.AdmBlogList);
    });
  }

}