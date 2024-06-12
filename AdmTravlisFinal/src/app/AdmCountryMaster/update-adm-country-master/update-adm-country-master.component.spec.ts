import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmCountryMasterComponent } from './update-adm-country-master.component';

describe('UpdateAdmCountryMasterComponent', () => {
  let component: UpdateAdmCountryMasterComponent;
  let fixture: ComponentFixture<UpdateAdmCountryMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmCountryMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmCountryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
