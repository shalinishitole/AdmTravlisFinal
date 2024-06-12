import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmDestinationsComponent } from './update-adm-destinations.component';

describe('UpdateAdmDestinationsComponent', () => {
  let component: UpdateAdmDestinationsComponent;
  let fixture: ComponentFixture<UpdateAdmDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
