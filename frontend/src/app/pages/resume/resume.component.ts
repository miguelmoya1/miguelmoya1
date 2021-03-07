import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public title = 'Resume';
  public experience = [
    {
      title: 'Boon Agency.',
      subtitle: 'Full Stack Developer',
      years: '2018 - now',
    },
    {
      title: 'Conwork | Partner i+d+i tecnológico.',
      subtitle: 'Full Stack Developer',
      years: '2017 - 2018',
    },
  ];
  public education = [
    {
      title: 'IES San Vicente del Raspeig.',
      subtitle: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      years: '2015 - 2017',
    },
    {
      title: 'IES San Vicente del Raspeig.',
      subtitle: 'Técnico en Sistemas Microinformáticos y Redes',
      years: '2012 - 2015',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
