import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVendorListComponent } from './adm-vendor-list.component';

describe('AdmVendorListComponent', () => {
  let component: AdmVendorListComponent;
  let fixture: ComponentFixture<AdmVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmVendorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
