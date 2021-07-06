import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridListComponent } from './data-grid-list.component';

describe('DataGridListComponent', () => {
  let component: DataGridListComponent;
  let fixture: ComponentFixture<DataGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
