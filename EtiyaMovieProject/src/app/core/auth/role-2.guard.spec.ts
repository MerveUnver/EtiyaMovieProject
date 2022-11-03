import { TestBed } from '@angular/core/testing';

import { Role2Guard } from './role-2.guard';

describe('Role2Guard', () => {
  let guard: Role2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Role2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
