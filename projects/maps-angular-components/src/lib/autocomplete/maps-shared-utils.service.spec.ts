import { TestBed } from '@angular/core/testing';

import { sharedAngularComponentsService } from './shared-angular-components.service';

describe('sharedAngularComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: sharedAngularComponentsService = TestBed.get(sharedAngularComponentsService);
    expect(service).toBeTruthy();
  });
});
