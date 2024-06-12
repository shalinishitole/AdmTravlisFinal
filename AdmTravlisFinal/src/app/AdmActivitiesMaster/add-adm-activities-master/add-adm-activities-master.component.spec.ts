import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmActivitiesMasterComponent } from './add-adm-activities-master.component';

describe('AddAdmActivitiesMasterComponent', () => {
  let component: AddAdmActivitiesMasterComponent;
  let fixture: ComponentFixture<AddAdmActivitiesMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmActivitiesMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmActivitiesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
