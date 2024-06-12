import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBlogListComponent } from './adm-blog-list.component';

describe('AdmBlogListComponent', () => {
  let component: AdmBlogListComponent;
  let fixture: ComponentFixture<AdmBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmBlogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
