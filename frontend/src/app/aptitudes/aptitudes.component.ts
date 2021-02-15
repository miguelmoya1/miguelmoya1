import { Component, OnInit } from '@angular/core';

type Aptitude = {
  name: string;
  value: number;
};

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
})
export class AptitudesComponent implements OnInit {
  public title = 'Aptitudes';
  public languages!: Aptitude[];
  public frameworks!: Aptitude[];

  constructor() {}

  ngOnInit() {}
}
