import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmRoleMasterComponent } from './add-adm-role-master.component';

describe('AddAdmRoleMasterComponent', () => {
  let component: AddAdmRoleMasterComponent;
  let fixture: ComponentFixture<AddAdmRoleMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmRoleMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmRoleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
