import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmRegistrationComponent } from './update-adm-registration.component';

describe('UpdateAdmRegistrationComponent', () => {
  let component: UpdateAdmRegistrationComponent;
  let fixture: ComponentFixture<UpdateAdmRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
