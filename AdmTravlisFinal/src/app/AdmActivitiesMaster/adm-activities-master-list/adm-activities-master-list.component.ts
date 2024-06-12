import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-adm-activities-master-list',
  templateUrl: './adm-activities-master-list.component.html',
  styleUrls: ['./adm-activities-master-list.component.scss']
})
export class AdmActivitiesMasterListComponent {
  AdmActivitiesMasterList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(private router: Router,  private http: HttpClient, private service: WebService) {
    this.AdmActivitiesMasterList=[]
   }

   Delete(AdmActivitiesMasterId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteAdmActivitiesMaster(AdmActivitiesMasterId).subscribe(result => {
      if (result == "Success") {
      this.AdmActivitiesMasterList = this.AdmActivitiesMasterList.filter(
        (item) => item.Id != AdmActivitiesMasterId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(AdmActivitiesMasterId): void{
    try {
      this.router.navigateByUrl("/UpdateAdmActivitiesMaster/" + AdmActivitiesMasterId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(AdmActivitiesMasterId): void{
    try {
      this.router.navigateByUrl("/ViewBlog/" + AdmActivitiesMasterId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllAdmActivitiesMaster().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.AdmActivitiesMasterList.push(data);   
      }     
           console.log(this.AdmActivitiesMasterList);
    });
  }

}
