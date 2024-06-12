import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmOfferListComponent } from './adm-offer-list.component';

describe('AdmOfferListComponent', () => {
  let component: AdmOfferListComponent;
  let fixture: ComponentFixture<AdmOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmOfferListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
