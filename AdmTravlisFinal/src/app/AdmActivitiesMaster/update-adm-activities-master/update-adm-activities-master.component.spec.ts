import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmActivitiesMasterComponent } from './update-adm-activities-master.component';

describe('UpdateAdmActivitiesMasterComponent', () => {
  let component: UpdateAdmActivitiesMasterComponent;
  let fixture: ComponentFixture<UpdateAdmActivitiesMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmActivitiesMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmActivitiesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
