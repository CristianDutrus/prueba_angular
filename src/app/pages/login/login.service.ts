import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSubject = new BehaviorSubject<boolean>(false);
  login$: Observable<boolean> = this.loginSubject.asObservable();

  constructor(private router: Router) {}

  // Login
  login(email: string, password: string): Observable<boolean> {
    if (email === 'user@demo.com' && password === '123456') {
      this.loginSubject.next(true);
      return this.loginSubject.asObservable();
    }
    this.loginSubject.next(false);
    return this.loginSubject.asObservable();
  }

  // Return login status
  isLoggedIn(): boolean {
    return this.loginSubject.value;
  }

  // Logout
  logout(): void {
    this.loginSubject.next(false);
    this.router.navigateByUrl('/login');
  }
}
