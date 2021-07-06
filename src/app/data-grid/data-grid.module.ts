import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridListComponent } from './list/data-grid-list.component';
import { DataGridRoutingModule } from './data-grid-routing.module';


@NgModule({
  declarations: [DataGridListComponent],
  imports: [
    CommonModule,
    DataGridRoutingModule,
  ]
})
export class DataGridModule { }
