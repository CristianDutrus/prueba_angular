import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';

export const routes: Routes = [
  { path: '', component: ShoppingComponent, canActivate: [AuthGuard]},
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
];
