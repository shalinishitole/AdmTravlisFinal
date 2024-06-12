import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmBlogComponent } from './update-adm-blog.component';

describe('UpdateAdmBlogComponent', () => {
  let component: UpdateAdmBlogComponent;
  let fixture: ComponentFixture<UpdateAdmBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
