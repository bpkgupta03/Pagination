import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { PageEvent } from '@angular/material/paginator';
import { LoaderService } from '../services/loader.service';
// import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  displayedColumns: string[] = ['ticketId', 'operator', 'from', 'to', 'timeSpent'];
  dataSource: any[] = [];
  length = 100; // Initial length, will be updated after API call
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];

  constructor(
    private dataService: DataServiceService,
    public loaderService:LoaderService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(event?: PageEvent) {
    const pageIndex = event ? event.pageIndex : 0;
    const pageSize = event ? event.pageSize : this.pageSize;

    // this.loaderService.showLoader();
    // console.log(this.loaderService.isLoading$)
    this.dataService.getPaginatedData(pageIndex, pageSize).subscribe(
      (data) => {
        this.dataSource = data.results;
        this.length = data.totalItems;
        this.loaderService.hideLoader();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
