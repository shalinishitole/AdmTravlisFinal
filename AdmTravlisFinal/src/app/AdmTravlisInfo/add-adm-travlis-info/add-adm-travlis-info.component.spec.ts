import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmTravlisInfoComponent } from './add-adm-travlis-info.component';

describe('AddAdmTravlisInfoComponent', () => {
  let component: AddAdmTravlisInfoComponent;
  let fixture: ComponentFixture<AddAdmTravlisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmTravlisInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmTravlisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
