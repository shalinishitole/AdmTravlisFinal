import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDestinationsListComponent } from './adm-destinations-list.component';

describe('AdmDestinationsListComponent', () => {
  let component: AdmDestinationsListComponent;
  let fixture: ComponentFixture<AdmDestinationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDestinationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDestinationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
