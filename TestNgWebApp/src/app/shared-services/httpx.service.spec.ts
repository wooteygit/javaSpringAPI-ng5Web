import { TestBed, inject } from '@angular/core/testing';

import { HttpxService } from './httpx.service';

describe('HttpxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpxService]
    });
  });

  it('should be created', inject([HttpxService], (service: HttpxService) => {
    expect(service).toBeTruthy();
  }));
});
