import { Injectable } from '@angular/core';

export type Colors = 'red' | 'green' | 'blue';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {
    const color = localStorage.getItem('color');

    if (color) {
      this.setColor(color as Colors);
    }
  }

  setColor(color: Colors) {
    document.body.className = `relative bg-gray-900 ${color}`;

    localStorage.setItem('color', color);
  }
}
