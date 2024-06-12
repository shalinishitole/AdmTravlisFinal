import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmCountryMasterComponent } from './add-adm-country-master.component';

describe('AddAdmCountryMasterComponent', () => {
  let component: AddAdmCountryMasterComponent;
  let fixture: ComponentFixture<AddAdmCountryMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmCountryMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmCountryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
