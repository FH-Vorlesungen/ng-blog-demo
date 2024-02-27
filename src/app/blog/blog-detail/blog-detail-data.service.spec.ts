import { TestBed } from '@angular/core/testing';

import { BlogDetailDataService } from './blog-detail-data.service';

describe('BlogDetailDataService', () => {
  let service: BlogDetailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDetailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
