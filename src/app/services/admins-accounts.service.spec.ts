import { TestBed } from '@angular/core/testing';

import { AdminsAccountsService } from './admins-accounts.service';

describe('AdminsAccountsService', () => {
  let service: AdminsAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
