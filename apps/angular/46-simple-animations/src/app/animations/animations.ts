import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Fade-in animation
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    // When the element is added to the DOM
    style({ opacity: 0 }), // Start with opacity 0
    animate('1.5s ease-in', style({ opacity: 1 })), // Gradually increase opacity
  ]),
]);

export const staggerListAnimation = trigger('staggerList', [
  transition(':enter', [
    query(
      '.list-item',
      [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        stagger(200, [
          animate(
            '1s ease-out',
            style({ opacity: 1, transform: 'translateX(0)' }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
