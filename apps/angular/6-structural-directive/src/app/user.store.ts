import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Role, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private user = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user.asObservable();

  add(user: User) {
    this.user.next(user);
  }

  get isAdmin$(): Observable<boolean> {
    return this.user$.pipe(map((user: any) => user?.isAdmin ?? false));
  }

  hasAnyRole(roles: Role[] | Role): Observable<boolean> {
    const requiredRoles = Array.isArray(roles) ? roles : [roles];
    return this.user$.pipe(
      map((user) => {
        if (!user || !user.roles) return false;
        return requiredRoles.some((role) => user.roles.includes(role));
      }),
    );
  }
}
