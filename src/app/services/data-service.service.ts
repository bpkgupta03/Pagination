import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private http:HttpClient) { }

  getPaginatedData(page:number,itemsPerPage:number) : Observable<any> {
    const params = new HttpParams()
      .set('page',page.toString())
      .set('itemsPerPage',itemsPerPage.toString());
    
    return this.http.get<any>('api/data',{params});
  }

}
