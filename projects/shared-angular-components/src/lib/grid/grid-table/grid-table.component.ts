import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GridPagination, IGridColumnSchema, IGridPagination, IGridSchema } from '../grid.schema';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { GridSelection } from '../grid-selection';

@Component({
  selector: 'lib-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  @Input() schema: IGridSchema;
  @Input() data: any[];
  @Input() enableActions = true;
  @Input() showColumns: string[] = [];
  @Input() showFilters: string[] = [];

  @Output() selectionChanged: EventEmitter<any[]> = new EventEmitter();
  @Output() throwError: EventEmitter<any> = new EventEmitter();

  private $paginator: BehaviorSubject<GridPagination> = new BehaviorSubject<GridPagination>(null);;
  public selector: GridSelection;

  public $pagination: BehaviorSubject<GridPagination> = new BehaviorSubject<GridPagination>(new GridPagination());
  public pagination: GridPagination;

  public $total = new BehaviorSubject<number>(null);

  public loading: boolean;

  ngOnInit(): void
  {
    if (this.showColumns.length) {
      this.schema.columns = this.schema.columns.filter(item => {
        return this.showColumns.includes(item.field);
      });
    }

    this.selector = new GridSelection(this.schema);

    if (this.schema.autoload === true && this.schema.pagination) {
      this.paginate(this.schema.pagination);
    }

    this.subscriptions.add(
      this.$paginator.pipe(
        filter(value => value != null),
        tap((pagination) => {
          this.loading = true;
          this.pagination = pagination;
        }),
        switchMap(pagination => this.schema.service.paginate(pagination, this.schema)),
        map(apiResponse => this.schema.service.parsePaginateResponse(apiResponse))
      ).subscribe(
        (parsedApiResponse) => {
          this.data = parsedApiResponse.data;
          this.selector.data = this.data;
          this.$pagination.next(this.pagination);
          this.$total.next(parsedApiResponse.total);
          this.loading = false;
        }, (error) => {
          this.loading = false;
          this.throwError.emit(error);
        }
      )).add(
      this.selector.$selection.subscribe(
        value => this.selectionChanged.emit(value)
      )
    );
  }

  paginate(pagination?: IGridPagination) {

    if (!pagination && this.schema.pagination) {
      pagination = this.schema.pagination
    }

    this.$paginator.next(GridPagination.build(pagination));
  }

  changedPage($event): void {
    this.pagination.page = $event;
    this.$paginator.next(this.pagination);
  }

  changedLimit($event): void {
    this.pagination.page = 1;
    this.pagination.limit = $event;
    this.$paginator.next(this.pagination);
  }

  changeSearch($event): void {
    this.selector.cleanSelection();
    this.pagination.page = 1;
    this.pagination.search = $event;
    this.$paginator.next(this.pagination);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.selector.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selector.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  orderBy(item: IGridColumnSchema): void
  {
    this.pagination.sortColumn = item.field;
    this.pagination.sortDirection = (this.pagination.sortDirection === 'asc') ? 'desc' : 'asc';
    this.$paginator.next(this.pagination);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
