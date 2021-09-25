import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <app-page>
      <app-title [title]="title"></app-title>

      <div class="text-gray-200 my-8 text-justify">
        My name is Miguel Moya Ortega. I'm a Full Stack Developer based in San
        Vicente del Raspeig, Spain, and I'm very passionate and dedicated to my
        work. With {{ date }} years experience as a professional Full Stack
        Developer, I have acquired the skills necessary to build great and
        premium websites, apps and services.
      </div>

      <app-table [data]="table"></app-table>
    </app-page>
  `,
})
export class AboutMeComponent implements OnInit {
  public title = 'About Me';
  public date = new Date().getFullYear() - new Date('01/03/2017').getFullYear();
  public imageSize = window.innerWidth * 0.3;

  public table = [
    { header: 'age', value: this.calculateAge(new Date(1995, 1, 8)) },
    { header: 'residence', value: 'Spain' },
    { header: 'address', value: 'San Vicente del raspeig, Spain' },
  ];

  constructor() {}

  calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  ngOnInit() {}
}
