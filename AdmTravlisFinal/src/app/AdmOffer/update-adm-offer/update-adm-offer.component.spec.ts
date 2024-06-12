import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmOfferComponent } from './update-adm-offer.component';

describe('UpdateAdmOfferComponent', () => {
  let component: UpdateAdmOfferComponent;
  let fixture: ComponentFixture<UpdateAdmOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
