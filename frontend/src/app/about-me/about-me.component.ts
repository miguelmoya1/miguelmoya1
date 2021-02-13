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

  constructor() {}

  ngOnInit() {}
}
