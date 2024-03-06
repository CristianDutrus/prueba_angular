import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../pages/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private routes: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.routes.navigate(['/login']);
    return false;
  }
}
