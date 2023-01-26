import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, TableComponent],
  template: `
    <app-title [title]="'Get in Touch'" />

    <iframe
      class="w-full h-64 rounded-xl"
      title="Google maps directions"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12508.156098892146!2d-0.5330088558701697!3d38.394346722823585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6234073bc6dced%3A0x2428cb56fa0c4878!2sSan%20Vicente%20del%20Raspeig%2C%20Alicante!5e0!3m2!1ses!2ses!4v1613818984493!5m2!1ses!2ses"
      allowfullscreen="false"
      loading="lazy"
    ></iframe>

    <app-table [data]="info" />
  `,
})
export class ContactComponent implements OnInit {
  public info = [
    { header: 'Address', value: 'San Vicente del Raspeig' },
    { header: 'Email', value: 'miguelmoyaortega@gmail.com', type: 'mailto:' },
    // { header: 'Phone', value: '+34 646 74 95 70', type: 'tel:' },
  ];
  constructor() {}

  ngOnInit() {}
}
