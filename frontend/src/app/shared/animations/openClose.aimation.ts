import { trigger, style, transition, animate } from '@angular/animations';

export const openClose = trigger('openClose', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate(
      '700ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [style({ opacity: 0 })]),
]);
