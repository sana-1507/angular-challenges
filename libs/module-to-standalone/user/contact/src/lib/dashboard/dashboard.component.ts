import { Component } from '@angular/core';

@Component({
  selector: 'lib-contact-dashboard',
  template: `
    Contact Dashboard

    <button
      routerLink="create-contact"
      class="ml-10 rounded-lg border bg-gray-700 p-2 text-white">
      Create contact
    </button>
  `,
  standalone: true,
})
export class ContactDashboardComponent {}
