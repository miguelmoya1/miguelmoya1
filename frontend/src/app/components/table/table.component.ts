import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type IData = { header: string; value: string | number; type?: string };

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 mx-4">
      <div class="flex items-center gap-2 my-2" *ngFor="let item of data">
        <div class="text-primary uppercase font-bold">{{ item.header }}:</div>

        <div class="italic text-sm text-gray-400">
          <a
            [target]="item.type === 'tel:' ? '_self' : '_blank'"
            [href]="item.type + item.value"
            *ngIf="item.type; else default"
            >{{ item.value }}</a
          >
          <ng-template #default>{{ item.value }}</ng-template>
        </div>
      </div>
    </div>
  `,
})
export class TableComponent {
  @Input() public data!: IData[];
}
