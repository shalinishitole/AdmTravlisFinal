import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRoleMasterListComponent } from './adm-role-master-list.component';

describe('AdmRoleMasterListComponent', () => {
  let component: AdmRoleMasterListComponent;
  let fixture: ComponentFixture<AdmRoleMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRoleMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRoleMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
