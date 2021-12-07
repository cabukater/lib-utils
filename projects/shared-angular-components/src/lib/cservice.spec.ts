import { TestBed } from '@angular/core/testing';

import { SharedAngularComponentsService } from './shared-angular-components.service';

describe('SharedAngularComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedAngularComponentsService = TestBed.get(SharedAngularComponentsService);
    expect(service).toBeTruthy();
  });
});
