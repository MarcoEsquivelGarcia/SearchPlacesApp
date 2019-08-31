import { TestBed } from '@angular/core/testing';

import { SearchplacesServiceService } from './searchplaces-service.service';

describe('SearcholacesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchplacesServiceService = TestBed.get(SearchplacesServiceService);
    expect(service).toBeTruthy();
  });
});
