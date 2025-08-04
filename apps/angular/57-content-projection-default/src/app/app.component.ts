import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  template: `
    <app-card>
      <span card-title>Titre 1</span>
      <span card-message>Message 1</span>
    </app-card>
    <app-card>
      <span card-title>Titre 2</span>
      <span card-message>Aucun message</span>
    </app-card>
  `,
  host: {
    class: 'p-4 block flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
