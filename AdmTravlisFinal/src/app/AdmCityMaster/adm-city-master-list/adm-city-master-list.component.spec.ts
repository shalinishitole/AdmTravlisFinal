import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCityMasterListComponent } from './adm-city-master-list.component';

describe('AdmCityMasterListComponent', () => {
  let component: AdmCityMasterListComponent;
  let fixture: ComponentFixture<AdmCityMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCityMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCityMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
