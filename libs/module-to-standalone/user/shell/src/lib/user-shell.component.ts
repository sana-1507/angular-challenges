import { TOKEN } from '@angular-challenges/module-to-standalone/core/providers';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-user-shell',
  template: `
    -- User Panel --
    <div class="flex items-center gap-2">
      <button
        routerLink="home"
        class="rounded-md border border-blue-400 px-4 py-2">
        Home
      </button>
      <button
        routerLink="contact"
        class="rounded-md border border-blue-400 px-4 py-2">
        Contact
      </button>
      More buttons ...
    </div>
    <router-outlet></router-outlet>
    <section>
      LoadedToken
      {{ token }}
    </section>
  `,
  host: {
    class: 'flex flex-col p-4 gap-3 border border-blue',
  },
  standalone: true,
  imports: [RouterOutlet],
})
export class UserShellComponent {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(@Inject(TOKEN) public token: string) {}
}
