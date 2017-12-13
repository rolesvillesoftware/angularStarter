import { TestBed, inject } from '@angular/core/testing';

import { ListItemRepositoryService } from './list-item-repository.service';

describe('ListItemRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListItemRepositoryService]
    });
  });

  it('should be created', inject([ListItemRepositoryService], (service: ListItemRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
