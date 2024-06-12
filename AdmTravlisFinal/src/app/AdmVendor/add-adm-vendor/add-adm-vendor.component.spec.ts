import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmVendorComponent } from './add-adm-vendor.component';

describe('AddAdmVendorComponent', () => {
  let component: AddAdmVendorComponent;
  let fixture: ComponentFixture<AddAdmVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
