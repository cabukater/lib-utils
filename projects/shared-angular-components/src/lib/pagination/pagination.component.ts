import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  currentPage = 4;
  theme = localStorage.getItem("colorSelected");
  page: number;
  @Input('items') items: any;
  @Output() pageSend = new EventEmitter();
  
  pageChanged(event: any): void {
    this.page = event.page;
    this.pageSend.emit(this.page)
  }
}
