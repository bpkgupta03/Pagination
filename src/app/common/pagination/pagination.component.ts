import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() totalItems!: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  get totalPages() : number{
    return Math.ceil(this.totalItems/this.itemsPerPage);
  }

  changePage(page:number) : void{
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
  
}