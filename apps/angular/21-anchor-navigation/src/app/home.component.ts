import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button.component';

@Component({
  imports: [NavButtonComponent],
  selector: 'app-home',
  template: `
    <main>
      <nav-button link="/foo" class="fixed left-1/2 top-3">Foo Page</nav-button>

      <div id="top" class="h-[10%] bg-gray-500">
        <nav-button link="#bottom">Scroll Bottom</nav-button>
      </div>

      <div id="bottom" class="h-screen bg-blue-300">
        <p>I want to scroll</p>
        <nav-button link="#top">Scroll Top</nav-button>
      </div>
    </main>
  `,
})
export class HomeComponent {}
