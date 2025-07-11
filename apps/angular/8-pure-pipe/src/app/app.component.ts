import { Component } from '@angular/core';
import { HeavyComputePipe } from './pipes/heavy-compute.pipe';

@Component({
  selector: 'app-root',
  template: `
    @for (person of persons; track person) {
      {{ person | heavyCompute: $index }}
    }
  `,
  imports: [HeavyComputePipe],
})
export class AppComponent {
  persons = ['toto', 'jack', 'sana', 'aafreen'];
}
