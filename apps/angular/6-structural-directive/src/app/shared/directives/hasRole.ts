import {
  Directive,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Role } from '../../user.model';
import { UserStore } from '../../user.store';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[hasRole], [hasRoleIsAdmin]',
  standalone: true,
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() hasRole?: Role | Role[];
  @Input() hasRoleIsAdmin?: boolean;
  private vcr = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<any>);
  private destroy$ = new Subject<void>();
  private store = inject(UserStore);

  ngOnInit(): void {
    if (this.hasRoleIsAdmin) {
      this.store.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((admin) => (admin ? this.addView() : this.clearView()));
    } else if (this.hasRole) {
      this.store
        .hasAnyRole(this.hasRole)
        .pipe(takeUntil(this.destroy$))
        .subscribe((role) => (role ? this.addView() : this.clearView()));
    }
  }

  addView() {
    this.vcr.clear();
    this.vcr.createEmbeddedView(this.templateRef);
  }

  clearView() {
    this.vcr.clear();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
