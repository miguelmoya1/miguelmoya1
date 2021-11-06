import { Component, OnInit } from '@angular/core';

type Box = {
  size?: number | string;
  left?: number | string;
  speedTop?: number;
  speedRotate?: number;
};

@Component({
  selector: 'app-background',
  template: `
    <div
      class="absolute h-full w-full min-h-screen top-0 overflow-hidden"
      [style.z-index]="'-1'"
    >
      <div
        class="absolute opacity-10 rounded-xl bg-blue-500"
        [ngStyle]="{
          left: box.left,
          width: box.size,
          height: box.size,
          animation:
            'goTop infinite linear ' +
            box.speedTop +
            's, rotating infinite linear ' +
            box.speedRotate +
            's'
        }"
        *ngFor="let box of boxes"
      ></div>
    </div>
  `,
  styles: [
    `
      @keyframes goTop {
        0% {
          bottom: -30%;
        }
        100% {
          bottom: 120%;
        }
      }

      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
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
