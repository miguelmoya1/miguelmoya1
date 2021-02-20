import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public info = [
    { header: 'Adress', value: 'San Vicente del Raspeig' },
    { header: 'Email', value: 'miguelmoyaortega@gmail.com' },
    { header: 'Phone', value: '+34 646 74 95 70' },
    // {header: '', value: ''},
  ];
  constructor() {}

  ngOnInit() {}
}
