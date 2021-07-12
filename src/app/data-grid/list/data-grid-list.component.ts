import { Component, OnInit } from '@angular/core';
import { IDataRecord } from './../../data.interface';
import { DataGridService } from '../data-grid.service';

@Component({
  selector: 'app-data-grid-list',
  templateUrl: './data-grid-list.component.html',
  styleUrls: ['./data-grid-list.component.scss']
})


export class DataGridListComponent implements OnInit {

  constructor(private readonly dataGridService: DataGridService) { }
  data: IDataRecord[];
  isEditing: boolean = false;
  isCreating: boolean = false;
  enableEditIndex = null;

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.dataGridService.getAll().subscribe((data: IDataRecord[]) => {
      this.data = data;
    })
  }

  delete(id: number): void {
    this.dataGridService.delete(id).subscribe()
  }

  add(): void {
    const lastId = Math.max(...this.data.map(item => item.eventId));
    const newRecord: IDataRecord = <IDataRecord>{ 'eventId': lastId + 1 };

    this.data = [newRecord, ...this.data];
    this.switchEditMode(0);
    this.isCreating = true;
  }

  switchEditMode(index: number): void {
    this.isEditing = true;
    this.enableEditIndex = index;
  }

  save(item: IDataRecord) {
    if (this.isCreating) {
      this.create(item);
      return;
    }

    this.update(item);
  }

  create(item: IDataRecord): void {
    this.isCreating = false;
    this.enableEditIndex = null;

    this.dataGridService.create(item).subscribe();
  }

  update(item: IDataRecord) {
    this.isEditing = false;
    this.enableEditIndex = null;

    this.dataGridService.update(item).subscribe();
  }
}
