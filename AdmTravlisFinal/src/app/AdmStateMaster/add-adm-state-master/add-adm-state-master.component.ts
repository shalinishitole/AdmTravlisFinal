//ng g c AddAdmStateMaster
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { NgForm } from '@angular/forms';
import { AdmCountryMaster, AdmStateMaster } from '../../Class';
import { Observable } from 'rxjs';
import { GlobalVariable } from 'src/app/Global';
@Component({
    selector: 'app-add-adm-state-master',
    templateUrl: './add-adm-state-master.component.html',
    styleUrls: ['./add-adm-state-master.component.scss']
})
export class AddAdmStateMasterComponent {
    @ViewChild('AdmStateMasterForm') form: NgForm;
    admStateMaster: AdmStateMaster;
    admCountryMaster: AdmCountryMaster;
    admCountryMasterlist: any[] = [];


    constructor(private router: Router, private http: HttpClient, private service: WebService) {
        this.admStateMaster = new AdmStateMaster();
        this.admStateMaster.admCountryMaster = new AdmCountryMaster();
        this.GetAllAdmCountryMaster();

    }

    OnSubmit() {
        console.log("prop", this.admStateMaster);
        this.service.AddAdmStateMaster(this.admStateMaster).subscribe(result => {
            if (result > 0) {
                alert('Saved Successfully.');
                this.router.navigateByUrl('/Dashboard');

            } else {
                alert('Something went wrong! Please try again.');
            }
        });
    
    }
       
  GetAllAdmCountryMaster() {
            
            this.service.GetAllAdmCountryMaster().subscribe((result) => {
                         console.log(result);
                      for (let data of result) {
                     this.admCountryMasterlist.push(data);
                     }
            console.log("GetAllAdmCountryMaster", this.admCountryMasterlist);
          });
        }
      
        ngOnInit(): void {
    
        }
      
      }

  



       
           
    
