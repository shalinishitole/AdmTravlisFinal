import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTravlisInfoListComponent } from './adm-travlis-info-list.component';

describe('AdmTravlisInfoListComponent', () => {
  let component: AdmTravlisInfoListComponent;
  let fixture: ComponentFixture<AdmTravlisInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTravlisInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTravlisInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
