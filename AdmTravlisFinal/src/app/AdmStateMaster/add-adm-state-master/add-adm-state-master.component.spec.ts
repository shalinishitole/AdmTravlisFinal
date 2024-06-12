import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmStateMasterComponent } from './add-adm-state-master.component';

describe('AddAdmStateMasterComponent', () => {
  let component: AddAdmStateMasterComponent;
  let fixture: ComponentFixture<AddAdmStateMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmStateMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmStateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
