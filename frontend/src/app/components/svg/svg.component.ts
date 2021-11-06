import { Component, Input, OnInit } from '@angular/core';

export type Types =
  | 'angular'
  | 'nest'
  | 'ionic'
  | 'node'
  | 'react'
  | 'next'
  | 'typescript'
  | 'javascript'
  | 'spanish'
  | 'english';

type SVG = {
  type: Types;
  viewBox: string;
  data: (
    | {
        type: 'circle';
        style?: string;
        cx: number;
        cy: number;
        r: number;
        d?: string;
        fill?: string;
      }
    | {
        type: 'path';
        d: string;
        style?: string;
        fill?: string;
      }
  )[];
};

@Component({
  selector: 'app-svg',
  template: `
    <svg
      [attr.viewBox]="svg.viewBox"
      [attr.type]="svg.type"
      [style.width]="size"
      [style.height]="size"
    >
      <g *ngFor="let item of svg.data">
        <circle
          *ngIf="item.type === 'circle'"
          [attr.cx]="item.cx"
          [attr.cy]="item.cy"
          [attr.r]="item.r"
          [attr.style]="item.style"
          [attr.fill]="item.fill"
        ></circle>
        <path
          *ngIf="item.type === 'path'"
          [attr.d]="item.d"
          [attr.style]="item.style"
          [attr.fill]="item.fill"
        ></path>
      </g>
    </svg>
  `,
})
export class SvgComponent implements OnInit {
  @Input() type!: Types;
  @Input() size = 125;
  svg!: SVG;
  svgs: SVG[] = [
    {
      type: 'angular',
      viewBox: '0 0 256 272',
      data: [
        {
          type: 'path',
          fill: '#E23237',
          d: 'M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z',
        },
        {
          type: 'path',
          fill: '#B52E31',
          d: 'M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z',
        },
        {
          type: 'path',
          fill: '#FFF',
          d: 'M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z',
        },
      ],
    },
    {
      type: 'nest',
      viewBox: '-1.81562535 -35.9717291 283.61762535 309.31637596',
      data: [
        {
          type: 'path',
          fill: '#e0234e',
          d: 'm153.338 4.24c-1.809 0-3.489.388-5.04.905 3.296 2.197 5.105 5.105 6.01 8.4.065.453.194.776.258 1.228.065.388.13.775.13 1.163.258 5.687-1.487 6.397-2.715 9.758-1.874 4.33-1.357 8.982.905 12.73.194.452.452.969.776 1.421-2.456-16.348 11.179-18.804 13.699-23.909.194-4.459-3.49-7.431-6.397-9.499-2.78-1.68-5.3-2.197-7.626-2.197zm20.55 3.683c-.26 1.487-.065 1.099-.13 1.874-.064.517-.064 1.163-.129 1.68-.129.517-.258 1.034-.452 1.551-.13.517-.323 1.034-.517 1.551-.259.517-.452.97-.71 1.486-.195.259-.324.517-.518.776l-.388.581c-.323.453-.646.905-.969 1.293-.388.388-.71.84-1.163 1.163v.065c-.388.323-.775.71-1.228 1.034-1.357 1.033-2.908 1.809-4.33 2.778-.452.323-.904.582-1.292.97-.452.323-.84.646-1.227 1.033-.453.388-.776.776-1.164 1.228-.323.388-.71.84-.969 1.293-.323.452-.646.904-.905 1.357-.258.517-.452.969-.71 1.486-.194.517-.388.97-.517 1.486a20.921 20.921 0 0 0 -.453 1.616c-.064.258-.064.581-.129.84-.065.258-.065.517-.129.775 0 .517-.065 1.099-.065 1.616 0 .387 0 .775.065 1.163 0 .517.065 1.034.194 1.615.065.517.194 1.034.323 1.551.194.517.323 1.034.517 1.55.13.324.323.647.452.906l-14.862-5.752c-2.52-.71-4.976-1.357-7.496-1.938l-4.071-.97a119.971 119.971 0 0 0 -11.76-1.744c-.13 0-.195-.065-.324-.065-3.877-.388-7.69-.581-11.567-.581-2.843 0-5.686.129-8.465.323-3.942.258-7.884.775-11.825 1.421-.97.13-1.94.323-2.908.517-2.004.388-3.942.84-5.816 1.293l-2.908.775c-.97.388-1.874.84-2.779 1.228l-2.132.97c-.13.064-.259.064-.323.128-.646.323-1.228.582-1.81.905-.193.065-.323.13-.452.194-.71.323-1.421.71-2.003 1.034-.452.194-.905.452-1.292.646-.194.13-.453.259-.582.323-.582.323-1.163.646-1.68.97-.582.322-1.099.646-1.551.969s-.905.581-1.292.904c-.065.065-.13.065-.194.13-.388.258-.84.581-1.228.904l-.13.13-.968.775c-.13.064-.26.194-.388.258-.323.259-.646.582-.97.84-.064.13-.193.194-.258.259-.388.388-.775.71-1.163 1.098-.065 0-.065.065-.13.13-.387.323-.775.71-1.163 1.098-.064.065-.064.13-.129.13a15.16 15.16 0 0 0 -.969 1.033c-.13.13-.323.259-.452.388-.323.388-.711.775-1.099 1.163-.065.13-.194.194-.258.323-.517.517-.97 1.034-1.487 1.551l-.193.194c-1.034 1.098-2.133 2.197-3.296 3.166a36.732 36.732 0 0 1 -3.619 2.843 48.856 48.856 0 0 1 -3.877 2.456 39.382 39.382 0 0 1 -4.071 1.939 46.55 46.55 0 0 1 -4.2 1.55c-2.714.582-5.493 1.68-7.884 1.874-.517 0-1.098.13-1.615.194-.582.13-1.099.259-1.616.388l-1.55.582c-.518.193-1.035.452-1.552.71-.452.323-.969.582-1.421.905-.453.323-.905.71-1.293 1.099-.452.323-.904.775-1.292 1.163-.388.452-.775.84-1.099 1.292-.323.517-.71.97-.969 1.486-.323.453-.646.97-.904 1.487-.26.581-.517 1.098-.711 1.68a49.803 49.803 0 0 0 -.582 1.68c-.129.517-.258 1.034-.323 1.55 0 .066-.065.13-.065.195-.129.581-.129 1.357-.194 1.744-.064.453-.129.84-.129 1.293 0 .258 0 .581.065.84.065.452.13.84.259 1.228.129.387.258.775.452 1.163v.064c.194.388.452.776.71 1.164.26.387.518.775.84 1.163.324.323.712.71 1.1 1.034.387.387.775.71 1.227 1.034 1.551 1.357 1.939 1.809 3.942 2.843.323.194.646.323 1.034.517.065 0 .129.064.194.064 0 .13 0 .194.064.324.065.517.194 1.034.324 1.55a8.71 8.71 0 0 0 .516 1.551c.194.388.324.776.517 1.164.065.129.13.258.194.323.259.517.517.969.776 1.421l.969 1.357c.323.388.71.84 1.099 1.228.387.388.775.71 1.227 1.099 0 0 .065.064.13.064.387.323.775.647 1.163.905.452.323.904.582 1.421.84.453.259.97.517 1.487.71.387.195.84.324 1.292.453.065.065.129.065.258.13.26.064.582.129.84.193-.193 3.49-.258 6.785.26 7.948.58 1.293 3.424-2.649 6.267-7.172-.388 4.458-.646 9.693 0 11.243.711 1.616 4.588-3.424 7.948-8.982 45.816-10.597 87.625 21.067 92.019 65.783-.84-6.979-9.435-10.856-13.377-9.887-1.938 4.782-5.234 10.921-10.533 14.734a41.434 41.434 0 0 0 -.646-12.924c-1.421 5.945-4.2 11.502-8.013 16.284-6.138.452-12.277-2.52-15.508-6.98-.259-.193-.323-.58-.517-.84-.194-.452-.388-.904-.517-1.356a5.365 5.365 0 0 1 -.388-1.357c-.065-.453-.065-.905-.065-1.422v-.97c.065-.452.194-.904.323-1.356.13-.453.259-.905.453-1.357.258-.453.452-.905.775-1.357 1.099-3.102 1.099-5.622-.904-7.108a7.36 7.36 0 0 0 -1.228-.647c-.259-.064-.582-.193-.84-.258-.194-.065-.323-.13-.517-.194-.453-.13-.905-.259-1.357-.323a4.923 4.923 0 0 0 -1.357-.194c-.453-.065-.97-.13-1.422-.13-.323 0-.646.066-.97.066-.516 0-.968.064-1.42.193-.453.065-.905.13-1.358.259-.452.13-.905.259-1.357.452-.452.194-.84.388-1.292.582-.388.194-.776.452-1.228.646-15.056 9.822-6.074 32.827 4.2 39.483-3.877.71-7.819 1.55-8.917 2.39l-.13.13c2.78 1.68 5.687 3.102 8.724 4.33 4.136 1.356 8.53 2.584 10.469 3.101v.065a62.516 62.516 0 0 0 16.284 1.163c28.626-2.003 52.083-23.78 56.348-52.471.13.581.259 1.098.388 1.68.194 1.163.452 2.39.581 3.619v.064c.13.582.194 1.164.259 1.68v.26c.065.58.13 1.162.13 1.68.064.71.128 1.42.128 2.132v1.034c0 .323.065.71.065 1.033 0 .388-.065.776-.065 1.164v.904c0 .453-.065.84-.065 1.293 0 .258 0 .517-.064.84 0 .452-.065.904-.065 1.421-.065.194-.065.388-.065.582-.064.517-.129.97-.194 1.486 0 .194 0 .388-.064.582-.065.646-.194 1.228-.259 1.874v.129c-.129.582-.258 1.228-.388 1.81v.193l-.387 1.745c0 .065-.065.194-.065.259-.13.581-.259 1.163-.452 1.744v.194c-.194.647-.388 1.228-.517 1.81-.065.064-.065.129-.065.129l-.582 1.938c-.258.647-.452 1.228-.71 1.874-.259.647-.453 1.293-.711 1.874-.259.647-.517 1.228-.776 1.874h-.064c-.26.582-.517 1.228-.84 1.81-.065.194-.13.323-.194.452-.065.065-.065.13-.13.194-4.2 8.465-10.403 15.896-18.158 21.712-.517.323-1.034.71-1.55 1.099-.13.129-.324.193-.453.323-.452.323-.905.646-1.421.969l.193.388h.065l2.714-.388h.065c1.68-.259 3.36-.582 5.04-.905.452-.065.97-.194 1.422-.323.323-.065.581-.129.904-.194.453-.064.905-.194 1.357-.258.388-.13.776-.194 1.164-.323 6.462-1.551 12.73-3.684 18.74-6.204-10.275 14.023-24.04 25.331-40.13 32.762 7.432-.517 14.863-1.744 22.036-3.812 26.042-7.69 47.948-25.202 61.065-48.788a103.145 103.145 0 0 1 -17.382 41.55 101.732 101.732 0 0 0 17.253-14.345c14.475-15.121 23.974-34.313 27.205-54.927a102.9 102.9 0 0 1 1.874 31.147c46.655-65.072 3.877-132.535-14.023-150.305-.064-.13-.129-.194-.129-.323-.064.064-.064.064-.064.129 0-.065 0-.065-.065-.13 0 .776-.065 1.551-.13 2.327-.193 1.486-.387 2.908-.646 4.33-.323 1.421-.71 2.843-1.098 4.264a53.747 53.747 0 0 1 -1.55 4.136 55.49 55.49 0 0 1 -1.94 3.942c-.71 1.227-1.486 2.52-2.326 3.683a49.368 49.368 0 0 1 -2.65 3.49c-.969 1.163-2.002 2.197-3.036 3.23a41.646 41.646 0 0 1 -1.874 1.616c-.517.452-.97.84-1.487 1.292-1.163.905-2.326 1.745-3.618 2.52-1.228.776-2.52 1.551-3.813 2.198-1.357.646-2.714 1.227-4.07 1.809-1.358.517-2.78.97-4.201 1.357a52.05 52.05 0 0 1 -4.33.97c-1.486.258-2.972.387-4.394.516-1.034.065-2.068.13-3.102.13-1.486 0-2.972-.13-4.394-.26-1.486-.128-2.972-.322-4.394-.645-1.486-.26-2.908-.647-4.33-1.099h-.064c1.422-.13 2.843-.259 4.265-.517a46.84 46.84 0 0 0 4.33-.97 45.495 45.495 0 0 0 4.2-1.356c1.421-.517 2.778-1.163 4.07-1.81 1.358-.646 2.586-1.357 3.878-2.132 1.228-.84 2.455-1.68 3.619-2.585a35.333 35.333 0 0 0 3.295-2.908c1.099-.97 2.068-2.068 3.037-3.166a63.86 63.86 0 0 0 2.714-3.49c.13-.193.259-.452.388-.646.646-1.034 1.292-2.068 1.874-3.102a44.537 44.537 0 0 0 1.939-3.941 45.28 45.28 0 0 0 1.55-4.136c.453-1.357.776-2.779 1.099-4.2.259-1.486.517-2.908.646-4.33.13-1.486.259-2.972.259-4.394 0-1.034-.065-2.068-.13-3.102-.128-1.486-.322-2.907-.516-4.33a46.844 46.844 0 0 0 -.97-4.329c-.452-1.357-.904-2.778-1.421-4.135s-1.163-2.714-1.81-4.007c-.71-1.292-1.421-2.584-2.197-3.812a71.347 71.347 0 0 0 -2.584-3.554 136.72 136.72 0 0 0 -2.973-3.296 40.422 40.422 0 0 0 -1.68-1.615 118.979 118.979 0 0 0 -8.982-6.333c-.452-.259-.84-.452-1.293-.646-2.132-1.357-4.135-2.068-6.138-2.714z',
        },
      ],
    },
    {
      type: 'ionic',
      viewBox: '0 0 512 512',
      data: [
        {
          type: 'path',
          fill: '#4886F1',
          d: 'M425.5,135.4c4.7-5.9,7.5-13.5,7.5-21.6c0-19.2-15.6-34.8-34.8-34.8c-8.2,0-15.7,2.8-21.6,7.5C342.6,62.3,300.9,48,256,48   C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,211.1,449.7,169.4,425.5,135.4z M391.8,391.8   c-17.6,17.6-38.2,31.5-61.1,41.2c-23.7,10-48.8,15.1-74.8,15.1c-25.9,0-51.1-5.1-74.8-15.1c-22.9-9.7-43.4-23.5-61.1-41.2   c-17.6-17.6-31.5-38.2-41.2-61.1c-10-23.7-15.1-48.8-15.1-74.8c0-25.9,5.1-51.1,15.1-74.8c9.7-22.9,23.5-43.4,41.2-61.1   s38.2-31.5,61.1-41.2c23.7-10,48.8-15.1,74.8-15.1c25.9,0,51.1,5.1,74.8,15.1c12.7,5.4,24.7,12.1,35.9,20   c-2.1,4.5-3.3,9.5-3.3,14.9c0,19.2,15.6,34.8,34.8,34.8c5.3,0,10.3-1.2,14.9-3.3c7.9,11.2,14.6,23.2,20,35.9   c10,23.7,15.1,48.8,15.1,74.8c0,25.9-5.1,51.1-15.1,74.8C423.3,353.6,409.5,374.2,391.8,391.8z',
        },
        {
          type: 'circle',
          fill: '#4886f1',
          cx: 256,
          cy: 256,
          r: 96.1,
        },
      ],
    },
    {
      type: 'node',
      viewBox: '0 0 600 600',
      data: [
        {
          type: 'path',
          fill: '#539E43',
          d: 'M255.908,485.999c-6.116,0-12.323-1.642-17.708-4.746l-56.319-33.316    c-8.397-4.747-4.29-6.389-1.551-7.303c11.226-3.925,13.508-4.745,25.465-11.592c1.279-0.729,2.922-0.457,4.199,0.366    l43.266,25.648c1.552,0.912,3.741,0.912,5.202,0l168.592-97.304c1.553-0.913,2.555-2.738,2.555-4.563V158.583    c0-1.917-1.002-3.651-2.645-4.654L258.463,56.716c-1.551-0.913-3.65-0.913-5.202,0L84.852,154.019    c-1.644,0.913-2.647,2.738-2.647,4.655v194.515c0,1.825,1.003,3.65,2.647,4.473l46.188,26.653    c25.102,12.504,40.436-2.191,40.436-17.068V175.195c0-2.738,2.19-4.837,4.93-4.837h21.359c2.647,0,4.928,2.099,4.928,4.837    v192.143c0,33.407-18.256,52.576-49.928,52.576c-9.768,0-17.435,0-38.794-10.588l-44.179-25.467    c-10.954-6.299-17.708-18.074-17.708-30.76V158.583c0-12.596,6.754-24.462,17.708-30.76L238.2,30.519    c10.679-6.024,24.828-6.024,35.416,0l168.594,97.394c10.953,6.298,17.707,18.073,17.707,30.761v194.515    c0,12.596-6.754,24.371-17.707,30.761l-168.594,97.303C268.23,484.357,262.113,485.999,255.908,485.999z M392.006,294.224    c0-36.421-24.646-46.096-76.4-52.941c-52.396-6.938-57.689-10.498-57.689-22.729c0-10.131,4.473-23.641,43.266-23.641    c34.596,0,47.375,7.485,52.668,30.853c0.457,2.19,2.467,3.833,4.746,3.833h21.91c1.367,0,2.645-0.547,3.559-1.552    c0.914-1.003,1.369-2.373,1.275-3.743c-3.375-40.252-30.121-58.965-84.158-58.965c-48.103,0-76.764,20.264-76.764,54.311    c0,36.876,28.569,47.101,74.664,51.662c55.225,5.387,59.514,13.511,59.514,24.373c0,18.805-15.15,26.835-50.658,26.835    c-44.635,0-54.403-11.227-57.689-33.406c-0.365-2.373-2.374-4.107-4.837-4.107h-21.817c-2.738,0-4.836,2.191-4.836,4.836    c0,28.39,15.426,62.254,89.271,62.254C361.336,352.005,392.006,330.916,392.006,294.224L392.006,294.224z',
        },
      ],
    },
    {
      type: 'react',
      viewBox: '0 0 600 600',
      data: [
        {
          type: 'circle',
          fill: '#00D8FF',
          cx: 299.5,
          cy: 299.6,
          r: 50.2,
        },
        {
          type: 'path',
          fill: '#00D8FF',
          d: 'M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6   c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4   c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6   c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8   c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2   C425.4,218.6,363.9,209.6,299.5,209.6z',
        },
        {
          type: 'path',
          fill: '#00D8FF',
          d: 'M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4   c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6   c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9   C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6   c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156   c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4   L210.7,248.9z',
        },
        {
          type: 'path',
          fill: '#00D8FF',
          d: 'M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170   c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z    M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109   c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4   c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z',
        },
      ],
    },
    {
      type: 'next',
      viewBox: '.145 .207 147.685 89.291',
      data: [
        {
          type: 'path',
          d: 'm34.992 23.495h27.855v2.219h-25.301v16.699h23.792v2.219h-23.792v18.334h25.591v2.219h-28.145zm30.35 0h2.96l13.115 18.334 13.405-18.334 18.233-23.288-29.955 43.549 15.436 21.429h-3.076l-14.043-19.502-14.101 19.502h-3.018l15.552-21.429-14.507-20.261zm34.297 2.219v-2.219h21.742v2.219h-14.623v39.47h-2.554v-39.47h-14.564zm-99.494-2.219h2.192l44.011 66.003-18.188-24.313-26.346-38.537-.116 38.537h-2.553zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443h1.367c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z',
        },
      ],
    },
    {
      type: 'typescript',
      viewBox: '0 0 128 128',
      data: [
        {
          type: 'path',
          fill: '#007acc',
          d: 'M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z',
        },
      ],
    },
    {
      type: 'javascript',
      viewBox: '0 0 1052 1052',
      data: [
        {
          type: 'path',
          fill: '#f0db4f',
          d: 'M0 0h1052v1052H0z',
        },
        {
          type: 'path',
          d: 'M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z',
          fill: '#323330',
        },
      ],
    },
    {
      type: 'spanish',
      viewBox: '0 0 512 512',
      data: [
        {
          type: 'path',
          fill: '#FFDA44',
          d: 'M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261  C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z',
        },

        {
          type: 'path',
          fill: '#D80027',
          d: 'M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z',
        },
      ],
    },
    {
      type: 'english',
      viewBox: '0 0 512 512',
      data: [
        {
          type: 'circle',
          fill: '#F0F0F0',
          cx: 256,
          cy: 256,
          r: 256,
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z',
        },
        {
          type: 'path',
          fill: '#0052B4',
          d: 'M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z',
        },
        {
          type: 'path',
          fill: '#D80027',
          d: 'M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z',
        },
      ],
    },
  ];

  ngOnInit() {
    this.svg = this.svgs.find((svg) => svg.type === this.type) || this.svgs[0];
  }
}
