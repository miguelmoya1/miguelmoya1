import { trigger, style, transition, animate } from '@angular/animations';

export const openClose = trigger('openClose', [
  transition('* <=> *', [
    style({ transform: 'scaleX(0)', 'transform-origin': 'left' }),
    animate('400ms ease', style({ transform: 'scaleX(1)' })),
  ]),
]);
