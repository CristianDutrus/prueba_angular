import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginService } from '../../pages/login/login.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Router, LoginService],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return true if user is logged in', () => {
      const loginService = TestBed.inject(LoginService);
      spyOn(loginService, 'isLoggedIn').and.returnValue(true);
      expect(guard.canActivate()).toBe(true);
    });

    it('should return false if user is not logged in', () => {
      const loginService = TestBed.inject(LoginService);
      spyOn(loginService, 'isLoggedIn').and.returnValue(false);
      expect(guard.canActivate()).toBe(false);
    });
  });
});
