import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex gap-2">
      <button
        routerLink="home"
        class="rounded-md border border-blue-400 px-4 py-2">
        Home
      </button>
      <a routerLink="admin" class="rounded-md border border-blue-400 px-4 py-2">
        Admin
      </a>
      <button
        routerLink="user"
        class="rounded-md border border-blue-400 px-4 py-2">
        User
      </button>
    </div>
    <router-outlet></router-outlet>
  `,
  host: {
    class: 'flex flex-col p-4 gap-3',
  },
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
