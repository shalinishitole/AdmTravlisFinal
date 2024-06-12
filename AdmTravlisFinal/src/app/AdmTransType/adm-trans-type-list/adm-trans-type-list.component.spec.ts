import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTransTypeListComponent } from './adm-trans-type-list.component';

describe('AdmTransTypeListComponent', () => {
  let component: AdmTransTypeListComponent;
  let fixture: ComponentFixture<AdmTransTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTransTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTransTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
