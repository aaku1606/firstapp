import { TestBed, inject } from '@angular/core/testing';

import { ServicelistService } from './servicelist.service';

describe('ServicelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicelistService]
    });
  });

  it('should be created', inject([ServicelistService], (service: ServicelistService) => {
    expect(service).toBeTruthy();
  }));
});
