import { AsyncPipe } from '@angular/common';
import { Component, Input as RouterInput } from '@angular/core';

@Component({
  selector: 'app-subscription',
  imports: [AsyncPipe],
  template: `
    <div>TestId: {{ testId }}</div>
    <div>Permission: {{ permission }}</div>
    <div>User: {{ user }}</div>
  `,
})
export default class TestComponent {
  @RouterInput() testId!: string;
  @RouterInput() permission!: string;
  @RouterInput() user!: string;
}
