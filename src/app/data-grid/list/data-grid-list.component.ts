import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IDataRecord } from './../../data.interface';
import { DataGridService } from '../data-grid.service';

@UntilDestroy()
@Component({
  selector: 'app-data-grid-list',
  templateUrl: './data-grid-list.component.html',
  styleUrls: ['./data-grid-list.component.scss']
})
export class DataGridListComponent implements OnInit {

  constructor(private readonly dataGridService: DataGridService) { }
  
  data: IDataRecord[];
  isEditing: boolean = false;
  enableEditIndex = null;
  editableRow: IDataRecord | null = null;

  ngOnInit() {
    this.initData();    
  }

  initData(): void {
    this.dataGridService.getAll().subscribe((data: IDataRecord[]) => {
      this.data = data;
    })
  }


  delete(id: number): void {
    this.dataGridService.delete(id).pipe(untilDestroyed(this)).subscribe(
      data => console.log(data)
    )
  }

  add(){
    
  }

  switchEditMode(i) {
    this.isEditing = true;
    this.enableEditIndex = i;
    console.log(i);
  }

  save(item: IDataRecord) {
    this.isEditing = false;
    this.enableEditIndex = null;

    console.log(item);
  }

}
