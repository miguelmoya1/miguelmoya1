import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
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
