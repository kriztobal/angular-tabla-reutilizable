import { NgClass, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  // Recibe datos desde otro componente
  @Input() data: any[] = [];
  @Input() columns: { key: string, label: string }[] = [];

}
