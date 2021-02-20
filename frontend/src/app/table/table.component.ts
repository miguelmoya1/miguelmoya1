import { Component } from '@angular/core';

type IData = { header: string; value: string | number };

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  inputs: ['data'],
})
export class TableComponent {
  public data!: IData[];

  constructor() {}
}
