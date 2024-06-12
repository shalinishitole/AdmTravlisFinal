import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmTransTypeComponent } from './update-adm-trans-type.component';

describe('UpdateAdmTransTypeComponent', () => {
  let component: UpdateAdmTransTypeComponent;
  let fixture: ComponentFixture<UpdateAdmTransTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmTransTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmTransTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
