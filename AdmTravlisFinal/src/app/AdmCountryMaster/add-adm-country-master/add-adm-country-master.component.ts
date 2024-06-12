//ng g c AddAdmCountryMaster
import { HttpClient } from '@angular/common/http';
import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { NgForm } from '@angular/forms';
import { AdmCountryMaster } from '../../Class';
@Component({
selector:   'app-add-adm-country-master',
templateUrl:   './add-adm-country-master.component.html',
styleUrls:   ['./add-adm-country-master.component.scss']
})
export class AddAdmCountryMasterComponent {
@ViewChild('AdmCountryMasterForm') form: NgForm;
admCountryMaster = new   AdmCountryMaster();
constructor(private router: Router,
private http: HttpClient,
private service: WebService) {
this.admCountryMaster = new AdmCountryMaster();
}
OnSubmit() {
console.log("admCountryMaster",this.admCountryMaster);
this.service.AddAdmCountryMaster(this.admCountryMaster).subscribe((result) => {
if (result > 0) {
alert('Saved Successfully.');
this.router.navigateByUrl('/Dashboard');

}
else {
alert ('Something went wrong! Please try again.')
}
});
this.form.resetForm();
}
}
