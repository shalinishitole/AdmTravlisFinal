import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmRegistrationComponent } from './add-adm-registration.component';

describe('AddAdmRegistrationComponent', () => {
  let component: AddAdmRegistrationComponent;
  let fixture: ComponentFixture<AddAdmRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
