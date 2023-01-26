import { Component } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TitleComponent, TableComponent],
  template: `
    <app-title [withMarginTop]="false" [title]="title" />

    <div class="text-gray-200 mx-4 text-justify mb-8">
      My name is Miguel Moya Ortega. I'm a Full Stack Developer based in San
      Vicente del Raspeig, Spain, and I'm very passionate and dedicated to my
      work. With {{ date }} years experience as a professional Full Stack
      Developer, I have acquired the skills necessary to build great and premium
      websites, apps and services.
    </div>

    <app-table [data]="table" />
  `,
})
export class AboutMeComponent {
  public title = 'About Me';
  public date = new Date().getFullYear() - new Date('01/03/2017').getFullYear();
  public imageSize = window.innerWidth * 0.3;

  public table = [
    { header: 'residence', value: 'Spain' },
    { header: 'address', value: 'San Vicente del Raspeig, Alicante' },
  ];

  calculateAge(birthday: Date) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
