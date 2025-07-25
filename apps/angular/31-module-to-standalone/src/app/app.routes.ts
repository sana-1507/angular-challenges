// src/app/app.routes.ts
import { IsAuthorizedGuard } from '@angular-challenges/module-to-standalone/admin/shared';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/home').then(
        (m) => m.homeRoutes,
      ),
  },
  {
    path: 'admin',
    canActivate: [IsAuthorizedGuard],
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/admin/feature').then(
        (m) => m.adminRoutes,
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/user/shell').then(
        (m) => m.userShellRoutes,
      ),
  },
  {
    path: 'forbidden',
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/forbidden').then(
        (m) => m.forbiddenRoutes,
      ),
  },
];
