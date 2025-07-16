import { AsyncPipe } from '@angular/common';
import { Component, inject, Input as RouterInput } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private activatedRoute = inject(ActivatedRoute);
  @RouterInput() testId!: string;
  @RouterInput() permission!: string;
  @RouterInput() user!: string;
}
