import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCountryMasterListComponent } from './adm-country-master-list.component';

describe('AdmCountryMasterListComponent', () => {
  let component: AdmCountryMasterListComponent;
  let fixture: ComponentFixture<AdmCountryMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCountryMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCountryMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
