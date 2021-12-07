import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData;
  @Input() align;
  theme = localStorage.getItem('colorSelected');
  @Input() columnHeader;
  @Input() position;
  objectKeys = Object.keys;
  dataSource;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  ngOnInit() {
    console.log(this.tableData);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}