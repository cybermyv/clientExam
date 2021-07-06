import { Component, OnInit } from '@angular/core';
import { DataGridService } from '../data-grid.service';

@Component({
  selector: 'app-data-grid-list',
  templateUrl: './data-grid-list.component.html',
  styleUrls: ['./data-grid-list.component.scss']
})
export class DataGridListComponent implements OnInit {

  constructor(private readonly dataGridService: DataGridService) { }

  data: any[];

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.dataGridService.getAll().subscribe(
      data => this.data = data.results
    )
  }

}
