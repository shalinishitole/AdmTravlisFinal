import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmCityMasterComponent } from './update-adm-city-master.component';

describe('UpdateAdmCityMasterComponent', () => {
  let component: UpdateAdmCityMasterComponent;
  let fixture: ComponentFixture<UpdateAdmCityMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmCityMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmCityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
