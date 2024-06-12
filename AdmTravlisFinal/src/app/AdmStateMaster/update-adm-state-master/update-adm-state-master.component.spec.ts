import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmStateMasterComponent } from './update-adm-state-master.component';

describe('UpdateAdmStateMasterComponent', () => {
  let component: UpdateAdmStateMasterComponent;
  let fixture: ComponentFixture<UpdateAdmStateMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmStateMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmStateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
