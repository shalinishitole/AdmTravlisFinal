import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmActivitiesMasterListComponent } from './adm-activities-master-list.component';

describe('AdmActivitiesMasterListComponent', () => {
  let component: AdmActivitiesMasterListComponent;
  let fixture: ComponentFixture<AdmActivitiesMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmActivitiesMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmActivitiesMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
