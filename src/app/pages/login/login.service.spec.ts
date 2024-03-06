import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
    });
    loginService = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should return true if login is successful', () => {
    const email = 'user@demo.com';
    const password = '123456';

    loginService.login(email, password).subscribe((result) => {
      expect(result).toBe(true);
    });
  });

  it('should return false if login is unsuccessful', () => {
    const email = 'test@test.com';
    const password = '1234';

    loginService.login(email, password).subscribe((result) => {
      expect(result).toBe(false);
    });
  });
});
