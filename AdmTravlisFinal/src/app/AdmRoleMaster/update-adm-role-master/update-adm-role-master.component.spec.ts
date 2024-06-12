import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmRoleMasterComponent } from './update-adm-role-master.component';

describe('UpdateAdmRoleMasterComponent', () => {
  let component: UpdateAdmRoleMasterComponent;
  let fixture: ComponentFixture<UpdateAdmRoleMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmRoleMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmRoleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
