import { Component } from '@angular/core';

type Box = {
  size?: number | string;
  left?: number | string;
  speedTop?: number;
  speedRotate?: number;
};

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {
  public boxes: Box[] = [];

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructor() {
    const a: any[] = new Array(20).fill({});
    this.boxes = a.map((_) => {
      const data: Box = {};
      const size = this.getRandom(25, 150);
      data.left = `${this.getRandom(size, window.innerWidth - size)}px`;
      data.size = `${size}px`;
      data.speedTop = this.getRandom(10, 50);
      data.speedRotate = this.getRandom(10, 50);
      return data;
    });
    console.log(this.boxes);
  }
}
