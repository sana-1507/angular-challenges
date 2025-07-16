import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button.component';

@Component({
  imports: [NavButtonComponent],
  selector: 'app-foo',
  template: `
    Welcome to foo page
    <nav-button link="/home" class=" left-1/2 top-3">Home Page</nav-button>
    <div class="h-screen bg-blue-200">section 1</div>
    <div class="h-screen bg-red-200">section 2</div>
  `,
})
export class FooComponent {}
