import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmBlogComponent } from './add-adm-blog.component';

describe('AddAdmBlogComponent', () => {
  let component: AddAdmBlogComponent;
  let fixture: ComponentFixture<AddAdmBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
