import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmOfferComponent } from './add-adm-offer.component';

describe('AddAdmOfferComponent', () => {
  let component: AddAdmOfferComponent;
  let fixture: ComponentFixture<AddAdmOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
