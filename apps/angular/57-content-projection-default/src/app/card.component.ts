import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div>
      <ng-content select="[card-title]" />
      <ng-content select="[card-message]" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  // title = input.required<string>();
  // message = input<string | undefined>(undefined);
}
