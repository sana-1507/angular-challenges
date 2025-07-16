/* eslint-disable @angular-eslint/component-selector */
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-button',
  template: `
    @if (isFragmentLink()) {
      <a [href]="link()"><ng-content></ng-content></a>
    } @else {
      <a [routerLink]="link()"><ng-content></ng-content></a>
    }
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
  imports: [RouterModule],
})
export class NavButtonComponent {
  link = input('');
  isFragmentLink() {
    return this.link().startsWith('#');
  }

  onFragmentClick(event: Event) {
    event.preventDefault(); // prevent default href navigation
    const id = this.link().substring(1); // remove '#'
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
