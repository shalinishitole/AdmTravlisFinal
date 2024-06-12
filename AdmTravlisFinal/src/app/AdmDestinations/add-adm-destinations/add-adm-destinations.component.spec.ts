import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmDestinationsComponent } from './add-adm-destinations.component';

describe('AddAdmDestinationsComponent', () => {
  let component: AddAdmDestinationsComponent;
  let fixture: ComponentFixture<AddAdmDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
