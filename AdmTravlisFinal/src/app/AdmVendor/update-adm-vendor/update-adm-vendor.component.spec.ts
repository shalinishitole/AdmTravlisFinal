import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmVendorComponent } from './update-adm-vendor.component';

describe('UpdateAdmVendorComponent', () => {
  let component: UpdateAdmVendorComponent;
  let fixture: ComponentFixture<UpdateAdmVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
