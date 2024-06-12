import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmTransTypeComponent } from './add-adm-trans-type.component';

describe('AddAdmTransTypeComponent', () => {
  let component: AddAdmTransTypeComponent;
  let fixture: ComponentFixture<AddAdmTransTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmTransTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmTransTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
