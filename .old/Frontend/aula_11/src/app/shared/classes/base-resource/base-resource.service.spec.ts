import { TestBed } from '@angular/core/testing';
import { BaseResourceService } from './base-resource.service';

describe('BaseServiceService', () => {
  let service: BaseResourceService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
