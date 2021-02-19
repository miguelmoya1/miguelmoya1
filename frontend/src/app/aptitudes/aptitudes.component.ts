import { Component, OnInit } from '@angular/core';
import { openClose } from '../shared/animations/openClose.aimation';

type Aptitude = {
  name: string;
  value: number;
};

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
  animations: [openClose],
})
export class AptitudesComponent implements OnInit {
  public title = 'Aptitudes';
  public totalDots = Array(10);

  public languages: Aptitude[] = [
    { name: 'Spanish', value: 100 },
    { name: 'English', value: 80 },
  ];

  public frameworks: Aptitude[] = [
    { name: 'Angular', value: 10 },
    { name: 'Ionic', value: 10 },
    { name: 'Node', value: 9 },
    { name: 'Nestjs', value: 9 },
    { name: 'React', value: 9 },
    { name: 'React-native', value: 8 },
  ];

  public programmingLanguage: Aptitude[] = [
    { name: 'Javascript', value: 83 },
    { name: 'Typescript', value: 91 },
    { name: 'Java', value: 60 },
    { name: 'C#', value: 65 },
  ];

  constructor() {}

  ngOnInit() {}
}
