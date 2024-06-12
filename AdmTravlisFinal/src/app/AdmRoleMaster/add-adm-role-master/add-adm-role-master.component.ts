//ng g c AddAdmRoleMaster
import { HttpClient } from '@angular/common/http';
import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../Service';
import { NgForm } from '@angular/forms';
import { AdmRoleMaster } from '../../Class';
@Component({
selector:   'app-add-adm-role-master',
templateUrl:   './add-adm-role-master.component.html',
styleUrls:   ['./add-adm-role-master.component.scss']
})
export class AddAdmRoleMasterComponent {
@ViewChild('AdmRoleMasterForm') form: NgForm;
admRoleMaster = new   AdmRoleMaster();
constructor(private router: Router,
private http: HttpClient,
private service: WebService) {
this.admRoleMaster = new AdmRoleMaster();
}
OnSubmit() {
console.log("admRoleMaster",this.admRoleMaster);
this.service.AddAdmRoleMaster(this.admRoleMaster).subscribe((result) => {
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
