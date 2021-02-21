import { Component, OnInit } from '@angular/core';

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
export class BackgroundComponent implements OnInit {
  public boxes: Box[] = new Array(20).fill({});
  private lastWindowWidth?: number;

  constructor() {}

  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
    this.setBoxes();
    window.addEventListener(
      'resize',
      this.debounce(() => {
        this.setBoxes();
      })
    );
  }

  private setBoxes() {
    if (this.lastWindowWidth !== window.innerWidth) {
      this.lastWindowWidth = window.innerWidth;

      this.boxes = this.boxes.map((_) => {
        const data: Box = {};
        const size = this.getRandom(25, 150);
        data.left = `${this.getRandom(size, window.innerWidth - size)}px`;
        data.size = `${size}px`;
        data.speedTop = this.getRandom(10, 50);
        data.speedRotate = this.getRandom(10, 50);
        return data;
      });
    }
  }

  private debounce(func: Function) {
    let timer: any;
    return (event: any) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 500, event);
    };
  }
}
