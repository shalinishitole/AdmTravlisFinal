import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmCityMasterComponent } from './add-adm-city-master.component';

describe('AddAdmCityMasterComponent', () => {
  let component: AddAdmCityMasterComponent;
  let fixture: ComponentFixture<AddAdmCityMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmCityMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmCityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
