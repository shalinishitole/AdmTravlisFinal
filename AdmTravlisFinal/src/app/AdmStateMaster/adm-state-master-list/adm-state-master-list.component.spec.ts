import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStateMasterListComponent } from './adm-state-master-list.component';

describe('AdmStateMasterListComponent', () => {
  let component: AdmStateMasterListComponent;
  let fixture: ComponentFixture<AdmStateMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStateMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmStateMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
