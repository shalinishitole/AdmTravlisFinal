import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmTravlisInfoComponent } from './update-adm-travlis-info.component';

describe('UpdateAdmTravlisInfoComponent', () => {
  let component: UpdateAdmTravlisInfoComponent;
  let fixture: ComponentFixture<UpdateAdmTravlisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmTravlisInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmTravlisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
