import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataGridListComponent } from './list/data-grid-list.component';

const routes: Routes = [
    {
        path: '',
        component: DataGridListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DataGridRoutingModule { }