import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegistrationListComponent } from './adm-registration-list.component';

describe('AdmRegistrationListComponent', () => {
  let component: AdmRegistrationListComponent;
  let fixture: ComponentFixture<AdmRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRegistrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
