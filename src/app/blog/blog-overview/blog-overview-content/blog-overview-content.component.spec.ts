import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewContentComponent } from './blog-overview-content.component';

describe('BlogOverviewContentComponent', () => {
  let component: BlogOverviewContentComponent;
  let fixture: ComponentFixture<BlogOverviewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogOverviewContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogOverviewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
